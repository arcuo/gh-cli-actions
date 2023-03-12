import { currentCommand } from "./currentCommandStore";
import { GithubCLICommands } from "./gh.types";
import { createQuickPickMenu } from "./quickpick";

const commandNames = Object.entries(GithubCLICommands);

export async function selectCommand() {
  currentCommand.reset();
  const items = commandNames.map(([name, command]) => ({
    label: `gh ${name}`,
    name,
    ...command,
  }));

  const command = await createQuickPickMenu(items, {
    title: "Select Command",
    canExecute: false,
  });

  if (!command) {
    throw new Error("No command selected");
  }

  currentCommand.add(command.name);

  return command;
}
