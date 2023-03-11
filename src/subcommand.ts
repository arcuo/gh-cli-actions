import { currentCommand } from './currentCommandStore';
import { GHCommand } from "./gh.types";
import { createQuickPickMenu } from "./quickpick";

export async function selectSubcommand(command: GHCommand) {
  const subcommands = command.subcommands;

  if (!subcommands) {
    throw new Error("No sub commands found");
  }

  if (Object.values(subcommands).length === 1) {
    const [name, subcommand] = Object.entries(subcommands)[0];
    currentCommand.add(name);
    return subcommand;
  }

  const items = Object.entries(subcommands).map(([name, subcommand]) => ({
    label: subcommand.usage,
    ...subcommand,
  }));

  const subcommand = await createQuickPickMenu(items, {
    title: "Select sub command",
    canExecute: false,
    skipType: undefined,
  });

  if (!subcommand) {
    throw new Error("No sub command selected");
  }

  return subcommand;
}
