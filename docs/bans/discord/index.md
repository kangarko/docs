---
title: Discord
description: DiscordSRV integration guide
icon: fontawesome/brands/discord
hide:
  - toc
---

# :fontawesome-brands-discord: Discord Setup

## 1. Enable debug

Set `Debug` key in settings.yml to "[discord]" and restart. This will save you HOURS and print out what is happening to the console. After you're finished setting up, you can remove this key.

## 2. Install DiscordSRV

Install [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) to get started.

**Warning:** DiscordSRV updates frequently and tends to break the API. If you get any errors ask them first.

## 3. Create bot and connect DiscordSRV

Configure DiscordSRV as per this [initial setup guide](https://docs.discordsrv.com/installation/initial-setup) by DiscordSVR.

!!! warning "Ensure to give your bot the ability (permission) to delete/manage messages!"

## 4. Link channels in DiscordSRV

Copy the channel ID of your channels you want connected. Open up Discord client, right click your channel and select Copy ID.

![Channel Id](../assets/bans/copy-channel-id.png)

Now open up config.yml in plugins/DiscordSRV. Insert , "channel-name": "channel-id" at the end of Channels or without the initial ',' in case your Channels are empty. Use the exact channel names as you have on Discord. This is how multiple connected channels look like:

![Channel Names](../assets/bans/insert-channel-names.png)

!!! warning "To avoid duplicated messages, set DiscordChatChannelMinecraftToDiscord to false in DiscordSRV/config.yml."

## 5. Link channels in **Bans**

Finally, open **Bans** settings.yml, go to `Discord` section and paste the channel's ID to the Channel_ID key for channels you want connected.

Do this for ALL your servers that you want to link to the Discord channel.

![Channels](../assets/bans/link-channels.png)

