import GhInfo = require('./gh-info.json');

export type Input = {
  name: string;
  type: "string" | "shell";
  multiple?: boolean;
  options?: string[];
  required?: boolean;
};

type FlagName<TKey, TPrefix extends string = "-" | "--"> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;

export type Flag = {
  description: string;
  names: FlagName<string>[];
  input?: Input;
};

export type Subcommand = {
  usage: string;
  description?: string;
  flags?: Flag[];
  inputs?: Input[];
};

export type GHCommand = {
  description: string;
  subcommands: Record<string, Subcommand>;
};

type Commands = Record<string, GHCommand>;

console.log('GhInfo:', GhInfo);
export const GithubCLICommands = GhInfo as unknown as Commands;
