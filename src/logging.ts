import { ExtensionContext, OutputChannel, window } from "vscode";

let outputChannel: OutputChannel | null = null;

export function initOutputChannel(context: ExtensionContext) {
  const _outputChannel = window.createOutputChannel("Github CLI Actions");
  outputChannel = _outputChannel;
  context.subscriptions.push(_outputChannel);
}

export const LogType = {
  Info: "Info",
  Error: "Error",
  Warning: "Warning",
} as const;

type LogType = typeof LogType[keyof typeof LogType];

export function log(message: string, type: LogType = LogType.Info) {
  if (!outputChannel) {
    return;
  }

  outputChannel.appendLine(
    `[${type} - ${new Date().toTimeString()}] ${message}`
  );
}

function getString(message: any): string {
  switch (typeof message) {
    case "number":
      return message.toString();
    case "boolean":
      return `${message}`;
    case "string":
      return message;
    case "object":
      return JSON.stringify(message);
    default:
      return "";
  }
}

function mapStrings(message: any, args: any[]) {
  return `${message} ${args.map(getString).join(" ")}`;
}

export function logInfo(message: any, ...args: any[]) {
  log(mapStrings(message, args), LogType.Info);
}

export function logError(message: any, ...args: any[]) {
  log(mapStrings(message, args), LogType.Error);
}

export function logWarning(message: any, ...args: any[]) {
  log(mapStrings(message, args), LogType.Warning);
}
