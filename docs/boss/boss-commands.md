# Boss Commands

::: tip
For the /boss command help, see [Commands](/boss/commands)
:::

You can configure your Boss to execute custom commands on the following events, all under Boss menu > Settings > **Commands**:

1. **Commands On Spawn** — when the Boss spawns
2. **Commands On Death** — when the Boss dies
3. **Commands On Target** — when the Boss starts targeting a player. Use `{player}` for that player. They fire once per new target, so re-targeting the same player does not spam them
4. **Commands On Life Decrease** — when the Boss's health drops below a threshold you set in HP

![Boss Commands Menu](/images/boss/zZF9ics.png)

Every [skill](skills#commands) has its own command list too, which runs each time the skill fires.

**One Command Mode**, at the bottom of the Commands menu, stops after the first command that actually ran. Handy when you want one command for the killer and another for when there is none.

## Command Variables

We support the following variables inside a command:

- `{player}` and `{player_name}` for the player the command is running for
- `{killer}` and `{killer_name}` for the Boss' direct killer
- `{boss_name}`, `{boss_alias}`, `{boss_world}`, `{boss_x}`, `{boss_y}`, `{boss_z}` and `{boss_location}`
- All variables listed in the [Variables](/boss/variables) page (replace %% with {}).
- Plus PlaceholderAPI variables for that player. I.e. %player_health% will return their remaining health.

A command containing `{player}` or `{killer}` is skipped when no player is involved, for example a Boss killed by fire. Set `Debug` to `[commands]` in settings.yml to log every time that happens.

## Command Configuration:

You can run the command as the console or with the permissions that the player has:

![Command Configuration](/images/boss/qoRtIDO.png)

You can also set a chance for the command, from 0% to 100%, so it can run rarely or not much at all. New commands start at 100% and run as console.

::: warning
Commands running as the player only resolve `{player}` and `{player_name}`. Keep **Run As Console?** enabled if your command uses `{boss_name}`, `{boss_alias}` or any other Boss variable.
:::

## Special Commands

Alongside any typical commands we also support the following special syntax:

- `tell <message>` - Send the message to the player the command is running for. When there is no such player, everyone within 10 blocks of the Boss receives it instead. Separate multiple lines with |.
- `tell-damagers <message>` - Send a message to all players who damaged the boss. You can use {damager} for each damager's name and {damage} or {damage_percent} for the damage he did. Example: `tell-damagers &7Hey &6{damager}&7, you dealt &c{damage} damage &7to &a{boss_name}&7!` Separate multiple with |.
- `tell-damagers-list <format> or <title>|<format>` - Works like tell-damagers but instead of sending one message to each damager, it sends a list of all damagers to each player so they see how up you rank compared to other players. In the message, you specify the format. You can use {order} to get the number, {damager}, {damage} or {damage_percent} as well as other [Boss variables](/boss/variables).

You can specify the header title of the messages using |, for example: `tell-damagers-list Who Hurt {boss_name}|&f#{order}. &6{damager} &f- &c{damage} ({damage_percent})` will make the message look like so:

![Damagers List Example](/images/boss/ws7NviD.png)


-  `broadcast-damagers-list <format> or <title>|<format>` - See tell-damagers-list, but we will send the messages to all online players instead of only those who damaged the Boss before he died.

Both list commands accept a `-top-<amount>` suffix that cuts the list down to the best damagers, for example `broadcast-damagers-list-top-3 Who Hurt {boss_name}|&f#{order}. &6{damager} &f- &c{damage} ({damage_percent})` only lists the three highest damagers. Everybody who damaged the Boss still receives the tell-damagers-list message, and {damage_percent} still compares each damager against the total damage taken by the Boss, so the shown percents do not add up to 100% when the list is cut.

- `broadcast <message>` - Send all players on the server the specified message. Separate multiple lines with |.
- `discord <channel> <message>` - (Requires DiscordSRV) Send the specified message to the given Discord channel. Without DiscordSRV the command is skipped and a console warning is printed once every 30 minutes.

For `<channel>` you can use either:

- a **game channel name** you linked in DiscordSRV's `config.yml` under `Channels`, such as `global`
- a **raw Discord channel ID**, such as `1145283619283492352`, which needs no DiscordSRV configuration at all. Enable Developer Mode in Discord (User Settings > Advanced on desktop, User Settings > Appearance on mobile), then right click the channel and pick Copy Channel ID.

![Discord Command Example](/images/boss/RieObvS.png)

Here is the example in action:

![Discord Message Example](/images/boss/sG8Jy16.png)

### Announcing a Boss Spawn on Discord

Open Boss menu > Settings > **Commands** > **Commands On Spawn**, click Create new and enter:

```
discord 1145283619283492352 :crossed_swords: **{boss_alias}** has spawned in {boss_world} at {boss_x}, {boss_y}, {boss_z}!
```

Repeat for each Boss you want announced. Since the message is a per-Boss setting, you can announce your mini bosses to one channel and your raid bosses to another, or leave the command off the Bosses you do not care about.

::: tip
Only `&` color codes are stripped before the message reaches Discord. MiniMessage tags such as `<gold>` are not processed and would show up literally, so use Discord's own Markdown (`**bold**`, `_italic_`) and emoji shortcodes instead. Messages longer than Discord's 2000 character limit are split across several messages.
:::
