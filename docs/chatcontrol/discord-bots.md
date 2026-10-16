# Discord Bot Messages

You can bridge messages from other Discord bots into your Minecraft channels. This is disabled by default.

First [connect your Discord channels](./discord), then set this in ChatControl's settings.yml:

```yaml
Discord:
  Bridge_Bot_Messages: true
```

In DiscordSRV's config.yml, allow bot messages:

```yaml
DiscordChatChannelBlockBots: false
```

Restart the server after editing both files. On a network, apply the settings to each backend that receives Discord messages.

| ChatControl setting | Default | Purpose |
|---------------------|---------|---------|
| `Discord.Bridge_Bot_Messages` | `false` | Allow messages from other Discord bots |
| `Discord.Filter_Chat` | `true` | Apply chat rules and filtering to accepted Discord messages |

Use `true` or `false` without quotes. DiscordSRV's blocked author and role settings still apply before ChatControl receives a message.

## Filtering and Identity

An unlinked bot uses its Discord account identity for message history. Matching a Minecraft player's name does not give the bot that player's permissions or mute bypasses. A bot with an actual DiscordSRV account link uses the linked Minecraft identity.

Chat delay and message limits also count messages containing only attachments. Attachment filenames and links are displayed separately from the text checked by rules.

## Preventing Message Loops

ChatControl excludes its own Discord bot and all webhook authors. Accepted bot messages keep their original attachment links and are never reposted, even with `Discord.Send_Messages_As_Bot` enabled. Automatic warnings and Discord spy output are suppressed for bot authors.

If you use `then discord` or console commands to forward bot messages yourself, keep the destination separate from any channel that feeds messages back into the same rules.

This option bridges message text and attachments. It does not add support for messages containing only embeds, stickers, or later edits to the source message.
