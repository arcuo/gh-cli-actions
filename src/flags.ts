import { window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Flag, Subcommand } from "./gh.types";
import { getInputName } from "./inputs";
import {
  createQuickPickMenu,
  isExecuteOption,
  isGoBackOption,
} from "./quickpick";

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
    return { isDone: true };
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
      canGoBack: true,
      picked: "execute",
    });

    if (!flag || isExecuteOption(flag)) {
      return { isDone: true };
    }

    if (isGoBackOption(flag)) {
      currentCommand.goBack();
      return { isDone: false };
    }

    let flagValue: string | undefined = undefined;

    if (flag.input) {
      flagValue = await writeFlagInput(flag);

      if (!flagValue && flag.input.required) {
        throw new Error("Required flag input not provided");
      }
    }

    // TODO: Cannot read from GH manual if flags are "multiple". Remove before this can be figured out to allow adding multiple if needed
    // if (!flag.input?.multiple) {
    //   items = items.filter((item) => item !== flag);
    // }

    currentCommand.addFlag(flag, flagValue);
  }

  return { isDone: true };
}
