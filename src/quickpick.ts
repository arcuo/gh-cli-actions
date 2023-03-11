import { QuickPickItem, window } from "vscode";

import { currentCommand } from "./currentCommandStore";

const quickPickOptionDefaults = {
  canPickMany: false,
  matchOnDescription: true,
  matchOnDetail: true,
};

function executeQuickPickOption(picked?: boolean) {
  return {
    label: `Execute command`,
    alwaysShow: true,
    description: currentCommand.get(),
    picked,
    isExecuteOption: true,
  } as const;
}

function skipOptionQuickPickOption(type: "inputs" | "flags", picked?: boolean) {
  return {
    label: `Skip ${type}`,
    alwaysShow: true,
    description: currentCommand.get(),
    picked,
    isSkipOption: true,
  } as const;
}

export async function createQuickPickMenu<
  TItem extends QuickPickItem,
  TCanExecute extends boolean,
  TSkipType extends "inputs" | "flags" | undefined
>(
  items: TItem[],
  options: {
    title: string;
    canExecute: TCanExecute;
    picked?: "execute" | "skip";
    skipType: TSkipType;
  }
) {
  const { canExecute, picked, skipType, title } = options;

  type ExecuteOption = TCanExecute extends false
    ? never
    : ReturnType<typeof executeQuickPickOption>;

  type SkipOption = TSkipType extends undefined
    ? never
    : ReturnType<typeof skipOptionQuickPickOption>;

  type OptionItems = (TItem | ExecuteOption | SkipOption)[];

  const quickPickItems: OptionItems = [];

  if (canExecute) {
    quickPickItems.push(
      executeQuickPickOption(picked === "execute") as ExecuteOption
    );
  }

  if (skipType !== undefined) {
    quickPickItems.push(
      skipOptionQuickPickOption(skipType, picked === "skip") as SkipOption
    );
  }

  quickPickItems.push(...items);

  return window.showQuickPick(quickPickItems, {
    ...quickPickOptionDefaults,
    title,
    placeHolder: currentCommand.get(),
  });
}
