/**
 * This file contains the logic for running the commands
 */

import { spawn } from "child_process";
import * as vscode from "vscode";
import { selectCommand } from "./commands";
import { Config } from "./configs";
import { currentCommand } from "./currentCommandStore";
import { handleFlags } from "./flags";
import { logAndInform, logAndInformError, logInfo } from "./logging";
import { selectSubcommand } from "./subcommand";

export async function createGHCommand() {
  try {
    currentCommand.reset();
    const result = await runCreateCommand();

    logInfo(`Final command is: ${result}`);
    return result;
  } catch (e) {
    logAndInformError((e as Error).message);
    return;
  }
}

export async function runCreateCommand(): Promise<string> {
  if (!currentCommand.commandStruct?.command) {
    await selectCommand();
    return runCreateCommand();
  }

  if (!currentCommand.commandStruct.subcommand) {
    await selectSubcommand(
      currentCommand.commandStruct!.command
    );

    return runCreateCommand();
  }

  const { isDone } = await handleFlags(
    currentCommand.commandStruct!.subcommand!
  );

  if (!isDone) {
    return runCreateCommand();
  }

  return currentCommand.get();
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

      const { out, error } = await cmd(...command.split(" "));
      if (error) {
        logAndInformError(`Error: ${out}`);
        return;
      }

      logAndInform(`Command ran with output: \n${out}`);
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
    logAndInform(
      "No last command found create a new on or run a shortcut from the command palette with the prefix 'gh'"
    );
  }
}

function cmd(...command: string[]) {
  const rootPath = vscode.workspace.workspaceFolders?.[0].uri.path;
  let p = spawn(command[0], command.slice(1), {
    stdio: "pipe",
    cwd: rootPath,
    env: {
      ...process.env,
      GH_FORCE_TTY: "true",
    },
  });

  return new Promise<{ out: string; error: boolean }>((resolve) => {
    let out = "";
    p.stdout.on("data", (x) => {
      out += x.toString();
    });
    p.stderr.on("data", (x) => {
      out += x.toString();
    });
    p.on("exit", (code) => {
      resolve({ out: decodeURIComponent(out), error: code !== 0 });
    });
  });
}
