---
title: Installation
description: A tutorial on getting started with MineBot.
icon: material/download
hide:
  - toc
---

# Installation

A complete guide for both beginners and experienced users to instal and setup MineBot.

## 1. Download And Extract Bot

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

## 2. (Optional) Install MineBotConnector

To integrate MineBot with your Minecraft server, follow these optional steps:

1. **Move the MineBotConnector JAR**:  
   Copy the `MineBotConnector-X.jar` file into your Minecraft server's `plugins` folder.

2. **Restart Your Minecraft Server**:  
   Restart your Minecraft server to load the MineBotConnector plugin.

3. **Configure WebSocket Port**:  
   Open the file `plugins/MineBotConnector/settings.yml` on your Minecraft server and set the `websocket.port` to match the port specified in your MineBot's `configuration/settings.yml` under `server.uri`.
   Make sure to edit the `server.uri` parameter to match the IP address of your Minecraft server.

!!! warning
    Ensure the WebSocket port you configured is allowed through your firewall. If you're unsure or using a hosting provider, contact your hosting support to confirm which ports are available for use.


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
</div>


## :tada: 4. You're All Set!

Congratulations, you've successfully completed the installation steps! To start your bot, please follow the instructions in the [Running Guide](../running/index.md).

