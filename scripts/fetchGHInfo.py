import json
import re

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait


def getInputsfromString(string):
    individual_inputs = re.findall(r" <(.*)>", string)
    multiple_inputs = re.findall(r"\[<(.*)>\]", string)

    inputs = []
    for input in individual_inputs:
        input = {
            "name": input,
            "type": "string",
            "required": True,
        }

        inputs.append(input)

    for input in multiple_inputs:
        input = {
            "name": input,
            "type": "string",
            "multiple": True,
            "required": True,
        }

        inputs.append(input)

    return inputs


def getSubcommandInfo(subcommandDict):
    usage = (
        WebDriverWait(driver, 5)
        .until(EC.presence_of_element_located((By.CSS_SELECTOR, "pre.highlight")))
        .text
    )

    subcommandDict["usage"] = usage

    inputs = getInputsfromString(usage)

    subcommandDict["inputs"] = inputs

    description = (
        WebDriverWait(driver, 5)
        .until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR, ".main-content > .container-lg > p")
            )
        )
        .text
    )

    subcommandDict["description"] = description

    try:
        flags = WebDriverWait(driver, 5).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "#options + dl > dt"))
        )
        flagDescriptions = WebDriverWait(driver, 5).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "#options + dl > dd"))
        )
        flags = [flag.text for flag in flags]
        flagDescriptions = [
            flagDescription.text for flagDescription in flagDescriptions
        ]

        flags = list(zip(flags, flagDescriptions))

        flagDicts = []
        for flag in flags:
            name, description = flag

            names = re.findall(r"(-?(?:-[a-z]*)+)", name)
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


options = Options()

options.add_argument("--headless")

driver = webdriver.Chrome(options=options)

driver.get("https://cli.github.com/manual/gh")

fullDict = {}

commands = WebDriverWait(driver, 5).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, "[href^='./gh']"))
)

commandNames = [command.text for command in commands]
commandLinks = [command.get_attribute("href") for command in commands]

commandTotal, commandCount = len(commandNames), 0

for command, commandLink in zip(commandNames, commandLinks):
    try:
        print(f'({commandCount}/{commandTotal}) {command}')

        commandDict = {}

        fullDict[command] = commandDict

        driver.get(commandLink)

        try:
            subcommands = WebDriverWait(driver, 5).until(
                EC.presence_of_all_elements_located(
                    (By.CSS_SELECTOR, "[id$='commands'] + ul [href^='./gh']")
                )
            )
        except:
            getSubcommandInfo(commandDict)
            continue

        subcommandNames = [subcommand.text for subcommand in subcommands]
        subcommandLinks = [subcommand.get_attribute("href") for subcommand in subcommands]

        subCommandTotal, subCommandCount = len(subcommandNames), 0

        for subCommand, subcommandLink in zip(subcommandNames, subcommandLinks):
            try:
                print(f'({commandCount}/{commandTotal}) ({subCommandCount}/{subCommandTotal}) {subCommand}')

                subcommandDict = {}

                commandDict[subCommand] = subcommandDict

                driver.get(subcommandLink)

                getSubcommandInfo(subcommandDict)
            except:
                print("Error with subcommand: " + subCommand)
    except:
        print("Error with command: " + command)


with open("ghInfo.json", "w") as f:
    f.write(json.dumps(fullDict))
