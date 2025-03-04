# Soft Mute

Thanks to @TheIntolerant, here's a quick tutorial showing an example of implementing a soft-mute command, whereby the player's messages (including death, join/leave) are only visible to staff members (e.g. via permission node). This allows staff to mitigate situations without the need to hardmute players (e.g. softmuting conflicting parties and evaluate a situation).

## How does the example below works?

Basically, you want to give everyone perms for ``chatcontrol.chatsoftmute.bypass`` in this example, now when you wish to softmute someone, you just need to negate that permission node for that specific user. You can do this by either making a ``/softmute`` command or simply using the commands of your permissions manager, if you are using LuckPerms than that command would look something like:

::: code-group

```bash [LuckPerms]
/lp user <user> permission set chatcontrol.chatsoftmute.bypass false
```

```bash [PermissionsEx]
/pex user <user> add -chatcontrol.chatsoftmute.bypass
```

:::

::: tip
The permissions I have used in the example, ``chatcontrol.chatsoftmute.bypass`` and ``chatcontrol.chatsoftmute.notify``, can be whatever you wish
:::

## Step #1 - The base rule to prevent other users from seeing the soft-muted users' messages in chat

In your ``chat.rs`` file in the ``rules`` folder you will want to add one of the following...

::: code-group

```bash [Option 1]
# Works the same as GriefPrevention's softmute
match (.)*
ignore perm chatcontrol.chatsoftmute.bypass
then notify chatcontrol.chatsoftmute.notify &7[Muted] `{player}` &o`{original_message}`
then deny silently
dont verbose
```

```bash [Option 2]
# Works the same but if you do not wish to see what the user said
match (.)*
ignore perm chatcontrol.chatsoftmute.bypass
then deny silently
dont verbose
```

:::

## Step #2 - Creating a softmute command *(optional)*

_This will depend on the permissions plugin that you use, in this example, I will use LuckPerms._

As I cannot find an easy solution to check a player's permissions who may be offline using a toggleable command, I have provided a
``/softmute on`` and ``/softmute off`` solution instead.

In your ``command.rs`` file in ``/ChatControl/Rules`` you will want to add one of the following...

```rs
# Telling user how to use /softmute, if used incorrectly
match ^\/softmute( on| off)?$
then warn &cUse: /softmute <on/off> <player_name>
then deny
dont verbose

match ^\/softmute on ([a-zA-Z0-9_]{3,16})
then warn &cSoft-muting $1
then console lp user $1 permission set chatcontrol.chatsoftmute.bypass false
then deny
dont verbose

match ^\/softmute off ([a-zA-Z0-9_]{3,16})
then warn &aRemoving soft-mute from $1
then console lp user $1 permission unset chatcontrol.chatsoftmute.bypass
then deny
dont verbose
```

## Step #3 - Hiding death, join/leave messages from everyone but staff *(optional)*

If you add ``require sender perm chatcontrol.chatsoftmute.bypass`` for all messages you wish to show as normal then have a special message for soft muted users that have the following:

```rs
ignore sender perm chatcontrol.chatsoftmute.bypass
then notify chat control.chatsoftmute.notify <message>
require self
```

::: tip
Note the message in ``then notify chatcontrol.chatsoftmute.notify <message>`` is for staff only, so the actual death/join/leave message can be set to look like normal. 

That way you can set it to say something like.. ``then notify chatcontrol.chatsoftmute.notify &6The Soft muted `{player}` has died!`` but keep the message the soft muted player sees, as normal.
:::

<style>
code {
  font-family: monospace;
}
</style>