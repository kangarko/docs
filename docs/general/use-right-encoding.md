# Using the Right File Encoding

All MineAcademy plugins use **UTF-8 encoding**. Using the wrong text editor or encoding will corrupt non-English characters, emojis, and color codes.

---

## Recommended Text Editors

::: danger NEVER USE WINDOWS NOTEPAD OR WORDPAD
These default Windows editors do not handle UTF-8 encoding properly and will likely corrupt your configuration files.
:::

### For Windows Users

[**Notepad++**](https://notepad-plus-plus.org/downloads/) is highly recommended:
- Lightweight and fast
- Properly handles UTF-8 encoding
- Free and open-source

When using Notepad++:
1. Open your configuration file
2. Check the encoding in the top menu in "Encoding" tab
3. Make sure it shows **UTF-8 (without BOM)** or **UTF-8**
4. If it shows another encoding (like ANSI), change it by selecting:
   - Encoding → Convert to UTF-8

![Notepad++ encoding settings](/images/general/vcjf6TU.png)

### For macOS and Linux Users

[**Sublime Text**](https://www.sublimetext.com/) is recommended:
- Automatically detects encodings
- Clean interface
- Available on all major platforms

![Sublime Text on macOS](/images/general/n7kU90L.png)

[**Visual Studio Code**](https://code.visualstudio.com/) is also excellent:
- Free and open-source
- Built-in YAML support
- Shows encoding in bottom-right corner

---

## Troubleshooting Encoding Issues

### If You See Garbled Text

If your configuration shows corrupted characters like `Â§6` instead of color codes or symbols:

1. Make sure you're using a recommended text editor
2. Verify the file is opened and saved with UTF-8 encoding
3. Try regenerating the configuration file by:
   - Backing up your current file
   - Deleting it and restarting your server
   - Copying your settings to the freshly generated file

### For Server Startup Issues

If your server displays encoding errors at startup, try adding this Java flag to your startup script:

```
-Dfile.encoding=UTF-8
```

#### Example startup command:
```bash
java -Xmx4G -Dfile.encoding=UTF-8 -jar server.jar nogui
```

![Java startup parameters with UTF-8 flag](/images/general/a2kc6YP.png)

---

## Testing Your Configuration

After editing, you can verify your YAML syntax with these online tools:
- [YAML Validator](https://yamlvalidator.com/)
- [YAML Lint](https://www.yamllint.com/)

These will catch syntax errors before they cause problems on your server.

---

::: warning Persistently Garbled Text
On some systems, unicode characters may still appear as garbage despite correct encoding. This is an OS limitation — stick to basic characters or use escape sequences like `\u2764` for ❤.
:::