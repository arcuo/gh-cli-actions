import { QuickPickItem, window } from "vscode";

import { currentCommand } from "./currentCommandStore";

const quickPickOptionDefaults = {
  canPickMany: false,
  matchOnDescription: true,
  matchOnDetail: true,
};

function executeQuickPickOption(picked?: boolean) {
  return {
    label: `Finalise command`,
    alwaysShow: true,
    description: currentCommand.get(),
    picked,
    isExecuteOption: true,
  } as const;
}

export async function createQuickPickMenu<
  TItem extends QuickPickItem,
  TCanExecute extends boolean,
>(
  items: TItem[],
  options: {
    title: string;
    canExecute: TCanExecute;
    picked?: "execute" | "skip";
  }
) {
  const { canExecute, picked, title } = options;

  type ExecuteOption = TCanExecute extends false
    ? never
    : ReturnType<typeof executeQuickPickOption>;

  type OptionItems = (TItem | ExecuteOption)[];

  const quickPickItems: OptionItems = [];

  if (canExecute) {
    quickPickItems.push(
      executeQuickPickOption(picked === "execute") as ExecuteOption
    );
  }

  quickPickItems.push(...items);

  return window.showQuickPick(quickPickItems, {
    ...quickPickOptionDefaults,
    title,
    placeHolder: currentCommand.get(),
  });
}
