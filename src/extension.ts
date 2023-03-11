// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { currentCommand } from "./currentCommandStore";
import { initOutputChannel, logInfo } from "./logging";
import { createGHCommand, runCommand, runLastCommand } from "./runners";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Initiating Github CLI Actions");
  initOutputChannel(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  logInfo(`Initiating Github CLI Actions`);
  context.subscriptions.push(
    vscode.commands.registerCommand("gh-cli-actions.gh-run", async () => {
      const command = await createGHCommand();

      if (!command) {
        return;
      }

      runCommand(command);
      currentCommand.reset();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("gh-cli-actions.gh-run-last", async () => {
      runLastCommand();
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
