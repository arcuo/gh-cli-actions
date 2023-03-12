/**
 * This file contains the logic for running the commands
 */

import { exec } from "child_process";
import * as vscode from "vscode";
import { selectCommand } from "./commands";
import { Config } from "./configs";
import { currentCommand } from "./currentCommandStore";
import { handleFlags } from "./flags";
import { handleInputs } from "./inputs";
import { logAndInform, logAndInformError, logInfo } from "./logging";
import { selectSubcommand } from "./subcommand";

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
    logAndInformError((e as Error).message);
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
        label: "Run command in terminal",
        description: command,
        alwaysShow: true,
        run: true,
        terminal: true,
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

  if (!confirm || confirm.cancel) {
    logAndInform("Command cancelled");
    return;
  }

  if (confirm.run) {
    if (confirm.terminal) {
      const terminal = vscode.window.createTerminal("gh-cli-actions");
      terminal.show();
      terminal.sendText(command);
    } else {
      logAndInform(`Running: ${command}`);

      const rootPath = vscode.workspace.workspaceFolders?.[0].uri.path;

      if (!rootPath) {
        logAndInformError("No root path found");
        return;
      }

      const commandToRun = `cd ${rootPath} && ${command}`;

      exec(commandToRun, (error, stdout, stderr) => {
        if (error) {
          logAndInformError(`Error: ${error.message}`);
          return;
        }

        logAndInform(`Command ran with output: ${stdout}`);
      });
    }
  }

  if (confirm.copy) {
    vscode.env.clipboard.writeText(command);
    logAndInform(`Command copied to clipboard "${command}"`);
  }
}

export async function runLastCommand() {
  const lastCommand = Config.get("lastCommand");

  if (lastCommand) {
    runCommand(lastCommand);
  } else {
    logAndInform("No last command found");
  }
}
