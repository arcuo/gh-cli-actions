import { window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Flag, Subcommand } from "./gh.types";
import { getInputName, wrapWithQuotes } from "./inputs";
import { createQuickPickMenu } from "./quickpick";

async function writeFlagInput(flag: Flag) {
  if (!flag.names) {
    return;
  }

  const longName = flag.names.reduce((acc, name) => {
    return name.length > acc.length ? name : acc;
  }, "");

  let inputName = flag.input ? " " + getInputName(flag.input) : "";
  const helper = `${currentCommand.get()} --${longName}${inputName}`;

  const flagInputString = await window.showInputBox({
    title: `Enter flag input ${helper}`,
    placeHolder: longName,
  });

  if (!flagInputString) {
    return;
  }

  return flag.input?.type === "string"
    ? wrapWithQuotes(flagInputString)
    : flagInputString;
}

export async function handleFlags(subcommand: Subcommand) {
  const flags = subcommand.flags;

  if (!flags) {
    return;
  }

  let done = false;

  let items = flags.map((flag) => ({
    label: flag.names.join(", "),
    ...flag,
  }));

  while (!done) {
    const flag = await createQuickPickMenu(items, {
      title: "Select Flag",
      canExecute: true,
      skipType: undefined,
      picked: "execute",
    });

    if (!flag || "isExecuteOption" in flag) {
      done = true;
      continue;
    }

    currentCommand.add(flag.names[0]);

    if (flag.input) {
      const flagString = await writeFlagInput(flag);
      if (flagString) {
        currentCommand.add(flagString);
      } else if (flag.input.required) {
        throw new Error("Required flag input not provided");
      }
    }
  }
}
