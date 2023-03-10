type Input = {
  name: string;
  type: "string" | "shell";
};

type Flag = {
  description: string;
  names: string[];
};

type Action = {
  description: string;
  verboseDescription?: string;
  flags?: Flag[];
  inputs?: Input[];
};

export type GHCommand = {
  description: string;
  actions: Record<string, Action>;
};

type Commands = Record<string, GHCommand>;

export const GithubCLICommands = {
  alias: {
    description:
      "Aliases can be used to make shortcuts for gh commands or to compose multiple commands.",
    actions: {
      delete: {
        description: "gh alias delete",
        verboseDescription: "Delete an alias",
      },
      list: {
        description: "gh alias list",
        verboseDescription:
          "This command prints out all of the aliases gh is configured to use.",
      },
      set: {
        description: "gh alias set <alias> <expansion> [flags]",
        verboseDescription: `Define a word that will expand to a full gh command when invoked. The expansion may specify additional arguments and flags. If the expansion includes positional placeholders such as "$1", extra arguments that follow the alias will be inserted appropriately. Otherwise, extra arguments will be appended to the expanded command. Use "-" as expansion argument to read the expansion string from standard input. This is useful to avoid quoting issues when defining expansions. If the expansion starts with "!" or if "--shell" was given, the expansion is a shell expression that will be evaluated through the "sh" interpreter when the alias is invoked. This allows for chaining multiple commands via piping and redirection.`,
        flags: [
          {
            description:
              "Declare an alias to be passed through a shell interpreter",
            names: ["--shell", "-s"],
          },
        ],
        inputs: [
          {
            name: "alias",
            type: "shell",
          },
          {
            name: "expansion",
            type: "string",
          },
        ],
      },
    },
  },
} satisfies Commands;
