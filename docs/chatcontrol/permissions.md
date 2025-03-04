# Permissions

::: info
Here you can view all permissions this plugin supports. We recommend using LuckPerms or PermissionsEx (for older Minecraft versions) as a permission plugin, as these have proven stability over the many years of their course.

One of the best parts about ChatControl is that, you can view the required permission directly within the error message when you attempt to execute a command you don't have access to.
:::

![Permission error message showing required permissions](https://i.imgur.com/9srxNEm.png)

---

## Important

::: danger
**1) If you are an operator or have the "*" permission and would like something not to apply for you**, simply give yourself that as a negative permission. For example to stop yourself from automatically joining into channels, give yourself "-chatcontrol.channel.autojoin.*" permission. If you have LuckPerms, that would be "chatcontrol.channel.autojoin.*" permission with a value of "false".

**2) The magic &k color has "obfuscated" permission name, such as "chatcontrol.color.obfuscated".**
:::

::: tip Channel Permissions
You can read more about channel auto-join permissions here: [Channels Auto-Join](channels#auto-join).
:::

::: tip Color Permissions
For legacy colors use ``chatcontrol.color.`{color}``, for hex colors use ``chatcontrol.hexcolor.`{color_name}``
If you see the dumb of the permissions file below, please note that chatcontrol.color.`{color}` can also have the color replaced with decorations too, not just legacy colors. So you can use:

* chatcontrol.color.bold
* chatcontrol.color.obfuscated
* chatcontrol.color.strikethrough
* chatcontrol.color.underline
* chatcontrol.color.italic

**For the most up-to-date color permission information, see the header comments in the "Colors" section of settings.yml.**
:::

## Permissions List

To list all permissions ChatControl has to offer, type "/chc perms". We moved our permissions list to the game because it was harder to maintain it here, and we can also show what permissions you have when you run this command in game.

![Permissions command output showing list of available permissions](https://i.imgur.com/W4UTeIV.png)

You can also view the required permission directly in the error message when you attempt to execute a command you don't have access to.

## Permissions True By Default

<div class="permissions-container">

Some permissions are given to everyone by default, even non-OPs and basic players. These are:

* **chatcontrol.receive.announcer**: See messages you announce via /chc announce command. 
* **chatcontrol.soundnotify**: Tag players such as "Hey @kangarko" that uses the Sound Notify feature that will make the tag colorful and send a sound to the tagged player.
* **chatcontrol.chat.read**: See chat messages.
* **chatcontrol.chat.write**: Write chat messages.
* **chatcontrol.use.color.chat**: Use chat colors the player has permissions for (see the class dumb below) in chat.
* **chatcontrol.use.color.me**: Use chat colors the player has permissions for (see the class dumb below) in /me.
* **chatcontrol.use.color.prefix**: Use chat colors the player has permissions for (see the class dumb below) in /tag prefix.
* **chatcontrol.use.color.nick**: Use chat colors the player has permissions for (see the class dumb below) in /tag nick.
* **chatcontrol.use.color.suffix**: Use chat colors the player has permissions for (see the class dumb below) in /tag suffix.
* **chatcontrol.use.color.private_message**: Use chat colors the player has permissions for (see the class dumb below) in /tell.
* **chatcontrol.bypass.spamkick**: Do not get kicked by Bukkit for spamming repeatedly (we have a better antispam filter than Bukkit has).

</div>

## Permissions False By Default

<div class="permissions-container">

Some permissions are taken away by default, even that OPs won't have them (you have to see how that performs with your permission plugin).

* **chatcontrol.spy.autoenable**: We disable players starting to spy everything when they join, by default.
* **chatcontrol.bypass.range.world**: Even if you have "chatcontrol.bypass.range" we still prevent you from chatting across the entire world, if your channel has a Range option. That means you need to give yourself this permission explicitly to chat over your entire world and other connected worlds.

</div>

## Proxy Permissions

<div class="permissions-container">

Here are some extra permissions for [Proxy](./proxy):

```yml
Perm: chatcontrol.silence.join
Info: Hide the join message when the player joins on another server.

Perm: chatcontrol.silence.leave
Info: Hide the leave message when the player leaves from another server.

Perm: chatcontrol.silence.switch
Info: Hide the switch message when the player goes from one server to another.
```

</div>

## All Permissions

<div class="live-permissions">

### Live Permissions from GitHub Repository

The permissions below are loaded directly from the master branch of ChatControl repository, ensuring you always see the most up-to-date list:

<GitHubFile 
  repo="kangarko/ChatControl"
  path="chatcontrol-core/src/main/java/org/mineacademy/chatcontrol/model/Permissions.java"
  title="Permissions.java"
  language="java"
  parsePermissions="true"
/>

</div>

<style>
/* Custom styling for permissions document */
.permissions-container {
  background-color: rgba(var(--vp-c-brand-rgb), 0.05);
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 3px solid var(--vp-c-brand);
}

.permissions-list {
    margin: 0 !important;
    padding: 0 !important;
}

.permissions-list li {
  list-style-type: none;
  padding-left: 0;
} 

.live-permissions {
  margin: 24px 0;
}

.code-block-container {
  margin: 24px 0;
}

img {
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  margin: 16px 0;
  max-width: 100%;
}

.dark img {
  border-color: #444;
}

/* Styling for permission blocks */
.permissions-container ul {
  padding-left: 1.5em;
}

.permissions-container li {
  margin-bottom: 0.5em;
}

/* Dark mode adjustments */
.dark .permissions-container {
  background-color: rgba(var(--vp-c-brand-rgb), 0.1);
}
</style>