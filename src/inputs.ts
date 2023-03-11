import { window } from "vscode";
import { currentCommand } from "./currentCommandStore";
import { Subcommand, Input } from "./gh.types";

const pipe =
  <T>(...fns: [fn: (input: T) => T, doIt: boolean][]) =>
  (x: T) =>
    fns.reduce((v, [fn, doIt]) => (doIt ? fn(v) : v), x);

function wrapWithQuotes(input: string) {
  return `"${input}"`;
}

function wrapWithBrackets(input: string) {
  return `<${input}>`;
}

function wrapWithSquareBrackets(input: string) {
  return `[${input}]`;
}

async function writeInput(input: Input) {
  if (!input.name) {
    return;
  }

  let inputName = pipe(
    [wrapWithQuotes, input.type === "string"],
    [wrapWithBrackets, input.type === "shell"],
    [wrapWithSquareBrackets, !!input.multiple]
  )(input.name);

  const helper  = `${currentCommand.get()} ${inputName}`;

  const inputString = await window.showInputBox({
    title: `Enter input ${helper}`,
    placeHolder: input.name,
  });

  return inputString;
}

export async function handleInputs(subcommand: Subcommand) {
  const inputs = subcommand.inputs;

  if (!inputs) {
    return;
  }

  for (const i of inputs) {
    const inputString = await writeInput(i);

    if (i.required && !inputString) {
      throw new Error("Required input not provided");
    }

    if (inputString) {
      currentCommand.add(inputString);
    }
  }
}
