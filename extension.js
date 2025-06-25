const vscode = require('vscode'),
	fs = require('fs'),
	openOriginalFile = require('./commands/openOriginalFile'),
	openSymlinksToOriginal = require('./commands/openSymlinksToOriginal');

function isSymlink(filePath) {
	try {
		return fs.lstatSync(filePath).isSymbolicLink();
	} catch {
		return false;
	}
}

function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand('extension.openOriginalFile', openOriginalFile),
		vscode.commands.registerCommand('extension.openSymlinksToOriginal', openSymlinksToOriginal)
	);

	vscode.window.onDidChangeActiveTextEditor(async (editor) => {
		const filePath = editor?.document?.uri?.fsPath;
		const isLink = filePath ? isSymlink(filePath) : false;
		await vscode.commands.executeCommand('setContext', 'isSymlinkFile', isLink);
	});
}

function deactivate() {}

module.exports = { activate, deactivate };
