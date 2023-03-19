import { currentCommand } from "./currentCommandStore";
import { GHCommand } from "./gh.types";
import { selectSubcommandInput } from "./inputs";
import { createQuickPickMenu, isGoBackOption } from "./quickpick";

export async function selectSubcommand(command: GHCommand) {
  const subcommands = command.subcommands;

  if (!subcommands) {
    throw new Error("No sub commands found");
  }

  if (Object.values(subcommands).length === 1) {
    const [name, subcommand] = Object.entries(subcommands)[0];
    currentCommand.addSubcommand(name, subcommand);
    return subcommand;
  }

  const items = Object.entries(subcommands)
    .filter(([_, object]) => object.usage)
    .map(([name, subcommand]) => ({
      label: subcommand.usage,
      name,
      ...subcommand,
    }));

  const subcommand = await createQuickPickMenu(items, {
    title: "Select sub command",
    canExecute: false,
    canGoBack: true,
  });

  if (!subcommand) {
    throw new Error("No sub command selected");
  }

  if (isGoBackOption(subcommand)) {
    currentCommand.goBack();
    return;
  }

  let inputValue: string | undefined = undefined;
  if (subcommand.inputs) {
    inputValue = await selectSubcommandInput(subcommand.inputs);
  }

  currentCommand.addSubcommand(subcommand.name, subcommand, inputValue);
}
