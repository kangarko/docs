---
title: Configuration
description: Configuring MineBot for optimal performance and customization.
icon: octicons/gear-24
hide:
  - toc
---

# Settings

Welcome to the guide for `MineBot`'s main configuration file. 

??? quote "Related Configuration File"
    - `configuration/settings.yml`

## Main Configuration Keys

### Token
- A token is a key that allows us to access your Discord bot with the Discord api.
- To get the token, visit the Discord Developer Portal.
- For more information, see [Installation](../installation/index.md)

### Default Guild
- Default guild is the id of the main server you will use the bot on.

### Database
- We provide this section with compatibility with two different providers.
- You can tell us which provider you are using in the database.provider section.
=== ":simple-mongodb: MongoDB"
    1. **Collection**: On MongoDB, you can write whatever you want the name of the collection in the cluster to be.
    2. **URI**: The URI we need to connect to your MongoDB database.
=== ":simple-sqlite: SqLite"
    - There is no extra key you need to add in this section.

### Server RCON
- You need to enter the RCON information we need to connect to your Minecraft server in this section.
- Enable RCON by setting enable-rcon to true in server.properties. 
- If you do not enter any information in this section, server support will automatically switch off.
=== ":material-minecraft: RCON Information"
    1. **IP**: The IP address of your server.
    2. **Port**: The port for the RCON connection from rcon.port in server.properties. Set to 25575 by default.
    3. **Password**: The password from rcon.password in server.properties.

### Embed Color
- You can change the default colors used in Discord embed messages in this section.
- The colors you type must be in HEX format.
- By default, the colors we have set for you are green and red.

## Bot Commands

This section is straightforward - you can activate or deactivate commands as needed.

### Enabled
- You can enable or disable the log from this section.

### Channel
- You need to write the id of the channel you want the log to go to here.
- Remember that the channel must be a writing channel.

## Account Linking System

Here, you'll learn how to link your Minecraft and Discord accounts with MineBot to unlock additional features.

### Reward Mode
- With this setting, you can distribute certain rewards to people who pairs their account.
- There are 4 different modes for prizes:
    - None -> No Reward
    - Role -> Give a discord role
    - Item -> Give item, perm etc. with command.
    - Both -> Role + Item reward mode

### Reward Section
=== "Role"
    ```yaml
    reward:
      role: 1173046888820375552 # role id
    ```
=== "Item"
    ```yaml
    reward:
      item: # give command(s)
        - "give {player} minecraft:iron_ingot 64"
        - "give {player} minecraft:diamond 32"
    ```
=== "Both"
    ```yaml
    reward:
      role: 1173046888820375552 # role id
      item: # give command(s)
        - "give {player} minecraft:iron_ingot 64"
        - "give {player} minecraft:diamond 32"
    ```

## Suggestion System

Here, you'll learn how to set up, configure, and use the suggestion system to gather and manage user feedback.

### Text
    - Min -> Minimum character for suggestion message.
    - Max -> Maximum character for suggestion message.

### Log
    - Channel -> The channel id you want to send logs to.
    - Notification -> Sends a toast message to the person whose suggestion is accepted in the game.

## Ticket System

Here, you'll learn how to set up, configure, and use the ticket system to manage reports, tickets and questions efficiently.

### <u>Ticket Systems</u>
There are 2 systems for tickets:

#### 1. Thread
- This is a new system that MineBot uses to open subheadings on a single channel.

#### 2. Category
- This system opens different channels on a category. This is an older system preferred by some networks. 

=== "Thread"
    ```yaml
    ticket_system: Thread
    ```
=== "Category"
    ```yaml
    ticket_system: Category
    ```

### <u>Opening Styles</u>
We have 2 opening styles:

#### Direct
- Does not send any information message to the channel you set as the main channel, you must either send this message yourself or write it in the channel description.
- Direct opening style can only be used in message and command opening methods and **is not** compatible with other systems.

#### Post Message
- It sends an embed information message to the channel you set as the main channel. Thus, you do not need to send any information message.
- Post Message opening style is compatible with **all opening methods**.

=== "Direct"
    ```yaml
    opening:
      style: Direct
    ```
=== "Post Message"
    ```yaml
    opening:
      style: Post Message
      message_channel: 1275571829657833584
    ```

### <u>Opening Methods</u>
We have 5 different opening methods in this area:

#### Message
- This opening method creates a ticket channel when a message arrives in the channel you specified for the ticket category.
- Assigns the message it receives as an embed message into the ticket channel it opens.

#### Reaction
- This opening method is triggered when there is a reaction to the information message on the channel you set as the main channel.
- Different emojis can be defined for all ticket categories you specify.
- Also receives information about the ticket content from the user via a form.

#### Button
- This opening method defines different buttons to the information message in the channel you set as the main channel and tickets in different categories can be opened through these buttons.
- It is possible to assign different buttons for each ticket category.
- Each button has an emoji and text that can be determined for itself.
- It receives information messages for Ticket from the user via the form.

#### Dropdown
- This opening method uses discord's dropdown system and turns all ticket categories into a selectable dropdown and opens a channel in the selected category.
- Each category has an emoji and text that can be determined for itself.
- It receives information messages for Ticket from the user via the form.

#### Command
- This opening method defines a command using the discord application command system and opens ticket channels through this command.
- It receives information messages for Ticket from the user via the form.

=== "Message"
    ```yaml
    opening:
      method: Message
      categories:
        General:
          channel_format: "ticket-{username}"
          channel_id: 1268916282405949510
          category_id: 1270857751366602783
        Report:
          channel_format: "report-{username}"
          channel_id: 1275236634937393173
          category_id: 1270857751366602783
    ```
=== "Reaction"
    ```yaml
    opening:
      method: Reaction
      categories:
        General:
          channel_format: "ticket-{username}"
          channel_id: 1268916282405949510
          category_id: 1270857751366602783
          emoji: "🎫"
        Report:
          channel_format: "report-{username}"
          channel_id: 1275236634937393173
          category_id: 1270857751366602783
          emoji: "📝"
    ```
=== "Button"
    ```yaml
    opening:
      method: Button
      categories:
        General:
          channel_format: "ticket-{username}"
          channel_id: 1268916282405949510
          category_id: 1270857751366602783
          emoji: "🎫"
        Report:
          channel_format: "report-{username}"
          channel_id: 1275236634937393173
          category_id: 1270857751366602783
          emoji: "📝"
    ```
=== "Dropdown"
    ```yaml
    opening:
      method: Dropdown
      categories:
        General:
          channel_format: "ticket-{username}"
          channel_id: 1268916282405949510
          category_id: 1270857751366602783
          emoji: "🎫"
        Report:
          channel_format: "report-{username}"
          channel_id: 1275236634937393173
          category_id: 1270857751366602783
          emoji: "📝"
    ```
=== "Command"
    ```yaml
    opening:
      method: Command
      categories:
        General:
          channel_format: "ticket-{username}"
          channel_id: 1268916282405949510
          category_id: 1270857751366602783
        Report:
          channel_format: "report-{username}"
          channel_id: 1275236634937393173
          category_id: 1270857751366602783
    ```


### <u>Starting Styles</u>
In this section we have 2 different start styles:

#### Direct
- No message is sent to the ticket channel opened in this startup style.
- Compatible with all opening methods **except** message opening method.
- Supports **only** the command closing method.

#### Post Information
- The information received at startup is sent to the channel as an embed message.
- Compatible with **all** opening and closing methods.

=== "Direct"
    ```yaml
    starting:
      style: Direct
    ```
=== "Post Information"
    ```yaml
    starting:
      style: Post Information
    ```


### <u>Closing Methods</u>

#### Reaction
- Adds the reactions you specify to the message sent as post information and performs the specified actions when they are clicked.
- Different emoji can be assigned for each process.

#### Button
- It adds different buttons for each operation to the information message sent as post information and performs the necessary operations when these buttons are clicked.
- Different buttons are assigned for each operation.
- Each button has an emoji and text that can be set for itself.

#### Command
- By adding the discord application command, it helps you close the ticket through the command.

=== "Reaction"
    ```yaml
    closing:
      method: Command
      emojis:
        close: ⛔
        answer: 🙋
    ```
=== "Button"
    ```yaml
    closing:
      method: Button
      buttons:
        close:
          name: Close
          emoji: ⛔
        answer:
          name: Answer
          emoji: 🙋
    ```
=== "Command"
    ```yaml
    closing:
      method: Command
    ```


### <u>Transcript Methods</u>
We have added 5 different customisable transcript methods for you:

#### No Transcript
- Do nothing.

#### Move Channel
- This method moves the channel to another category.
- Only available for category ticket system.

#### Lock Channel
- This method locks the thread.
- Only available for thread ticket system.

#### Send Channel As Text
- This method saves all messages from the channel in a .txt file.

##### Upload Methods

###### Github
- Sends the saved file to the designated github repo.

###### Channel
- Sends the saved file to the designated discord channel.

#### Send Channel As HTML
- This method saves all messages from the channel in a .html file.
- [For example page click here](https://egehankilicarslan.github.io/minebot-transcript-example/html/1726687925.html)

##### Upload Methods

###### Github
- Sends the saved file to the designated github repo.

###### Channel
- Sends the saved file to the designated discord channel.

=== "No Transcript"
    ```yaml
    transcript:
      method: No Transcript
    ```
=== "Move Channel"
    ```yaml
    transcript:
      method: Move Channel
      category_id: 1270857751366602783 
    ```
=== "Lock Channel"
    ```yaml
    transcript:
      method: Lock Channel
    ```
=== "Send Channel As Text"
    ```yaml
    transcript:
      method: Send Channel as Text
      upload:
        method: Channel
        channel_id: 1277218813632450662
    ```
=== "Send Channel As HTML"
    ```yaml
    transcript:
      method: Send Channel as HTML
      upload:
        method: Github
        token: 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
        repo: EgehanKilicarslan/minebot-transcript-example
        branch: master
    ```

### <u>Notification Settings</u>
In this section there are different notifications for both users and staffs.

#### Staff Notifications

##### Mention
- Sends an in-game toast message to the staffs when tagged in the channel.

#### User Notifications

##### Mention
- Sends an in-game toast message to the users when tagged in the channel.

##### Answer
- Sends users an in-game toast message when the ticket is marked as resolved.

##### Close
- Sends an in-game toast message to users when the ticket is closed.