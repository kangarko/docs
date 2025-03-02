---
title: Localization
description: Localizing MineBot for different languages and regions.
icon: material/sort-alphabetical-descending-variant
hide:
  - toc
---

# Localization

Welcome to the `MineBot` localization guide. You will find instructions on how to translate parts of the bot to your own language or change messages here.

Here are two examples to help you understand how translations work.

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