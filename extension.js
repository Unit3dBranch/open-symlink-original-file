const vscode = require('vscode');
const fs = require('fs');

function isSymlink(filePath) {
	try {
		return fs.lstatSync(filePath).isSymbolicLink();
	} catch {
		return false;
	}
}

function activate(context) {
	const openOriginalCommand = vscode.commands.registerCommand('extension.openOriginalFile', async (uri) => {
		if (!uri) {
			vscode.window.showErrorMessage('No file selected.');
			return;
		}

		try {
			const originalPath = await fs.promises.realpath(uri.fsPath);
			const doc = await vscode.workspace.openTextDocument(originalPath);
			await vscode.window.showTextDocument(doc);
		} catch (error) {
			vscode.window.showErrorMessage(`Could not open original file: ${error.message}`);
		}
	});

	vscode.window.onDidChangeActiveTextEditor(async (editor) => {
		const filePath = editor?.document?.uri?.fsPath;
		const isLink = filePath ? isSymlink(filePath) : false;
		await vscode.commands.executeCommand('setContext', 'isSymlinkFile', isLink);
	});

	context.subscriptions.push(openOriginalCommand);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
};