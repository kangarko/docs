---
title: Discord
description: DiscordSRV integration guide
icon: fontawesome/brands/discord
hide:
  - toc
---


!!! warning "Ensure to give your bot the ability (permission) to delete/manage messages."

!!! warning "To avoid duplicated messages, set DiscordChatChannelMinecraftToDiscord to false in DiscordSRV/config.yml."

# Installation

<hr>
## 1) Enable debug

Set `Debug` key in settings.yml to "[discord]" and restart. This will save you HOURS and print out what is happening to the console. After you're finished setting up, you can remove this key.

<hr>
## 2) Install DiscordSRV

Install [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) to get started.

Warning: DiscordSRV updates frequently and tends to break the API. If you get any errors ask them first.

<hr>
## 3) Create bot and connect DiscordSRV

Configure DiscordSRV as per [this guide](https://www.spigotmc.org/resources/discordsrv.18494/) on its resource page (just scroll below and you will see it).

!!! warning "Ensure to give your bot the ability (permission) to delete/manage messages."

!!! warning "The image below may get outdated really fast, please check [this](https://www.spigotmc.org/resources/discordsrv.18494/) link for up to date info on connecting discord."

![image](https://github.com/user-attachments/assets/4ea7ede2-b867-474e-a5f3-e83e05794ac9)

<hr>
## 4) Link channels in DiscordSRV

Copy the channel ID of your channels you want connected. Open up Discord client, right click your channel and select Copy ID.

![image](https://github.com/user-attachments/assets/24b6abf3-8808-4a65-bb24-f9541bb645a3)

Now open up config.yml in plugins/DiscordSRV. Insert , "channel-name": "channel-id" at the end of Channels or without the initial ',' in case your Channels are empty. Use the exact channel names as you have on Discord. This is how multiple connected channels look like:

![image](https://github.com/user-attachments/assets/1ece43ae-890b-4d90-ac71-71d1c5c8abbf)

<hr>
## 5) Link channels in ***Bans***

Finally, open ***Bans*** settings.yml, go to `Discord` section and paste the channel's ID to the Channel_ID key for channels you want connected.

Do this for ALL your servers that you want to link to the Discord channel.

![image](https://github.com/user-attachments/assets/5650eaec-5638-477c-9cba-d6683561cfb3)

