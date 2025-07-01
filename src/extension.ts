import * as vscode from 'vscode';
import { genJSDoc } from './main';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'jsdoc.generateJSDoc',
    genJSDoc,
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
