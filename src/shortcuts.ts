import * as vscode from "vscode";
import { Config } from "./configs";
import { createQuickPickMenu } from "./quickpick";
import { createGHCommand, runCommand } from "./runners";

function getShortcuts() {
  const shortcuts = Config.get("ghShortcuts") ?? [];
  if (!shortcuts.length) {
    throw Error(
      'No shortcuts found. You can create shortcuts with the "Create Shortcut" command'
    );
  }
  return shortcuts;
}

export async function createNewShortcut() {
  const shortcutCommand = await createGHCommand();

  if (!shortcutCommand) {
    throw Error("No shortcut created");
  }

  const name = await vscode.window.showInputBox({
    prompt: "Enter a name for the shortcut",
    value: shortcutCommand,
  });

  const shortcuts = Config.get("ghShortcuts") ?? [];

  shortcuts.push({
    name: name ?? shortcutCommand,
    command: shortcutCommand,
  });

  Config.set("ghShortcuts", shortcuts);

  vscode.window.showInformationMessage(
    `Shortcut created - ${name} : ${shortcutCommand}`
  );
}

async function selectShortcut() {
  const shortcuts = getShortcuts();

  const items = shortcuts.map((shortcut) => ({
    label: shortcut.name,
    description: shortcut.command,
    ...shortcut,
  }));

  const selected = await createQuickPickMenu(items, {
    title: "Select a shortcut",
    canExecute: false,
    skipType: undefined,
  });

  if (!selected) {
    throw Error("No shortcut selected");
  }

  return selected;
}

export async function runShortcut() {
  const shortcut = await selectShortcut();
  runCommand(shortcut.command);
}

export async function removeShortCut() {
  const shortcuts = getShortcuts();

  const shortcut = await selectShortcut();

  const filteredShortcuts = shortcuts.filter((sh) => shortcut.name !== sh.name);

  Config.set("ghShortcuts", filteredShortcuts);

  vscode.window.showInformationMessage(
    `Shortcut removed - ${shortcut.name} : ${shortcut.command}`
  );
}
