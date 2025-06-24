# Open Symlink Original File

> 🔗 Developed by [Unit3dBranch](https://github.com/Unit3dBranch)

**Open Symlink Original File** is a Visual Studio Code extension that enhances your workflow when working with symbolic links. It adds a navigation menu option to open the real file behind a symlink directly from the editor or explorer — no need to search for the source manually.

---

## ✨ Features

- ✅ Detects when you're working with a symlinked file
- 🖱️ Adds **"Open the Original File"** to the navigation bar (editor & explorer)
- 🚀 Opens the resolved, original file in a new editor tab
- ⚙️ Zero dependencies — pure Node.js and VS Code APIs

---

## 📦 Installation

1. Go to the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/) (once published)
2. Search for `Open Symlink Original File` by `Unit3dBranch`
3. Click **Install**

Or install manually:

```bash
code --install-extension open-symlink-original-file.vsix
```

---

## 🧠 Usage

1. Open a symlinked file in VS Code
2. Right-click inside the editor or on the file in the explorer
3. Select **“Open the Original File”**
4. The original file will open in a new tab

---

## 📂 Example

If you have:

```bash
ln -s /project/src/index.js ./index-link.js
```

Opening `index-link.js` and clicking on navigation menu option will let you jump straight to `src/index.js`.

---

## 🛠️ Requirements

- Visual Studio Code `v1.101.0` or newer
- Files must be valid symbolic links (`lstat`-detectable)

---

## 🧪 Known Limitations

- Does not follow links to directories (currently file-based only)
- Menu only appears for symlinks with accessible targets

---

## 🤝 Contributing

Feel free to fork, improve, and submit PRs! Bug reports and feature ideas are welcome.

---

## 📜 License

[MIT License](LICENSE)

---

> Made with ❤️ by [Unit3dBranch](https://github.com/Unit3dBranch)
