# Variables

::: warning Important
Read this page carefully - live player and rule variables cannot be used everywhere. See the bottom of this page for broadcast variables that may be used in discord/global alert messages.
:::

---

## 1. Live Player Variables

The player-related variables you can use in operators inside rules/ for operators where there is a player object available. The player is the logged player whose items were confiscated.

| Variable Name | Description |
|---|---|
| `{player}` or `{player_name}` | Dude's name. |
| `{sender}` | The name of the message sender you can use in Receiver_Condition variables in your formats (If you use `{player}` in that keys it will return the message receiver's name and not the sender's). |
| `{tab_name}` | Player's list name. |
| `{display_name}` | Player's display name. |
| `{nick}` or `{player_nick}` | Player's nick, or name if no nick. |
| `{country_code}` | MAY BLOCK THE MAIN THREAD: Looks up player's country code from his IP. |
| `{country_name}` | MAY BLOCK THE MAIN THREAD: Looks up player's country name from his IP. |
| `{region_name}` | MAY BLOCK THE MAIN THREAD: Looks up player's region name from his IP. |
| `{isp}` | MAY BLOCK THE MAIN THREAD: Looks up player's isp from his IP. |
| `{world}` | Player's world name. Multiverse-Core aliases are supported. |
| `{health}` | Player's health. |
| `{location}` | Player's full location. |
| `{x}`, `{y}` and `{z}` | Player's location points. |
| `{ip_address}` | Player's IP address. |
| `{sender_is_player}` | Return true/false depending if player is not console and not discord. |
| `{sender_is_console}` | Return true/false depending if player is console. |
| `{sender_is_discord}` | Return true/false depending if player is from Discord. |
| `{player_has_nick}` | Return true/false if the player has a custom nick. |
| `{date}` | A time formatted according to your Date_Format in settings.yml |
| `{date_short}` | A time formatted according to your Date_Format_Short in settings.yml |
| `{date_month}` | A time formatted according to your Date_Format_Month in settings.yml |
| `{chat_line}` | A simple chat line. |
| `{chat_line_smooth}` | A smooth chat line. |
| `{server_name}` | The "server-name" key from server.properties, or if you use PlaceholderAPI with the server extension, from its file. |
| `{server_version}` | The full server version such as 1.21.2 |
| `{nms_version}` | (Advanced) The NMS package number such as 1_20_R3 (Empty for 1.20.5+ on Paper.) |
| `{label}` | Return our main command label. |
| `{plugin_prefix}` | Return the Prefix key from your settings.yml |
| `{prefix_info}` | Return the info prefix from your localization. |
| `{prefix_success}` | Return the success prefix from your localization. |
| `{prefix_warn}` | Return the warn prefix from your localization. |
| `{prefix_error}` | Return the error prefix from your localization. |
| `{prefix_question}` | Return the question prefix from your localization. |
| `{prefix_announce}` | Return the announce prefix from your localization. |
| `{data_X}` | Returns a custom variable. This is set in rules with data-related operators, see [Rules](rules). See rules/chat.rs for example (search for @bot name demo rule). |

---

## 2. Rule Variables

The variables you can use in operators inside rules/.

| Variable Name | Description |
|---|---|
| `{removed_amount}` | The amount of itemstack that was taken (i.e. if limit is 32 and player has 48 stacks, we will take and return 16). | 
| `{rule_name}` | The name of the rule in effect. |
| `{rule_match}` | The raw match operator. |
| `{rule_group}` | The name of the group in effect, if any. |
| `{rule_fine}` | The fine (how much economy money we deduct from the player from breaking this rule). |
| `{item_type}` | The item material name of the taken item, i.e. DIAMOND_SWORD. |
| `{item_type_formatted}` | The above but nicely formatted (i.e. Diamond Sword). |
| `{item_amount}` | The amount of the itemstack in the inventory slot. |

---

## 3. Broadcast Variables

The variables you can use in Discord or server broadcast messages (in settings.yml)

| Variable Name | Description |
|---|---|
| `{date}` | The date of the log (item confiscation, monitored command or shop transaction). |
| `{server}` | The server involved in the log. |
| `{location}` | The "world x y z" location where the log took place. |
| `{world}` | The world where the log happened. |
| `{player}` | The logged player name. |
| `{player_uid}` | The logged player uuid. |
| `{gamemode}` | The gamemode of the logged player. |

### 3a. Broadcast Rule Variables

Additional variables available for rules broadcast.

| Variable Name | Description |
|---|---|
| `{item_type}` | The material of the item confiscated. |
| `{item_amount}` | The amount of item confiscated. |
| `{rule_name}` | The rule that triggered the confiscation. |
| `{rule_match}` | The raw match of the rule that triggered the confiscation. |

### 3b. Command Spy Variables

Additional variables available for command spy broadcast.

| Variable Name | Description |
|---|---|
| `{type}` | Either "block" or "spy" depending on your settings.yml Command_Log.Block option. |
| `{command}` | The logged command. |

### 3c. Shop Transaction Variables

Additional variables available for shop transaction broadcast.

| Variable Name | Description |
|---|---|
| `{plugin}` | The shop plugin name. |
| `{transaction_type}` | Either "buy" or "sell". |
| `{price}` | The raw price, i.e. "1.0". |
| `{price_formatted}` | The price formatted with currency to our best knowledge, i.e. "$5.0". |
| `{shop_owner}` | The shop owner's name, or "adminshop" if not known. |
| `{shop_owner_uid}` | The shop owner's uuid, if any. |
| `{amount}` | The amount of transacted goods. |
| `{item_type}` | The material name of transacted item. |