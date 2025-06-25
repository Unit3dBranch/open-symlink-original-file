const { runTests } = require('@vscode/test-electron');

async function main() {
	try {
		await runTests({
			extensionDevelopmentPath: __dirname + '/../',
			extensionTestsPath: __dirname + '/symlinkUtils.test.js',
		});
	} catch (err) {
		console.error('Falha ao rodar os testes:', err);
		process.exit(1);
	}
}

main();
