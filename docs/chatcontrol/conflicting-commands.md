# Vanilla Commands Overwriting ChatControl's Commands

In Minecraft servers, vanilla commands can sometimes override plugin commands when they share the same name (e.g. /tell).

To resolve this, you can:

* Override vanilla commands in ``commands.yml`` or with command management plugins.
* Adjust plugin configurations to rename or prioritise commands.
* Use the command namespacing (e.g. ``/PluginName:Command``)

::: tip
For example, chatcontrol commands follow this syntax:  
``/chatcontrol:Command``, such as ``/chatcontrol:msg`` etc  
:::

**This ensures the desired version of the command is used.**

--- 

## Guide On How To Resolve Command Conflicts!

This guide will show you how to override vanilla commands in ``commands.yml``

If this is not what you need help with, check out [common-issues with commands](common-issues#commands-section)!

### Step 1. Find The Commands Namespacing

Open ``/plugins/ChatControlRed/settings.yml``, this will help you work out the ``command namespacing`` syntax for the conflicting commands, which is needed in **STEP 3**.

**Example for ``Private_Messages`` and its command aliases**
```yml
  # The tell command aliases.
  # EDIT AS YOU WISH BUT THERE MUST BE AT LEAST ONE ALIAS
  Tell_Aliases: [tell, w, m, t, pm, message, msg, whisper]
```

Based on these settings, the ``command namespacing`` will follow this syntax:
```
/chatcontrol:tell
/chatcontrol:w
/chatcontrol:m
/chatcontrol:t
/chatcontrol:pm
/chatcontrol:message
/chatcontrol:msg
/chatcontrol:whisper
```

### Step 2. Open ``commands.yml`` File

Open the ``commands.yml`` file in the root/server directory. This is the same location where the ``server.jar`` & ``server.properties`` files and the "plugins" folder are located.

This is where you will override these commands to ensure the correct commands are used.

### Step 3. Make Changes To ``commands.yml``

Once you have opened the file add the "command alias" under ``aliases``, then below that, place the commands using ``command namespacing``. These are the commands you got in **STEP 1**.

**Example of ``commands.yml`` setup based on the ``Private_Messages.Tell_Aliases`` settings in ChatControl.**

```yml
aliases:
  tell:
  - chatcontrol:tell $1-
  w:
  - chatcontrol:w $1-
  m:
  - chatcontrol:m $1-
  t:
  - chatcontrol:t $1-
  pm:
  - chatcontrol:pm $1-
  message:
  - chatcontrol:message $1-
  msg:
  - chatcontrol:msg $1-
  whisper:
  - chatcontrol:whisper $1-
```

### Step 4. Restart The Server

Restart the server to make these changes go into full effect.

<style>
code {
  font-family: monospace;
}
</style>