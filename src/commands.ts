import { commands, QuickPickItem, window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Subcommand, GHCommand, GithubCLICommands, Input } from "./gh.types";
import { createQuickPickMenu } from './quickpick';

const commandNames = Object.entries(GithubCLICommands);
console.log('commandNames:', commandNames);

export async function selectCommand() {
  currentCommand.reset();
  const items = commandNames.map(
    ([name, command]) => ({
      label: `gh ${name}`,
      name,
      ...command,
    })
  );

  console.log('items:', items);
  const command = await createQuickPickMenu(items, {
    title: "Select Command",
    canExecute: false,
    skipType: undefined,
  });

  if (!command) {
    throw new Error("No command selected");
  }

  currentCommand.add(command.name);

  return command;
}



