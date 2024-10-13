---
title: Settings
description: Configuring the base settings of MineBot for optimal performance and customization.
---

# Settings

Welcome to the settings guide for `MineBot`. 

Here, you'll learn how to configure MineBot to your specific needs.

??? quote "Related Configuration File"
    - `configuration/settings/config.yaml`

- [Click here for example config](../../examples/configuration/settings.md)

## Token
- A token is a key that allows us to access your Discord bot with the Discord api.
- To get the token, visit the Discord Developer Portal.
- For more information: [Installation/Setup and Run](../installation/setup_and_run.md)

## Default Guild
- Default guild is the id of the main server you will use the bot on.

## Database
- We provide this section with compatibility with two different providers.
- You can tell us which provider you are using in the database.provider section.
=== ":simple-mongodb: MongoDB"
    1. **Collection**: On MongoDB, you can write whatever you want the name of the collection in the cluster to be.
    2. **URI**: The URI we need to connect to your MongoDB database.
=== ":simple-sqlite: SqLite"
    - There is no extra key you need to add in this section.

## Server RCON
- You need to enter the RCON information we need to connect to your Minecraft server in this section.
- Enable RCON by setting enable-rcon to true in server.properties. 
- If you do not enter any information in this section, server support will automatically switch off.
=== ":material-minecraft: RCON Information"
    1. **IP**: The IP address of your server.
    2. **Port**: The port for the RCON connection from rcon.port in server.properties. Set to 25575 by default.
    3. **Password**: The password from rcon.password in server.properties.

## Embed Color
- You can change the default colors used in Discord embed messages in this section.
- The colors you type must be in HEX format.
- By default, the colors we have set for you are green and red.