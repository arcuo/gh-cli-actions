// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { registerGHCommand } from "./create_gh_actions";
import { GithubCLICommands } from "./gh";
import { initOutputChannel, logInfo } from "./logging";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  initOutputChannel(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const actionDisposables = Object.entries(GithubCLICommands).map(
    ([name, command]) => {
      logInfo(`Registering command: ${name}`);
      return registerGHCommand(name, command);
    }
  );

  context.subscriptions.concat(actionDisposables);
}

// This method is called when your extension is deactivated
export function deactivate() {}
