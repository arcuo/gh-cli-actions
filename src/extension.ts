// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { selectSubcommand } from "./subcommand";
import { selectCommand } from "./commands";
import { currentCommand } from "./currentCommandStore";
import { handleInputs } from "./inputs";
import { initOutputChannel, logInfo } from "./logging";

async function createGHCommand() {
  try {
    const command = await selectCommand();
    const subcommand = await selectSubcommand(command);
    await handleInputs(subcommand);

    logInfo(`Final command is: ${currentCommand.get()}`);
  } catch (e) {
    console.error(e);
    return;
  }
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Initiating Github CLI Actions");
  initOutputChannel(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  logInfo(`Registering 'gh' command`);
  const disposable = vscode.commands.registerCommand(
    "gh-cli-actions.gh",
    createGHCommand
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
