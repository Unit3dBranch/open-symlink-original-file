const path = require('path'),
    fs = require('fs').promises;

async function findSymlinksPointingTo(targetPath, workspaceFolders) {
	const symlinks = [];

	for (const folder of workspaceFolders) {
		await traverseAndCollectSymlinks(folder.uri.fsPath, targetPath, symlinks);
	}

	return symlinks;
}

async function traverseAndCollectSymlinks(dir, targetPath, result) {
	const entries = await fs.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isSymbolicLink()) {
			try {
				const real = await fs.realpath(fullPath);
				if (real === targetPath) {
					result.push(fullPath);
				}
			} catch {}
		} else if (entry.isDirectory()) {
			await traverseAndCollectSymlinks(fullPath, targetPath, result);
		}
	}
}

module.exports = { findSymlinksPointingTo };
