'use strict';

import * as vscode from 'vscode';
import * as notifier from 'node-notifier';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.tasks.onDidEndTask((e) => {
        notifier.notify({
            title: 'Code',
            message: `Task completed: ${e.execution.task.name}`,
            sound: vscode.workspace.getConfiguration('taskNotifier').get('playSound', true)
        });
    });

    context.subscriptions.push(disposable);
}
