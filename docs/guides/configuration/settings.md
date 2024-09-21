---
title: Settings
description: A comprehensive guide to configuring the base settings of MineBot for optimal performance and customization.
---

# Settings

Welcome to the settings guide for `MineBot`. This section provides detailed instructions on how to configure the base settings to tailor MineBot to your specific needs and ensure optimal performance.

??? quote "Related Configuration File"
    - `configuration/settings/config.yaml`

- [Click here for example config](../../examples/configuration/settings.md)

## Token
- Token is a kind of key that allows us to access your discord bot with the discord api.
- You can get the token information of your discord bot on the Discord Developer Portal.
- For more information: [Installation/Setup and Run](../installation/setup_and_run.md)

## Default Guild
- Default guild is the id of the main server you will use the bot on.

## Database
- We provide this section with compatibility with two different providers.
- You can tell us which provider you are using in the database.provider section.
=== ":simple-mongodb: MongoDB"
    1. **Collection**: On MongoDB, you can write whatever you want the name of the collection in the cluster to be.
    2. **URI**: The uri we need to connect to your MongoDB database.
=== ":simple-sqlite: SqLite"
    - There is no extra key you need to add in this section.

## Server
- You need to enter the rcon information we need to connect to your Minecraft server in this section.
- If you do not enter any information in this section, server support will automatically switch off.
=== ":material-minecraft: RCON Information"
    1. **IP**: You can enter the same ip address as the ip address of your server.
    2. **Port**: You can write the port you specified for the RCON connection, if you have not changed it, you can write port 25575 by default.
    3. **Password**: You can enter your password for the RCON connection here.

## Embed Color
- You can change the default colours used in Discord embed messages in this section.
- The colours you type must be in HEX format.
- By default, the colours we have set for you are green and red.