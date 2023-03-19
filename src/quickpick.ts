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

type ExecuteOption<T extends boolean = true> = T extends true
  ? ReturnType<typeof executeQuickPickOption>
  : never;

export function isExecuteOption(option: any): option is ExecuteOption {
  return "isExecuteOption" in option;
}

function goBackQuickPickOption() {
  return {
    label: `Go one step back`,
    alwaysShow: true,
    isGoBackOption: true,
  } as const;
}

type GoBackOption<T extends boolean = true> = T extends true
  ? ReturnType<typeof goBackQuickPickOption>
  : never;

export function isGoBackOption(option: any): option is GoBackOption {
  return "isGoBackOption" in option;
}

export async function createQuickPickMenu<
  TItem extends QuickPickItem,
  TOptions extends {
    title: string;
    canExecute: boolean;
    canGoBack: boolean;
    picked?: "execute" | "skip";
  }
>(items: TItem[], options: TOptions) {
  const { canExecute, canGoBack, picked, title } = options;

  type OptionItems = (
    | TItem
    | ExecuteOption<TOptions["canExecute"]>
    | GoBackOption<TOptions["canGoBack"]>
  )[];

  const quickPickItems: OptionItems = [];

  if (canExecute) {
    quickPickItems.push(
      executeQuickPickOption(picked === "execute") as ExecuteOption<
        TOptions["canExecute"]
      >
    );
  }

  quickPickItems.push(...items);

  if (canGoBack) {
    quickPickItems.push(
      goBackQuickPickOption() as GoBackOption<TOptions["canGoBack"]>
    );
  }

  return window.showQuickPick(quickPickItems, {
    ...quickPickOptionDefaults,
    title,
    placeHolder: currentCommand.get(),
  });
}
