# Open Symlink Original File

> 🔗 Developed by [Unit3dBranch](https://github.com/Unit3dBranch)

**Open Symlink Original File** is a Visual Studio Code extension that enhances your workflow when working with symbolic links. It adds a navigation menu option to open the real file behind a symlink directly from the editor or explorer — no need to search for the source manually.

---

## ✨ Features

- ✅ Detects when you're working with a symlinked file
- 🔎 Supports reverse lookup: find symlinks pointing to an original file
- 🖱️ Context menu options:
  - **"Open the Original File"** (when opening a symlink)
  - **"Find Symlinks to This File"** (when viewing an original file)
- 📌 Available in both the **editor title bar** and the **right-click context menu**
- 🈯 Fully localized (English and Portuguese PT-BR support)
- 🧪 Includes unit tests and validation
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

1. **To open the original file of a symlink:**
   - Right-click inside a symlinked file or on it in the file explorer
   - Select **“Open the Original File”**
   - The original file will open in a new tab

2. **To find symlinks pointing to a file:**
   - Right-click on the original file (non-symlink)
   - Select **“Find Symlinks to This File”**
   - Choose from a list of matching symlinks to open

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

- Does not follow links to directories (file-based only)
- Reverse search scans the workspace recursively, so performance may vary in large projects
- Menu options appear contextually based on whether the selected file is a symlink or not

---

## 🤝 Contributing

Feel free to fork, improve, and submit PRs! Bug reports and feature ideas are welcome.

👉 [Contribute on GitHub](https://github.com/Unit3dBranch/open-symlink-original-file)

---

## 📜 License

[MIT License](LICENSE)

---

> Made with ❤️ by [Unit3dBranch](https://github.com/Unit3dBranch)
