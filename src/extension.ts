// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { currentCommand } from "./currentCommandStore";
import { initOutputChannel, logInfo } from "./logging";
import { createGHCommand, runCommand, runLastCommand } from "./runners";
import { createNewShortcut, removeShortCut, runShortcut } from "./shortcuts";

import Package = require("../package.json");

type AvailableCommands = typeof Package.contributes.commands[number]["command"];

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Initiating Github CLI Actions");
  initOutputChannel(context);

  function registerCommand(
    command: AvailableCommands,
    callback: (...args: any[]) => any
  ) {
    context.subscriptions.push(
      vscode.commands.registerCommand(command, callback)
    );
  }

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  logInfo(`Initiating Github CLI Actions`);

  registerCommand("gh-cli-actions.gh-run", async () => {
    const command = await createGHCommand();

    if (!command) {
      return;
    }

    runCommand(command);
    currentCommand.reset();
  });

  registerCommand("gh-cli-actions.gh-run-last", async () => {
    runLastCommand();
  });

  registerCommand("gh-cli-actions.gh-create", async () => {
    createNewShortcut();
  });

  registerCommand("gh-cli-actions.gh-run-shortcut", async () => {
    runShortcut();
  });

  registerCommand("gh-cli-actions.gh-delete-shortcut", async () => {
    removeShortCut();
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
