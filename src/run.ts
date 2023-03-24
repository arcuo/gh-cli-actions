/**
 * This file contains the logic for running the commands
 */

import { spawn } from "child_process";
import * as vscode from "vscode";
import { selectCommand } from "./commands";
import { Config } from "./configs";
import { currentCommand } from "./currentCommandStore";
import { handleFlags } from "./flags";
import { Input } from "./gh.types";
import { handleInputs } from "./inputs";
import { logAndInform, logAndInformError, logError, logInfo } from "./logging";
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
    await selectSubcommand(currentCommand.commandStruct!.command);

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

export async function runCommand(_command: string) {
  vscode.workspace
    .getConfiguration("gh-cli-actions")
    .update("lastCommand", _command, vscode.ConfigurationTarget.Global);

  let command = await fillOptionals(_command);

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
      vscode.window
        .withProgress(
          {
            title: `Running: ${command}`,
            location: vscode.ProgressLocation.Notification,
          },
          () => cmd(...command.split(" "))
        )
        .then(({ out, error }) => {
          showResultMessage(out, error);
        });
    }
  }

  if (confirm.copy) {
    vscode.env.clipboard.writeText(command);
    logAndInform(`Command copied to clipboard "${command}"`);
  }
}

async function fillOptionals(command: string): Promise<string> {
  let newCommand = command;
  const optionals = command.match(/\{[a-zA-Z0-9]*}/g);

  if (!optionals) {
    return command;
  }

  const inputs = optionals.map<Input>((opt) => {
    return {
      name: opt.replace(/\{/, "").replace(/\}/, ""),
      required: true,
      type: "shell",
    };
  });

  for (const input of inputs) {
    const inputString = await handleInputs([input]);
    if (!inputString) {
      throw new Error("Missing input");
    }

    newCommand = newCommand.replace(`{${input.name}}`, inputString);
  }

  return newCommand;
}

function showResultMessage(out: string, error: boolean) {
  (error ? logError : logInfo)(out);

  const outList = out.split("\n").filter((s) => s);
  const actions =
    outList.length > 1 ? ["Full message", "Dismiss"] : ["Dismiss"];

  (error
    ? vscode.window.showErrorMessage
    : vscode.window.showInformationMessage)(
    `${outList[0]}${outList.length > 1 ? "..." : ""}`,
    ...actions
  ).then((value) => {
    if (value === "Dismiss" || undefined) {
      return;
    }
    vscode.window.showErrorMessage(out, { modal: true });
  });
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
