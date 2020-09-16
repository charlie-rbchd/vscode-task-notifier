'use strict';

import * as vscode from 'vscode';
import * as notifier from 'node-notifier';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.tasks.onDidEndTask((e) => {
        const vscodeNotification = vscode.workspace.getConfiguration('taskNotifier').get('vscodeNotification', 'system');
        const message = `Task completed: ${e.execution.task.name}`;
        if (vscodeNotification === 'system') notifier.notify({
            title: 'Code',
            message,
            sound: vscode.workspace.getConfiguration('taskNotifier').get('playSound', true)
        });
        else if (vscodeNotification === 'vsCodeNotification') vscode.window.showInformationMessage(message);
        else if (vscodeNotification === 'statusBar') vscode.window.setStatusBarMessage(message, 10000);
    });

    context.subscriptions.push(disposable);
}
