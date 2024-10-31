---
title: Installation
description: A tutorial on getting started with MineBot.
icon: material/download
hide:
  - toc
---

# Installation

A complete guide for both beginners and experienced users to instal and setup MineBot.

## 1. Install Python

!!! warning "Python 3.13 is not supported yet"

    We are waiting for our dependencies to update to support Python 3.13. Until then, please use the latest 3.12.x version.

=== ":fontawesome-brands-windows: Windows"
    1. **Download the Installer**: Go to the [official Python website](https://www.python.org/downloads/windows/) and download the latest Python installer for Windows.
    2. **Run the Installer**: Open the downloaded file and run the installer.
    3. **Add Python to PATH**: Ensure you check the box that says "Add Python to PATH" before clicking "Install Now".
    4. **Verify Installation**: Open Command Prompt and type `python3 --version` to verify the installation.

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
        3. **Verify Installation**: `python3 --version`
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


## 2. Download And Extract Bot

=== ":fontawesome-brands-windows: Windows"
    1. **Download the Files**: Download the bot files from BuiltByBit.
    2. **Extract the Files**: Right-click the downloaded ZIP file and select "Extract All...".
    3. **Choose Destination**: Select the destination folder and click "Extract".

=== ":material-apple: macOS"
    1. **Download the Files**: Download the bot files from BuiltByBit.
    2. **Extract the Files**: Double-click the downloaded ZIP file to extract it.
    3. **Move Files**: Move the extracted files to your desired location.

=== ":material-linux: Linux"
    1. **Download the Files**: Download the bot files from BuiltByBit.
    2. **Extract the Files**: Open Terminal and navigate to the directory containing the downloaded ZIP file.
    3. **Run Extraction Command**: Use the command `unzip <filename>.zip` to extract the files.
    4. **Move Files**: Move the extracted files to your desired location.

## 3. Create A Discord Bot And Link Bot Token

Create a new bot on Discord's developer portal using the instructions below.

!!! warning
    - Before proceeding, enable Discord Developer Mode by navigating to `Settings -> Advanced -> Developer Mode`.
    - Click the images below to zoom them.

!!! danger
    Anyone with access to this token has **full access to your bot's account**, you should ensure that nobody has access to this token but you. Treat it like a username/password combination, but for bots.

<div class="cards" markdown>

-   :material-plus-circle:{ .lg .middle } **1. Create A New Application**

    ---

    <figure markdown>
      <figure markdown>
          ![Create Application](../../assets/minebot/image-1.webp)
          <figcaption></figcaption>
      </figure>
        <figcaption>Head over to [Discord's Developer Portal](https://discord.com/developers/applications) and create a new application.</figcaption>
    </figure>

-   :material-robot:{ .lg .middle } **2. Copy Application Id**

    ---

    <figure markdown>
      <figure markdown>
          ![General Information Tab](../../assets/minebot/image-2.webp)
          <figcaption></figcaption>
      <figure>
        <figcaption>In the General Information tab, copy the application ID for the next step.</figcaption>
    </figure>

-   :fontawesome-solid-paper-plane:{ .lg .middle } **3. Invite Bot To Your Server**

    ---

    <figure markdown>
        <figure markdown>
            ![Create the Invite Link](../../assets/minebot/image-3.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>[Visit this website](https://discordapi.com/permissions.html#2147483656), ensure "Administrator" and "Use Application Commands" are checked and paste your Client ID from step 2 into "Client ID". Do not change any other options. Then click the "Link". <br><br>Invite the bot to your server and in the final screen, check all boxes to grant all of the permissions we've selected previously.</figcaption>
    </figure>

-   :fontawesome-solid-paper-plane:{ .lg .middle } **4. Move Role To Top And Give Administrator Permissions**

    ---

    <figure markdown>
        <figure markdown>
            ![Check Permissions](../../assets/minebot/image-10.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Drag the "bot" role to the top (it can be below other administrator roles) and ensure it's got the Administrator permission.</figcaption>
    </figure>

-   :material-robot:{ .lg .middle } **5. Navigate To The Bot Tab**

    ---

    <figure markdown>
      <figure markdown>
          ![Bot Tab](../../assets/minebot/image-4.webp)
          <figcaption></figcaption>
      <figure>
        <figcaption>Access the bot settings in this tab.</figcaption>
    </figure>

-   :material-form-textbox-password:{ .lg .middle } **6. Create A New Token**

    ---

    <figure markdown>
        <figure markdown>
            ![Reset Token](../../assets/minebot/image-5.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Generate a new token for your bot and keep it private.</figcaption>
    </figure>

-   :material-form-textbox-password:{ .lg .middle } **7. Paste Your Token To configuration/settings.yml**

    ---

    <figure markdown>
        <figure markdown>
            ![Write Token](../../assets/minebot/image-7.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Write your token to your configuration/settings.yml file .</figcaption>
    </figure>

-   :material-form-textbox-password:{ .lg .middle } **8. Give Bot Privileged Intents**

    ---

    <figure markdown>
        <figure markdown>
            ![Give Intents](../../assets/minebot/image-6.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Adjust 3 Privileged Gateway Intents as per the image above.</figcaption>
    </figure>


-   :material-form-textbox-password:{ .lg .middle } **9. Copy Your Guilt Id**

    ---

    <figure markdown>
        <figure markdown>
            ![Copy ID](../../assets/minebot/image-8.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Copy the Discord server id (guild id) that you plan to use with MineBot.</figcaption>
    </figure>

-   :material-form-textbox-password:{ .lg .middle } **10. Paste Your Guild Id To configuration/settings.yml**

    ---

    <figure markdown>
        <figure markdown>
            ![Paste ID](../../assets/minebot/image-9.webp)
            <figcaption></figcaption>
        </figure>
        <figcaption>Paste the Discord server guild ID that you copied in the same config file where you set the bot token in step 8.</figcaption>
    </figure>

-   :material-form-textbox-password:{ .lg .middle } **11. Done!**

    ---

    You're done! All other settings are optional. However, we highly recommend linking it with your Minecraft server to get the most functionality out of it in the "server" section of the same file from step 8 and 10.


</div>

## 4. Start The Bot

!!! warning

    You need to re-run steps 1, 3 and 4 _from below_ each time you reboot your machine or close the terminal/console window.

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

    The bot will take some time to download its dependencies and should be up and running. 

    If you need help, [open a ticket on GitHub](https://github.com/kangarko/MineBot/issues) and we will navigate you.