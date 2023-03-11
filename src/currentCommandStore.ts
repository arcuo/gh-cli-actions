class CurrentCommand {
  commandString: string;

  constructor(commandString?: string) {
    this.commandString = commandString || "gh";
  }

  get(noGH?: boolean) {
    if (noGH) {
      return this.commandString.replace("gh ", "");
    }
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
