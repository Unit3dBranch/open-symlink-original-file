const vscode = require('vscode'),
    { findSymlinksPointingTo } = require('../utils/symlinkUtils');

module.exports = async function openSymlinksToOriginal(uri) {
	if (!uri) {
		vscode.window.showErrorMessage('No file selected.');
		return;
	}

	const targetPath = uri.fsPath;
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) {
		vscode.window.showErrorMessage('No workspace open.');
		return;
	}

	const symlinks = await findSymlinksPointingTo(targetPath, workspaceFolders);
	if (symlinks.length === 0) {
		vscode.window.showInformationMessage('No symlinks found for this file.');
		return;
	}

	const selected = await vscode.window.showQuickPick(symlinks, {
		placeHolder: 'Select a symlink to open'
	});

	if (selected) {
		const doc = await vscode.workspace.openTextDocument(selected);
		await vscode.window.showTextDocument(doc);
	}
};
