# Running Minebot

On this page, you'll learn how to start Minebot.

::: tip
Before running Minebot, make sure you've completed the [Installation Guide](./installation) first!
:::

## 1. Install Python

<Tabs>
<TabPanel title="Windows">

1. **Download the Installer**: Go to the [official Python website](https://www.python.org/downloads/windows/) and download the latest Python installer for Windows.
2. **Run the Installer**: Open the downloaded file and run the installer.
3. **Add Python to PATH**: Ensure you check the box that says "Add Python to PATH" before clicking "Install Now".
4. **Verify Installation**: Open Command Prompt and type `python3 --version` to verify the installation.

</TabPanel>
<TabPanel title="macOS">

1. **Download the Installer**: Visit the [official Python website](https://www.python.org/downloads/macos/) and download the latest Python installer for macOS.
2. **Run the Installer**: Open the downloaded `.pkg` file and follow the installation instructions.
3. **Verify Installation**: Open Terminal and type `python3 --version` to verify the installation.

</TabPanel>
<TabPanel title="Debian/Ubuntu">

1. **Update Package List**: `sudo apt update`
2. **Install Python**: `sudo apt install python3`
3. **Verify Installation**: `python3 --version`

</TabPanel>
<TabPanel title="Fedora">

1. **Update Package List**: `sudo dnf update`
2. **Install Python**: `sudo dnf install python3`
3. **Verify Installation**: `python3 --version`

</TabPanel>
<TabPanel title="Arch">

1. **Update Package List**: `sudo pacman -Syu`
2. **Install Python**: `sudo pacman -S python`
3. **Verify Installation**: `python3 --version`

</TabPanel>
<TabPanel title="Linux (Other)">

**For NixOS:**

1. **Install Python**: `nix-env -iA nixpkgs.python3`
2. **Verify Installation**: `python3 --version`

**For OpenSUSE:**

1. **Update Package List**: `sudo zypper refresh`
2. **Install Python**: `sudo zypper install python3`
3. **Verify Installation**: `python3 --version`

**For Alpine:**

1. **Update Package List**: `sudo apk update`
2. **Install Python**: `sudo apk add python3`
3. **Verify Installation**: `python3 --version`

**For Void:**

1. **Update Package List**: `sudo xbps-install -Syu`
2. **Install Python**: `sudo xbps-install -S python3`
3. **Verify Installation**: `python3 --version`

**For Gentoo:**

1. **Update Package List**: `sudo emerge --sync`
2. **Install Python**: `sudo emerge dev-lang/python`
3. **Verify Installation**: `python3 --version`

</TabPanel>
</Tabs>

::: tip
On some operating systems, you might need to type `python` instead of `python3`.
:::

## 2. Navigate to Bot Folder

Open Terminal (or Command Prompt on Windows) and navigate to the folder where you extracted the bot files.

```sh
cd path/to/extracted/folder
```

## 3. Install dependencies

```sh
pip install -r requirements.txt
```

## 4. Start the Bot

```sh
python src/__main__.py
```

::: warning
You need to re-run steps 2, 4 each time you reboot your machine or close the terminal/console window.
:::
