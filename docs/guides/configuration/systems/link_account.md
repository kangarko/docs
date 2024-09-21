---
title: Account Linking System
description: Step-by-step guide to linking your Minecraft account with MineBot for seamless integration.
---

# Account Linking System

Welcome to the account linking guide for `MineBot`. This section provides detailed instructions on how to link your Minecraft and Discord accounts with MineBot to enable seamless integration and unlock additional features.

- [Click here for example config](../../../examples/configuration/systems/link_account.md)

## Code Lenght
- This setting allows you to specify the length of the code required for verification when pairing your minecraft and discord accounts

## Reward Mode
- With this setting you can distribute certain rewards to people who pairs their account
- There are 4 different modes for prize distribution as follows
    - None -> No Reward
    - Role -> Give a discord role
    - Item -> Give item, perm etc. with command.
    - Both -> Role + Item reward mode

## Reward Section
=== "Role"
    ```markdown
    reward:
      role: 1173046888820375552 # role id
    ```
=== "Item"
    ```markdown
    reward:
      item: # give command(s)
        - "give {player} minecraft:iron_ingot 64"
        - "give {player} minecraft:diamond 32"
    ```
=== "Both"
    ```markdown
    reward:
      role: 1173046888820375552 # role id
      item: # give command(s)
        - "give {player} minecraft:iron_ingot 64"
        - "give {player} minecraft:diamond 32"
    ```
