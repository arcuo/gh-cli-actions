class CurrentCommand {
  commandString: string;

  constructor(commandString?: string) {
    this.commandString = commandString || "gh";
  }

  get() {
    return this.commandString;
  }

  add(part: string) {
    this.commandString += ` ${part}`;
  }

  reset() {
    this.commandString = "gh";
  }
}

export const currentCommand = new CurrentCommand();
