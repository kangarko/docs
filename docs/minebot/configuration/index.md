---
title: Configuration
description: Configuring Minebot for optimal performance and customization.
icon: octicons/gear-24
hide:
  - toc
---

# Settings

Welcome to the guide for `Minebot`'s main configuration file. 

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
    1. **collection**: On MongoDB, you can write whatever you want the name of the collection in the cluster to be.
    2. **uri**: The URI we need to connect to your MongoDB database.
=== ":simple-mysql: MySQL"
    1. **host**: The hostname of your MySQL server.
    2. **port**: The port number for your MySQL server (default: 3306).
    3. **user**: The username for accessing your MySQL database.
    4. **password**: The password for the MySQL user.
    5. **database**: The name of the MySQL database.
=== ":simple-sqlite: SQLite"
    - There is no extra key you need to add in this section.

### Server WebSocket
- You need to enter the WebSocket information we need to connect to your Minecraft server in this section.
- Install the MinebotConnector from our [plugins page](https://mineacademy.org/plugins).
- If `server.enabled` is set to `false`, this section can be skipped.
=== ":material-minecraft: WebSocket Information"
    1. **uri**: Enter the WebSocket URI for your Minecraft server.
    2. **password**: Provide the password set in the MinebotConnector plugin for authentication.
=== ":material-minecraft: Minecraft Events"
    1. **log.enabled**: Enable logging of Minecraft events to a Discord channel.
    2. **log.channel**: The channel where log messages will be sent.
    3. **minecraft.to-discord**: Set to true to sync events from Minecraft to Discord.
    4. **minecraft.from-discord**: Set to true to sync events from Discord to Minecraft.

### Embed Color
- You can change the default colors used in Discord embed messages in this section.
- The colors you type must be in HEX format.
- By default, the colors we have set for you are green and red.

## Bot Commands

This section is straightforward - you can activate or deactivate commands as needed.

#### enabled
- You can enable or disable the command from this section.

#### log
- You can enable or disable the logging from this section.

#### channel
- You need to write the id of the channel you want the log to go to here.
- Remember that the channel must be a writing channel.

## Account Linking System

Here, you'll learn how to link your Minecraft and Discord accounts with Minebot to unlock additional features.

### Logging
  - **log**: Enable/Disable
  - **channel**: Writing channel for logging

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

### Enabled
- **enabled**: Enables or disables the suggestion system.

### Text
- **text.min**: Minimum character limit for suggestion messages.
- **text.max**: Maximum character limit for suggestion messages.

### Notification
- **log.notification**: Controls whether to send in-game messages to users whose suggestions are accepted.

### Log
- **log.channel**: The channel ID where logs of moderator actions (accepting/denying suggestions) are sent.

### Result
- **moderator_channel**: Channel ID where moderators receive notifications of new suggestions.
- **approve.emoji**: Emoji used for approving suggestions.
- **approve.channel**: Channel ID where approved suggestions are posted.
- **deny.emoji**: Emoji used for denying suggestions.
- **deny.channel**: Channel ID where denied suggestions are posted.

### Reward
- There are 4 different modes for prizes:
    - None -> No Reward
    - Role -> Give a discord role
    - Item -> Give item, perm etc. with command.
    - Both -> Role + Item reward mode
  
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
## Ticket System

Here, you'll learn how to set up, configure, and use the ticket system to manage reports, tickets and questions efficiently.

### <u>Ticket Systems</u>
There are 2 systems for tickets:

#### 1. Thread
- This is a new system that Minebot uses to open subheadings on a single channel.

#### 2. Category
- This system opens different channels on a category. This is an older system preferred by some networks. 

=== "Thread"
    ```yaml
    ticket_system: thread
    ```
=== "Category"
    ```yaml
    ticket_system: category
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
      style: direct
    ```
=== "Post Information"
    ```yaml
    starting:
      style: post information
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

#### no transcript
- Do nothing.

#### move channel
- This method moves the channel to another category.
- Only available for category ticket system.

#### lock channel
- This method locks the thread.
- Only available for thread ticket system.

#### send channel as text
- This method saves all messages from the channel in a .txt file.

#### send channel as html
- This method saves all messages from the channel in a .html file.
- [For example page click here](https://egehankilicarslan.github.io/minebot-transcript-example/html/1726687925.html)


### Upload Methods

#### github
- Sends the saved file to the designated github repo.

#### channel
- Sends the saved file to the designated discord channel.

=== "No Transcript"
    ```yaml
    transcript:
      method: no transcript
    ```
=== "Move Channel"
    ```yaml
    transcript:
      method: move channel
      category_id: 1270857751366602783 
    ```
=== "Lock Channel"
    ```yaml
    transcript:
      method: lock channel
    ```
=== "Send Channel As Text"
    ```yaml
    transcript:
      method: send channel as text
      upload:
        method: channel
        channel_id: 1277218813632450662
    ```
=== "Send Channel As HTML"
    ```yaml
    transcript:
      method: send channel as html
      upload:
        method: github
        token: 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
        repo: EgehanKilicarslan/minebot-transcript-example
        branch: master
    ```

### <u>Notification Settings</u>
In this section there are different notifications for both users and staffs.

#### Staff Notifications

##### Mention
- Sends an in-game message to the staffs when tagged in the channel.

#### User Notifications

##### Mention
- Sends an in-game message to the users when tagged in the channel.

##### Answer
- Sends users an in-game message when the ticket receives a message from staff.

##### Close
- Sends an in-game message to users when the ticket is closed.