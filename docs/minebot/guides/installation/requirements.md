---
title: Requirements
description: Ensure your system meets all the necessary prerequisites to run MineBot smoothly.
---

We've created this guide to help complete beginners or advanced users to get started with MineBot quickly.

??? quote "Prerequisites"
    - Python 3.10+
    - Windows, macOS or Linux
    - (Optional) Minecraft server with RCON enabled

## 1. Install Python

=== ":fontawesome-brands-windows: Windows"
    1. **Download the Installer**: Go to the [official Python website](https://www.python.org/downloads/windows/) and download the latest Python installer for Windows.
    2. **Run the Installer**: Open the downloaded file and run the installer.
    3. **Add Python to PATH**: Ensure you check the box that says "Add Python to PATH" before clicking "Install Now".
    4. **Verify Installation**: Open Command Prompt and type `python --version` to verify the installation.

=== ":material-apple: macOS"
    1. **Download the Installer**: Visit the [official Python website](https://www.python.org/downloads/macos/) and download the latest Python installer for macOS.
    2. **Run the Installer**: Open the downloaded `.pkg` file and follow the installation instructions.
    3. **Verify Installation**: Open Terminal and type `python3 --version` to verify the installation.

=== ":material-linux: Linux"
    === ":material-debian: Debian"
        1. **Update Package List**: `sudo apt update`
        2. **Install Python**: `sudo apt install python3`
        3. **Verify Installation**: `python3 --version`
    === ":material-fedora: Fedora"
        1. **Update Package List**: `sudo dnf update`
        2. **Install Python**: `sudo dnf install python3`
        3. **Verify Installation**: `python3 --version`
    === ":material-arch: Arch"
        1. **Update Package List**: `sudo pacman -Syu`
        2. **Install Python**: `sudo pacman -S python`
        3. **Verify Installation**: `python --version`
    === ":material-nix: NixOS"
        1. **Install Python**: `nix-env -iA nixpkgs.python3`
        2. **Verify Installation**: `python3 --version`
    === ":simple-opensuse: OpenSuse"
        1. **Update Package List**: `sudo zypper refresh`
        2. **Install Python**: `sudo zypper install python3`
        3. **Verify Installation**: `python3 --version`
    === ":simple-alpinelinux: Alpine"
        1. **Update Package List**: `sudo apk update`
        2. **Install Python**: `sudo apk add python3`
        3. **Verify Installation**: `python3 --version`
    === ":simple-voidlinux: Void"
        1. **Update Package List**: `sudo xbps-install -Syu`
        2. **Install Python**: `sudo xbps-install -S python3`
        3. **Verify Installation**: `python3 --version`
    === ":material-gentoo: Gentoo"
        1. **Update Package List**: `sudo emerge --sync`
        2. **Install Python**: `sudo emerge dev-lang/python`
        3. **Verify Installation**: `python3 --version`


## 2. Download and Extract Bot Files

Follow these steps to download and extract the bot files from BuiltByBit on your operating system:

=== ":fontawesome-brands-windows: Windows"
    1. **Download the Files**: Visit BuiltByBit and download the bot files.
    2. **Extract the Files**: Right-click the downloaded ZIP file and select "Extract All...".
    3. **Choose Destination**: Select the destination folder and click "Extract".

=== ":material-apple: macOS"
    1. **Download the Files**: Visit BuiltByBit and download the bot files.
    2. **Extract the Files**: Double-click the downloaded ZIP file to extract it.
    3. **Move Files**: Move the extracted files to your desired location.

=== ":material-linux: Linux"
    1. **Download the Files**: Visit BuiltByBit and download the bot files.
    2. **Extract the Files**: Open Terminal and navigate to the directory containing the downloaded ZIP file.
    3. **Run Extraction Command**: Use the command `unzip <filename>.zip` to extract the files.
    4. **Move Files**: Move the extracted files to your desired location.

## 3. Create A Discord Bot And Link Bot Token

Before you start the bot, head over to the link below, create and add the bot to your server and configure MineBot to use its token.

[:octicons-quote-16: Tutorial](./setup_and_run.md)

## 4. Setup Virtual Environment

!!! warning

    You need to re-run steps 1, 3 and 4 each time you reboot your machine or close the terminal/console window.

After extracting the bot files, follow these steps to set up a virtual environment and install the required dependencies:

1. **Navigate to the Extracted Folder**: Open Terminal (or Command Prompt on Windows) and navigate to the folder where you extracted the bot files.
    ```sh
    cd path/to/extracted/folder
    ```
2. **Create a Virtual Environment**:
    ```sh
    python3 -m venv venv
    ```
3. **Activate the Virtual Environment**:
    - **Windows**:
        ```sh
        venv\Scripts\activate
        ```
    - **macOS/Linux**:
        ```sh
        source venv/bin/activate
        ```

4. **Start the bot**:
    ```sh
    nox -s srv
    ```

    !!! note "Optional: Install nox"

        If you're getting "Unknown command: nox" error, you need to install nox first:
        ```sh
        pip install nox
        ```

## 5. If Running Locally - Keep The Terminal Window Opened

That's it :)

## 6. What To Do After Restart Or You've Closed The Console/Terminal

If you've restarted your machine or closed the terminal, repeat steps 1, 3 and 4 from section #3.