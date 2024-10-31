---
title: Localization
description: Localizing MineBot for different languages and regions.
icon: material/sort-alphabetical-descending-variant
hide:
  - toc
---

# Localization

Welcome to the `MineBot` localization guide. You will find instructions on how to translate parts of the bot to your own language or change messages here.

Here are three examples to help you understand how translations work.

## Simple Commands
```yaml
suggest:
  name: suggest
  description: Suggest a feature for the server.
```

As you can see, in this section we have left only two parts that you can change:

- name -> The name of the command as it appears in the user interface.
- description -> The description of the command as it appears in the user interface.

## Complex Commands
```yaml
wiki:
  name: wiki
  description: Search the MineAcademy wiki.
  options:
    - query:
      - name: query
      - description: The query to search for
```

Let's take the wiki command as an example. This command can be divided into two parts, the command itself and its options.

- name -> The name of the command or option in the user interface.
- description -> The description of the command or option in the user interface.

## Commands With Subcommands
```yaml
suggestion:
  name: suggestion
  description: View a suggestion.
  subcommand:
    - approve:
      - name: approve
      - description: Approve a suggestion
      - options:
        - id:
          - name: id
          - description: The ID of the suggestion
        - reason:
          - name: reason
          - description: The reason for the approval
    - deny:
      - name: deny
      - description: Deny a suggestion
      - options:
        - id:
          - name: id
          - description: The ID of the suggestion
        - reason:
          - name: reason
          - description: The reason for the denial
```

Let's take the suggestion command this time, since this command is technically divided into two, it is divided into subcommands.
You can think of subcommands as commands within a command, I am sure it will be much easier to understand this way.

- name -> The name of the command, option or subcommand as it appears in the user interface.
- description -> The description of the command, option or subcommand as it appears in the user interface.