# Discord Integration

Connect your channels to Discord. Send any message — staff alerts about ads/misbehavior, death messages, etc. — to any Discord channel.

::: danger Important
- Give your bot the **Manage Messages** permission on Discord.
- To avoid duplicate messages, set `DiscordChatChannelMinecraftToDiscord` to false in DiscordSRV/config.yml.
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

**NOTE:** The image below may become outdated — check [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) for up to date info.

![DiscordSRV configuration screenshot](/images/chatcontrol/8eeEtFs.png)

### 4) Link Channels in DiscordSRV

Copy the channel ID of your channels you want connected. Open up Discord client, right click your channel and select _Copy ID_. 

![Discord Copy ID context menu](/images/chatcontrol/uZvFFYT.png)

Now open up config.yml in plugins/DiscordSRV. Insert `, "channel-name": "channel-id"` at the end of Channels or without the initial ',' in case your Channels are empty. **Use the exact channel names as you have on Discord.** This is how multiple connected channels look like:

![DiscordSRV channels configuration](/images/chatcontrol/JDCIaZY.png)

### 5) Link Channels in ChatControl

Finally, open ChatControl's settings.yml, go to Channels.List section and paste the channel's ID to the Discord_Channel_Id key for channels you want connected.

::: info Multi-Server Setup
**Do this for ALL your servers that you want to link to the Discord channel.**
:::

![ChatControl channel configuration](/images/chatcontrol/h6hAXxk.png)

### 6) (Optional) Send Discord Messages from Rules

You can use the `then discord` operator in [Rules](./rules), such as `then discord 753251852451053598 Hello world!`. Specify the Discord channel ID and the message you want to send there.

## Additional Notes

### Proxy Integration

If you have [proxy enabled](./proxy) and your channel has Discord on, messages are sent to both proxy and Discord. If the other server has DiscordSRV installed, it will not send to Discord to avoid duplication.

We recommend having DiscordSRV installed on all servers from which you want to send or receive Discord messages.

### Rules and Mentions

If you want rules and filtering for Discord messages, the @ mentions or your other Discord plugin may not work.

When you send a message to Discord, by default we unsend it and resend it through our own system (Discord doesn't let developers edit messages sent by other players). This makes filtering functional but poses some limitations. You can turn this off:

```yaml
Discord:
  Send_Messages_As_Bot: false
```

## Troubleshooting

### Discord → Minecraft rules triggering incorrectly
When messages come from Discord into Minecraft, your chat rules will process them. If you have emoji-related or special character rules, they may trigger on Discord messages. Use the `ignore discord` operator in your rules to prevent this, or `require discord` to create Discord-only rules.

### `deny silent` not deleting Discord messages
The `deny silently` operator prevents messages from appearing in Minecraft chat, but it cannot delete the original Discord message. To delete Discord messages, ensure your bot has the **Manage Messages** permission on Discord and set `Send_Messages_As_Bot` to `true`.

### Discord channel text formatting issues
Discord uses its own formatting (bold with \*\*, italic with \*, etc.) while ChatControl uses MiniMessage. These are not automatically converted between platforms. Format your `Format_To_Discord` without MiniMessage tags, and your `Format_From_Discord` without Discord markdown.

- **`Format_To_Discord`** controls how Minecraft messages appear in Discord. Use plain text or Discord markdown here — do not use MiniMessage tags like `<#123456>` as Discord won't render them.
- **`Format_From_Discord`** controls how Discord messages appear in Minecraft. Use MiniMessage formatting here — do not use Discord markdown like `**bold**` as Minecraft won't render it.

### DiscordSRV grabbing messages suppressed by rules
If DiscordSRV still sends messages to Discord even after ChatControl's rules suppress them, adjust your [Listener Priorities](./listener-priorities) so ChatControl processes messages before DiscordSRV. Set ChatControl's priority higher (earlier) than DiscordSRV's.

### Duplicate messages appearing
Set `DiscordChatChannelMinecraftToDiscord` to `false` in DiscordSRV's config.yml. If using proxy, ensure only one server has DiscordSRV installed to avoid duplication.