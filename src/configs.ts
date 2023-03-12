/**
 * Typescript shenanigans to get the config properties from package.json
 * and make getting and setting values type safe.
 *
 * Requires script "precompile" to be run to generate package.json.d.ts
 */

import * as vscode from "vscode";
import Package = require("../package.json");

type Properties = Package["contributes"]["configuration"]["properties"];

type Section = keyof Properties extends `${infer Section}.${string}`
  ? Section
  : never;

interface TypesMap {
  string: string;
  number: number;
  boolean: boolean;
  integer: number;
}

type Primitive<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : never;

type ObjectPrimitives<T> = T extends object ? { [K in keyof T]: Primitive<T[K]> } : Primitive<T>;

type Configs = {
  [TKey in keyof Properties as TKey extends `${string}.${infer TKey}`
    ? TKey
    : never]: Properties[TKey] extends { default: infer TDefault }
    ? TDefault extends Array<infer TItem>
      ? ObjectPrimitives<TItem>[]
    : Primitive<TDefault>
    : Properties[TKey] extends { type: infer Type }
    ? Type extends keyof TypesMap
      ? TypesMap[Type]
      : never
    : never;
};

export class Config {
  public static section: Section = "gh-cli-actions";

  public static get<TKey extends keyof Configs, TValue = Configs[TKey]>(
    key: TKey
  ) {
    return vscode.workspace
      .getConfiguration(this.section)
      .get<TValue>(key as string);
  }

  public static set<TKey extends keyof Configs, TValue = Configs[TKey]>(
    key: TKey,
    value: TValue,
    target: vscode.ConfigurationTarget = vscode.ConfigurationTarget.Global
  ) {
    vscode.workspace.getConfiguration(this.section).update(key, value, target);
  }
}
