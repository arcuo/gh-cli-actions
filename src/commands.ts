import { Config } from "./configs";
import { currentCommand } from "./currentCommandStore";
import { GithubCLICommands } from "./gh.types";
import { createQuickPickMenu } from "./quickpick";

const hidden = Config.get("hideOptions") ?? [];
const favorites = Config.get("favorites") ?? [];

const commandNames = Object.entries(GithubCLICommands).filter(
  ([name]) => hidden.indexOf(name) === -1
).sort((a, b) => {
  const aIsFavorite = favorites.indexOf(a[0]) !== -1;
  const bIsFavorite = favorites.indexOf(b[0]) !== -1;

  if (aIsFavorite && !bIsFavorite) {
    return -1;
  }

  if (!aIsFavorite && bIsFavorite) {
    return 1;
  }

  return a[0].localeCompare(b[0]);
});

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
