/**
 * This file contains the logic for running the commands
 */

import { selectCommand } from "./commands";
import { currentCommand } from "./currentCommandStore";
import { handleFlags } from "./flags";
import { handleInputs } from "./inputs";
import { logInfo } from "./logging";
import { selectSubcommand } from "./subcommand";
import * as vscode from "vscode";
import { Config } from "./configs";

export async function createGHCommand() {
  try {
    const command = await selectCommand();
    const subcommand = await selectSubcommand(command);
    await handleInputs(subcommand);
    await handleFlags(subcommand);

    const result = currentCommand.get();
    logInfo(`Final command is: ${result}`);
    return result;
  } catch (e) {
    console.error(e);
    return;
  }
}

export async function runCommand(command: string) {
  vscode.workspace
    .getConfiguration("gh-cli-actions")
    .update("lastCommand", command, vscode.ConfigurationTarget.Global);

  const confirm = await vscode.window.showQuickPick(
    [
      {
        label: "Run command",
        description: command,
        alwaysShow: true,
        picked: true,
        run: true,
      },
      {
        label: "Copy command",
        description: command,
        alwaysShow: true,
        copy: true,
      },
      {
        label: "Cancel",
        alwaysShow: true,
        cancel: true,
      },
    ],
    {
      title: command,
    }
  );

  if (!confirm || "cancel" in confirm) {
    vscode.window.showInformationMessage("Command cancelled");
    return;
  }

  if ("run" in confirm) {
    const terminal = vscode.window.createTerminal("gh-cli-actions");
    terminal.show();
    terminal.sendText(command);
  }

  if ("copy" in confirm) {
    vscode.env.clipboard.writeText(command);
    vscode.window.showInformationMessage(
      `Command copied to clipboard "${command}"`
    );
  }
}

export async function runLastCommand() {
  const lastCommand = Config.get("lastCommand");
  
  if (lastCommand) {
    runCommand(lastCommand);
  } else {
    vscode.window.showInformationMessage("No last command found");
  }
}
