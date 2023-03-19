import * as vscode from "vscode";
import { Config } from "./configs";
import { logAndInform, logAndInformError } from "./logging";
import { createQuickPickMenu } from "./quickpick";
import { createGHCommand, runCommand } from "./run";

function getShortcuts() {
  const shortcuts = Config.get("ghShortcuts") ?? [];
  if (!shortcuts.length) {
    throw Error(
      'No shortcuts found. You can create shortcuts with the "Create Shortcut" command'
    );
  }
  return shortcuts;
}

async function writeShortcut() {
  const shortcutString = await vscode.window.showInputBox({
    title: `Enter raw shortcut command`,
    placeHolder: `e.g. "gh pr create --title 'My PR' --body 'My PR body' --draft"`,
  });

  if (!shortcutString) {
    return;
  }

  return shortcutString;
}

export async function createNewShortcut() {
  // Select creation method
  const creationMethod = await createQuickPickMenu(
    [
      {
        label: "Create shortcut from command palette",
        description: "Create a shortcut from a command",
        alwaysShow: true,
        picked: true,
        create: true,
      },
      {
        label: "Manually write shortcut",
        description: "Create a shortcut from a raw command",
        alwaysShow: true,
        raw: true,
      },
    ],
    {
      title: "Select a shortcut creation method",
      canExecute: false,
    }
  );

  if (!creationMethod) {
    logAndInformError("Shortcut creation cancelled");
    throw Error("Shortcut creation cancelled");
  }

  const shortcutCommand = creationMethod.create
    ? await createGHCommand()
    : creationMethod.raw
    ? await writeShortcut()
    : undefined;

  if (!shortcutCommand) {
    logAndInformError("Shortcut creation cancelled");
    throw Error("Shortcut creation cancelled");
  }

  const name = await vscode.window.showInputBox({
    prompt: "Enter a name for the shortcut",
    value: shortcutCommand,
  });

  if (!name) {
    logAndInformError("Shortcut creation cancelled");
    throw Error("Shortcut creation cancelled");
  }

  const shortcuts = Config.get("ghShortcuts") ?? [];

  shortcuts.push({
    name: name ?? shortcutCommand,
    command: shortcutCommand,
  });

  Config.set("ghShortcuts", shortcuts);

  logAndInform(`Shortcut created - ${name} : ${shortcutCommand}`);

  runCommand(shortcutCommand);
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

  logAndInform(`Shortcut removed - ${shortcut.name} : ${shortcut.command}`);
}
