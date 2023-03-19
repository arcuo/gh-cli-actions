import type { Flag, GHCommand, Input, Subcommand } from "./gh.types";

type CommandInput = Input & { value: string; optionType: "input" };
type CommandFlag = Flag & { value?: string; optionType: "flag" };

type CommandOption = CommandInput | CommandFlag;

export type CommandStruct = {
  command: { name: string } & GHCommand;
  subcommand?: { inputValue?: string; name: string } & Subcommand;
  options?: CommandOption[];
};

function isInput(option: CommandOption): option is CommandInput {
  return option.optionType === "input";
}

function isFlag(option: CommandOption): option is CommandFlag {
  return option.optionType === "flag";
}

class CurrentCommand {
  commandStruct?: CommandStruct;
  commandString?: string;

  get() {
    return this.commandString ?? this.toString();
  }

  toString() {
    if (!this.commandStruct) {
      return "";
    }

    const { command, subcommand, options } = this.commandStruct;

    let commandString = `gh ${command.name}`;

    if (subcommand) {
      commandString = `${commandString} ${subcommand.name}${
        subcommand.inputValue ? ` ${subcommand.inputValue}` : ""
      }`;
    }

    if (options) {
      commandString = `${commandString} ${options
        .map((option) => {
          if (isInput(option)) {
            return option.value;
          }

          if (isFlag(option)) {
            return `${option.names[0]}${
              option.value ? `=${option.value}` : ""
            }`;
          }
        })
        .filter((option) => option)
        .join(" ")}`;
    }

    return commandString;
  }

  addGHCommand(commandName: string, command: GHCommand) {
    this.commandStruct = { command: { ...command, name: commandName } };
    this.commandString = this.toString();
  }

  addSubcommand(name: string, subcommand: Subcommand, inputValue?: string) {
    if (!this.commandStruct) {
      throw new Error("Missing command");
    }
    this.commandStruct.subcommand = { ...subcommand, name: name, inputValue };
    this.commandString = this.toString();
  }

  addFlag(flag: Flag, flagValue?: string) {
    if (!this.commandStruct || !this.commandStruct.subcommand) {
      throw new Error("Missing command or subcommand");
    }

    if (!this.commandStruct.options) {
      this.commandStruct.options = [];
    }

    this.commandStruct.options.push({
      ...flag,
      value: flagValue,
      optionType: "flag",
    });
    this.commandString = this.toString();
  }

  addInput(inputValue: string, input: Input) {
    if (!this.commandStruct || !this.commandStruct.subcommand) {
      throw new Error("Missing command or subcommand");
    }

    if (!this.commandStruct.options) {
      this.commandStruct.options = [];
    }

    this.commandStruct.options.push({
      ...input,
      value: inputValue,
      optionType: "input",
    });

    this.commandString = this.toString();
  }

  goBack() {
    if (!this.commandStruct) {
      return;
    }

    if (this.commandStruct.options) {
      this.commandStruct.options.pop();
    } else if (this.commandStruct.subcommand) {
      this.commandStruct.subcommand = undefined;
    } else {
      this.commandStruct = undefined;
    }

    this.commandString = this.toString();
  }

  reset() {
    this.commandStruct = undefined;
  }
}

export const currentCommand = new CurrentCommand();
