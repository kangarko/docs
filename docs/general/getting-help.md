# Getting Help

1. **Bug reports**: [Open a ticket on GitHub](https://github.com/kangarko/) in the appropriate plugin repository.
2. **Community help**: [Join our Discord](https://mineacademy.org/discord).

## Reading Stack Traces

Always check your startup log and console for errors. Paste the entire log to [pastebin.com](https://pastebin.com) and share the link.

Read the error message carefully — it often tells you exactly what needs to be fixed:

![Example Error](/images/general/S9sReQb.png)

For YAML syntax errors, validate with [this online parser](http://yaml-online-parser.appspot.com/).

## Before You Report an Issue

1. **Delete** the library/ folder (server stopped) and restart to re-download libraries.
2. **Try to solve it yourself first** — give it 10 minutes.
3. **Be specific**: Include what you did, what you expected, and what happened. "Plugin doesn't work" is not helpful.
4. **Search** the issue tracker first (Ctrl+F).
5. **Isolate**: Disable other plugins to verify the issue is ours.

## What You Should NEVER Do

::: danger Critical Don'ts
* **Never use /reload** or plugin managers (PlugMan, etc.) with our plugins - always do a clean server restart
* **Never edit any files on a running server** - always shut down first
* **Never mix different versions** of the same plugin on a network - this will break things
* **Never use outdated versions** of Minecraft, server software, or dependencies
:::

## Making A Proper Report

Include:

1. **Server version** (`/version`)
2. **Steps to reproduce** the issue
3. **Error logs** via [pastebin.com](https://pastebin.com)
4. **Potentially conflicting plugins**
5. **Relevant config sections**

Please be patient — we typically respond within 1-5 business days.