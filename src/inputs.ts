import { window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Input } from "./gh.types";
import { logAndInformError } from "./logging";
import { createQuickPickMenu } from "./quickpick";

const pipe =
  <T>(...fns: [fn: (input: T) => T, doIt: boolean][]) =>
  (x: T) =>
    fns.reduce((v, [fn, doIt]) => (doIt ? fn(v) : v), x);

export function wrapWithQuotes(input: string) {
  return `"${input}"`;
}

function wrapWithBrackets(input: string) {
  return `<${input}>`;
}

function wrapWithSquareBrackets(input: string) {
  return `[${input}]`;
}

export const getInputName = (input: Input) =>
  pipe(
    // [wrapWithQuotes, input.type === "string"],
    // [wrapWithBrackets, input.type === "shell"],
    [wrapWithSquareBrackets, !!input.multiple]
  )(input.name);

async function writeInput(input: Input) {
  if (!input.name) {
    return;
  }

  let inputName = getInputName(input);

  const commandString = `${currentCommand.get()} ${inputName}`;

  const inputString = await window.showInputBox({
    title: `Enter input "${commandString}" ${
      input.required ? "(required: true)" : "(Keep blank to skip input)"
    }`,
    placeHolder: inputName,
  });

  if (!inputString) {
    return;
  }

  return input.type === "string" ? wrapWithQuotes(inputString) : inputString;
}

async function selectOption(input: Input) {
  if (!input.options) {
    return;
  }

  let inputName = getInputName(input);

  const helper = `${currentCommand.get()} ${inputName}`;

  const items = input.options.map((option) => ({
    label: option,
  }));

  const option = await createQuickPickMenu(items, {
    title: `Select option for input ${helper}`,
    canExecute: false,
    canGoBack: false,
  });

  if (!option) {
    throw new Error("No option selected");
  }

  return option.label;
}

export async function handleInputs(inputs: Input[]) {
  let inputsString = "";
  for (const i of inputs) {
    const inputString = i.options ? await selectOption(i) : await writeInput(i);

    if (i.required && !inputString) {
      logAndInformError("Required input not provided");
      throw new Error("Required input not provided");
    }

    inputsString += " " + inputString;
  }
  return inputsString ? inputsString : undefined;
}
