import json
import re
from bs4 import BeautifulSoup
import requests


def getPage(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    return soup


def getInputsfromString(string):
    multiple_inputs = re.findall(r"(?:\[|\{)(<.*>(?: \|)?)+(?:\]|\})+", string)
    individual_inputs = re.findall(r"(?!\[|\{)(<.*>(?! \|))+(?!\]|\})", string)

    inputs = []
    for input in individual_inputs:
        input = {
            "name": input,
            "type": "string" if "string" in input else "shell",
        }

        inputs.append(input)

    for input in multiple_inputs:
        input = {
            "name": input,
            "type": "string" if "string" in input else "shell",
            "multiple": True,
        }

        inputs.append(input)

    return inputs


def getSubcommandInfo(subcommandDict, page):
    usage = page.select_one("pre.highlight").get_text(strip=True)

    subcommandDict["usage"] = usage

    inputs = getInputsfromString(usage)

    subcommandDict["inputs"] = inputs

    description = page.select_one(".main-content > .container-lg > p").string

    subcommandDict["description"] = description

    try:
        flags = page.select("#options + dl > dt")
        flagDescriptions = page.select("#options + dl > dd")
        flags = [flag.text for flag in flags]
        flagDescriptions = [
            flagDescription.text for flagDescription in flagDescriptions
        ]

        flags = list(zip(flags, flagDescriptions))

        flagDicts = []
        for flag in flags:
            name, description = flag

            names = re.findall(r"(-?(?:-[a-zA-Z]*)+)", name)
            inputs = getInputsfromString(name)
            input = None
            if len(inputs) == 1:
                input = inputs[0]

            flagDict = {
                "names": names,
                "description": description,
                "input": input,
            }

            flagDicts.append(flagDict)

        subcommandDict["flags"] = flagDicts
    except:
        pass


def stripGH(string):
    return string.replace("gh ", "")


def getCommandInfo(command, commandLink):
    try:
        commandDict = {}
        print(f"{command}")

        commandPage = getPage("https://cli.github.com/manual/" + commandLink)

        try:
            subcommands = commandPage.select("[id$='commands'] + ul [href^='./gh']")
        except:
            getSubcommandInfo(commandDict, commandPage)
            return

        description = " ".join(
            [
                " ".join([t for t in s.stripped_strings])
                for s in commandPage.select(
                    f".main-content #{command.replace(' ', '-')} + p"
                )
            ]
        )

        commandDict["description"] = description

        subcommandNames = [subcommand.string for subcommand in subcommands]
        subcommandLinks = [subcommand["href"] for subcommand in subcommands]

        commandDict["subcommands"] = {}

        for subCommand, subcommandLink in zip(subcommandNames, subcommandLinks):
            try:
                print(f"{subCommand}")

                subcommandDict = {}

                commandDict["subcommands"][
                    stripGH(subCommand.replace(command + " ", ""))
                ] = subcommandDict

                subcommandPage = getPage(
                    url="https://cli.github.com/manual/" + subcommandLink
                )

                getSubcommandInfo(subcommandDict, subcommandPage)
            except Exception as e:
                print("Error with subcommand: " + subCommand + " - " + str(e))

        return stripGH(command), commandDict
    except Exception as e:
        print("Error with command: " + command + " " + str(e))


# Main

fullDict = {}

manualPage = getPage("https://cli.github.com/manual/gh")

commands = manualPage.select("[href^='./gh']")

# commands = commands[5:6]

commandNames = [command.string for command in commands]
commandLinks = [command["href"] for command in commands]

args = zip(commandNames, commandLinks)

import concurrent.futures

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
    pool = [
        executor.submit(getCommandInfo, commandName, commandLink)
        for commandName, commandLink in args
    ]
    for thread in pool:
        res = thread.result()
        if res is None:
            continue
        commandName, commandDict = res
        fullDict[commandName] = commandDict

    with open("./src/gh-info.json", "w") as f:
        f.write(json.dumps(fullDict))
        f.close()
