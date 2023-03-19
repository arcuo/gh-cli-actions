import { window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Flag, Subcommand } from "./gh.types";
import { getInputName } from "./inputs";
import { createQuickPickMenu } from "./quickpick";

async function writeFlagInput(flag: Flag) {
  if (!flag.names) {
    return;
  }

  const longName = flag.names.reduce((acc, name) => {
    return name.length > acc.length ? name : acc;
  }, "");

  let inputName = flag.input ? " " + getInputName(flag.input) : "";
  const helper = `${currentCommand.get()} ${inputName}`;

  const flagInputString = await window.showInputBox({
    title: `Enter flag input ${helper}`,
    placeHolder: longName,
  });

  if (!flagInputString) {
    return;
  }

  return flagInputString;
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
      picked: "execute",
    });

    if (flag && "input" in flag && !flag.input?.multiple) {
      items = items.filter((item) => item !== flag);
    }

    if (!flag || "isExecuteOption" in flag) {
      done = true;
      continue;
    }

    let flagValue: string | undefined = undefined;

    if (flag.input) {
      flagValue = await writeFlagInput(flag);
      if (!flagValue && flag.input.required) {
        throw new Error("Required flag input not provided");
      }
    }

    currentCommand.addFlag(flag, flagValue);
  }
}
