const vscode = require('vscode'),
	fs = require('fs'),
	nls = require('vscode-nls'),
	localize = nls.loadMessageBundle();

module.exports = async function openOriginalFile(uri) {
	if (!uri) {
		vscode.window.showErrorMessage(localize('error.noFileSelected', 'No file selected.'));
		return;
	}

	try {
		const originalPath = await fs.promises.realpath(uri.fsPath);
		const doc = await vscode.workspace.openTextDocument(originalPath);
		await vscode.window.showTextDocument(doc);
	} catch (error) {
		vscode.window.showErrorMessage(
			localize('error.openOriginalFailed', 'Could not open original file: {0}', error.message)
		);
	}
};
