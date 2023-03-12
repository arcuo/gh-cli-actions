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

export const GithubCLICommands: Commands = {
  repo: {
    description: "Work with GitHub repositories.",
    subcommands: {
      view: {
        usage: "gh repo view [<repository>] [flags]",
        description: "Create command shortcuts",
        flags: [
          {
            names: ["--web", "-w"],
            description: "Open a repository in the browser",
          },
          {
            names: ["--branch", "-b"],
            description: "View a specific branch of the repository",
            input: {
              name: "string",
              type: "string",
            },
          },
          {
            names: ["-q", "--jq"],
            description: "Filter JSON output using a jq expression",
            input: {
              name: "expression",
              type: "shell",
            },
          },
          {
            names: ["--json"],
            description: "Output JSON with the specified fields",
            input: {
              name: "fields",
              type: "shell",
            },
          },
          {
            names: ["-t", "--template"],
            description: `Format JSON output using a Go template. See "gh help formmating"`,
            input: {
              name: "string",
              type: "string",
            },
          },
        ],
        inputs: [
          {
            name: "repository",
            type: "shell",
          },
        ],
      },
      clone: {
        usage: "gh repo clone <repository> [<directory>] [-- <gitflags>...]",
        description: "Manage repositories",
        inputs: [
          {
            name: "repository",
            type: "shell",
            required: true,
          },
          {
            name: "directory",
            type: "shell",
            multiple: true,
          },
        ],
      },
      list: {
        description: "List repositories owned by user or organization",
        usage: "gh repo list [<owner>] [flags]",
        inputs: [
          {
            name: "owner",
            type: "shell",
            multiple: true,
          },
        ],
        flags: [
          {
            names: ["--archived"],
            description: "Show only archived repositories",
          },
          {
            names: ["--fork"],
            description: "Show only forks",
          },
          {
            names: ["-q", "--jq"],
            description: "Filter JSON output using a jq expression",
            input: {
              name: "expression",
              type: "shell",
            },
          },
          {
            names: ["--json"],
            description: "Output JSON with the specified fields",
            input: {
              name: "fields",
              type: "shell",
            },
          },
          {
            names: ["-L", "--limit"],
            description: "Maximum number of repositories to list",
            input: {
              name: "int",
              type: "shell",
            },
          },
          {
            names: ["--no-archived"],
            description: "Omit archived repositories",
          },
          {
            names: ["-l", "--language"],
            description: "Filter by primary coding language",
            input: {
              name: "string",
              type: "shell",
            },
          },
          {
            names: ["--source"],
            description: "Show only non-forks",
          },
          {
            names: ["-t", "--template"],
            description: `Format JSON output using a Go template. See "gh help formmating"`,
            input: {
              name: "string",
              type: "string",
            },
          },
          {
            names: ["--visibility"],
            description: "Filter by repository visibility: {public|private|internal}",
            input: {
              name: "string",
              type: "string",
              options: ["public", "private", "internal"],
              required: true,
            },
          },
        ],
      },
    },
  },
  alias: {
    description:
      "Aliases can be used to make shortcuts for gh commands or to compose multiple commands.",
    subcommands: {
      delete: {
        usage: "gh alias delete <alias>",
        description: "Delete an alias",
      },
      list: {
        usage: "gh alias list",
        description:
          "This command prints out all of the aliases gh is configured to use.",
      },
      set: {
        usage: "gh alias set <alias> <expansion> [flags]",
        description: `Define a word that will expand to a full gh command when invoked. The expansion may specify additional arguments and flags. If the expansion includes positional placeholders such as "$1", extra arguments that follow the alias will be inserted appropriately. Otherwise, extra arguments will be appended to the expanded command. Use "-" as expansion argument to read the expansion string from standard input. This is useful to avoid quoting issues when defining expansions. If the expansion starts with "!" or if "--shell" was given, the expansion is a shell expression that will be evaluated through the "sh" interpreter when the alias is invoked. This allows for chaining multiple commands via piping and redirection.`,
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
};
