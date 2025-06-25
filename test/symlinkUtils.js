const assert = require('assert'),
    path = require('path'),
    fs = require('fs'),
    os = require('os'),
    { findSymlinksPointingTo } = require('../utils/symlinkUtils');

suite('Symlink Utils Test Suite', () => {
	test('Deve localizar um symlink válido apontando para arquivo real', async () => {
		const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'symlink-test-'));
		const targetFile = path.join(tempDir, 'original.txt');
		const symlinkFile = path.join(tempDir, 'link.txt');

		fs.writeFileSync(targetFile, 'conteúdo');
		fs.symlinkSync(targetFile, symlinkFile);

		const fakeWorkspace = [{ uri: { fsPath: tempDir } }];
		const result = await findSymlinksPointingTo(targetFile, fakeWorkspace);

		assert.ok(result.includes(symlinkFile));
	});
});
