import { commands, Disposable, QuickPickItem, window } from "vscode";
import { GHCommand } from "./gh";

export function registerGHCommand(
  name: string,
  command: GHCommand
): Disposable {
  const { description, actions } = command;

  const ghName = `gh ${name}`;
  return commands.registerCommand(ghName, () => {
    showActionsQuickPick(actions, ghName, description).then((action) => {
      // TODO
    });
  });
}

function showActionsQuickPick(
  actions: GHCommand["actions"],
  ghName: string,
  actionDescription: string
) {
  const items = Object.entries(actions).map<QuickPickItem>(
    ([name, action]) => ({
      label: name,
      description: action.description,
      detail: action.verboseDescription,
    })
  );

  return window.showQuickPick(items, {
    title: actionDescription,
    placeHolder: ghName,
    canPickMany: false,
    matchOnDescription: true,
    matchOnDetail: true,
  });
}
