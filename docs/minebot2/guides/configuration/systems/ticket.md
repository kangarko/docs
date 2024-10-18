---
title: Ticket System
description: Setting up and using the ticket system in MineBot.
---

# Ticket System

Welcome to the ticket system guide for `MineBot`. 

Here, you'll learn how to set up, configure, and use the ticket system to manage reports, tickets and questions efficiently.

- [Click here for example config](../../../examples/configuration/systems/ticket.md)

## <u>Ticket Systems</u>
There are 2 systems for tickets:

### 1. Thread
- This is a new system that MineBot uses to open subheadings on a single channel.

### 2. Category
- This system opens different channels on a category. This is an older system preferred by some networks. 

=== "Thread"
    ```markdown
    ticket_system: Thread
    ```
=== "Category"
    ```markdown
    ticket_system: Category
    ```

## <u>Opening Styles</u>
We have 2 opening styles:

### Direct
- Does not send any information message to the channel you set as the main channel, you must either send this message yourself or write it in the channel description.
- Direct opening style can only be used in message and command opening methods and **is not** compatible with other systems.

### Post Message
- It sends an embed information message to the channel you set as the main channel. Thus, you do not need to send any information message.
- Post Message opening style is compatible with **all opening methods**.

=== "Direct"
    ```markdown
    opening:
      style: Direct
    ```
=== "Post Message"
    ```markdown
    opening:
      style: Post Message
      message_channel: 1275571829657833584
    ```

## <u>Opening Methods</u>
We have 5 different opening methods in this area:

### Message
- This opening method creates a ticket channel when a message arrives in the channel you specified for the ticket category.
- Assigns the message it receives as an embed message into the ticket channel it opens.

### Reaction
- This opening method is triggered when there is a reaction to the information message on the channel you set as the main channel.
- Different emojis can be defined for all ticket categories you specify.
- Also receives information about the ticket content from the user via a form.

### Button
- This opening method defines different buttons to the information message in the channel you set as the main channel and tickets in different categories can be opened through these buttons.
- It is possible to assign different buttons for each ticket category.
- Each button has an emoji and text that can be determined for itself.
- It receives information messages for Ticket from the user via the form.

### Dropdown
- This opening method uses discord's dropdown system and turns all ticket categories into a selectable dropdown and opens a channel in the selected category.
- Each category has an emoji and text that can be determined for itself.
- It receives information messages for Ticket from the user via the form.

### Command
- This opening method defines a command using the discord application command system and opens ticket channels through this command.
- It receives information messages for Ticket from the user via the form.

=== "Message"
    ```markdown
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
    ```markdown
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
    ```markdown
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
    ```markdown
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
    ```markdown
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


## <u>Starting Styles</u>
In this section we have 2 different start styles:

### Direct
- No message is sent to the ticket channel opened in this startup style.
- Compatible with all opening methods **except** message opening method.
- Supports **only** the command closing method.

### Post Information
- The information received at startup is sent to the channel as an embed message.
- Compatible with **all** opening and closing methods.

=== "Direct"
    ```markdown
    starting:
      style: Direct
    ```
=== "Post Information"
    ```markdown
    starting:
      style: Post Information
    ```


## <u>Closing Methods</u>

### Reaction
- Adds the reactions you specify to the message sent as post information and performs the specified actions when they are clicked.
- Different emoji can be assigned for each process.

### Button
- It adds different buttons for each operation to the information message sent as post information and performs the necessary operations when these buttons are clicked.
- Different buttons are assigned for each operation.
- Each button has an emoji and text that can be set for itself.

### Command
- By adding the discord application command, it helps you close the ticket through the command.

=== "Reaction"
    ```markdown
    closing:
      method: Command
      emojis:
        close: ⛔
        answer: 🙋
    ```
=== "Button"
    ```markdown
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
    ```markdown
    closing:
      method: Command
    ```


## <u>Transcript Methods</u>
We have added 5 different customisable transcript methods for you:

### No Transcript
- Do nothing.

### Move Channel
- This method moves the channel to another category.
- Only available for category ticket system.

### Lock Channel
- This method locks the thread.
- Only available for thread ticket system.

### Send Channel As Text
- This method saves all messages from the channel in a .txt file.

#### Upload Methods

##### Github
- Sends the saved file to the designated github repo.
- 
##### Channel
- Sends the saved file to the designated discord channel.

### Send Channel As HTML
- This method saves all messages from the channel in a .html file.
- [For example page click here](https://egehankilicarslan.github.io/minebot-transcript-example/html/1726687925.html)

#### Upload Methods

##### Github
- Sends the saved file to the designated github repo.

##### Channel
- Sends the saved file to the designated discord channel.

=== "No Transcript"
    ```markdown
    transcript:
      method: No Transcript
    ```
=== "Move Channel"
    ```markdown
    transcript:
      method: Move Channel
      category_id: 1270857751366602783 
    ```
=== "Lock Channel"
    ```markdown
    transcript:
      method: Lock Channel
    ```
=== "Send Channel As Text"
    ```markdown
    transcript:
      method: Send Channel as Text
      upload:
        method: Channel
        channel_id: 1277218813632450662
    ```
=== "Send Channel As HTML"
    ```markdown
    transcript:
      method: Send Channel as HTML
      upload:
        method: Github
        token: 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
        repo: EgehanKilicarslan/minebot-transcript-example
        branch: master
    ```

## <u>Notification Settings</u>
In this section there are different notifications for both users and staffs.

### Staff Notifications

#### Mention
- Sends an in-game toast message to the staffs when tagged in the channel.

### User Notifications

#### Mention
- Sends an in-game toast message to the users when tagged in the channel.

#### Answer
- Sends users an in-game toast message when the ticket is marked as resolved.

#### Close
- Sends an in-game toast message to users when the ticket is closed.