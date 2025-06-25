const vscode = require('vscode'),
    fs = require('fs');

module.exports = async function openOriginalFile(uri) {
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
};
