# Discord Integration

With ChatControl, you can connect your channels to Discord. You can even send any message such as alert staff about ads or misbehavior, or broadcast death messages to any Discord channel!

::: warning Important Notes
- There are some IMPORTANT notes at the bottom of this page, make sure to check them out.
- **IMPORTANT:** Ensure to give your bot the ability (permission) to delete/manage messages.
- **DUPLICATE MESSAGES**: To avoid duplicated messages, set DiscordChatChannelMinecraftToDiscord to false in DiscordSRV/config.yml.
:::

## Installation

### 1) Enable Debug

::: tip Debug Mode
Set "Debug" key in settings.yml to "[discord]" and restart. This will save you HOURS and print out what is happening to the console. After you're finished setting up, you can remove this key.
:::

### 2) Install DiscordSRV

Install [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) to get started. 

::: warning Version Compatibility
**Warning:** DiscordSRV updates frequently and tends to break the API. If you get any errors ask them first.
:::

### 3) Create Bot and Connect DiscordSRV

Configure DiscordSRV as per [this guide](https://www.spigotmc.org/resources/discordsrv.18494/) on its resource page (just scroll below and you will see it).

::: danger Bot Permissions
**IMPORTANT:** Ensure to give your bot the ability (permission) to delete/manage messages.
:::

**NOTICE:** The image below may get outdated really fast, please check [this](https://www.spigotmc.org/resources/discordsrv.18494/) link for up to date info on connecting discord.

![DiscordSRV configuration screenshot](https://i.imgur.com/8eeEtFs.png)

### 4) Link Channels in DiscordSRV

Copy the channel ID of your channels you want connected. Open up Discord client, right click your channel and select _Copy ID_. 

![Discord Copy ID context menu](https://i.imgur.com/uZvFFYT.png)

Now open up config.yml in plugins/DiscordSRV. Insert `, "channel-name": "channel-id"` at the end of Channels or without the initial ',' in case your Channels are empty. **Use the exact channel names as you have on Discord.** This is how multiple connected channels look like:

![DiscordSRV channels configuration](https://i.imgur.com/JDCIaZY.png)

### 5) Link Channels in ChatControl

Finally, open ChatControl's settings.yml, go to Channels.List section and paste the channel's ID to the Discord_Channel_Id key for channels you want connected.

::: info Multi-Server Setup
**Do this for ALL your servers that you want to link to the Discord channel.**
:::

![ChatControl channel configuration](https://i.imgur.com/h6hAXxk.png)

### 6) (Optional) Send Discord Messages from Rules

You can use the `then discord` operator in [Rules](./rules), such as `then discord 753251852451053598 Hello world!`. Specify the Discord channel ID and the message you want to send there.

## Additional Notes

### Permissions
::: warning Bot Permissions
Ensure to give your bot the ability (permission) to delete/manage messages.
:::

### Proxy Integration
::: info Proxy Networks
If you have [proxy enabled](./proxy), and your channel has Discord on, we will send it both to proxy and to Discord. If the other server has DiscordSRV installed, it will not send it to Discord to avoid duplication.

If however, you send a message from a server on your network which lacks DiscordSRV but the channel has Discord enabled, it will try to find another network server which has **Discord.Forward_From_Proxy** on true in settings.yml and DiscordSRV installed and try forwarding the message to Discord through that server.
:::

### Rules and Mentions

If you want rules and filtering for your Discord, the @ mentions or your other Discord plugin may not work.

::: tip Message Processing
When you send a message to Discord, by default we have to unsend it and send it again through our own system. This is because Discord doesn't let developers to edit messages sent by other players. This makes filtering functional but poses some limitations. You can turn this off in Discord section of settings.yml, see:
:::

```yaml
Discord:
  Send_Messages_As_Bot: false
```