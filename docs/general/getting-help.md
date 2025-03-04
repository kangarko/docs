# Getting Help The Right Way

::: info
This guide will help you report issues, find solutions, and get the quickest and most efficient response from our support team. These principles apply to all MineAcademy plugins.
:::

## Where To Get Help

1. **For official developer support**: [Open a ticket on GitHub](https://github.com/kangarko/) in the appropriate plugin repository.
2. **To chat with our volunteers and community**: [Join our Discord](https://mineacademy.org/discord).

## Reading Stack Traces

Stack traces are essential diagnostic information that show exactly where a problem lies. They're like a roadmap to the issue.

::: tip Always Check for Errors
Always check your startup log and console for any errors when having issues. When sharing errors, paste the entire log to [pastebin.com](https://pastebin.com) and share the link.
:::

When you see an error in your console, it means something unexpected happened. To protect your data, our plugins will typically shut down rather than risk corrupting your configuration files.

**The key to understanding stack traces is to read them carefully**. Many people skip this step, but the error message often tells you exactly what needs to be fixed.

For example, many errors will clearly identify the problem:

![Example Error](https://i.imgur.com/S9sReQb.png)

The error above shows that a setting contains an invalid value type. In this case, a number was expected but a boolean (true/false) was provided instead.

For YAML configuration files, you can check their validity using [this online parser](http://yaml-online-parser.appspot.com/).

## Before You Report an Issue

1. **Delete the library/ folder in your root server folder** while the server is stopped and reboot. This will force us to re-download libraries.

2. **Give it ten minutes and experiment**. Try to solve the issue yourself first. We have limited time, and would rather spend it on development and adding new features.

3. **Use common sense and be specific**.
 
   ::: tip How to file reports
   **Bad report**: "Plugin doesn't work at all. Nothing happens!"

   **Good report**: "I'm trying to configure custom chat formats for different worlds, but only one format shows up everywhere. I've set 'Groups' to true in settings.yml, configured my permission plugin, restarted the server, and verified players have the correct permissions, but it's still not working. I'm using [Plugin] version X.Y.Z, LuckPerms X, and Spigot vX."
   :::

4. **Check for similar issues first**. Use Search or 'CTRL + F' on the issue tracker.

5. **Verify the issue is caused by our plugin**. Try disabling other plugins to isolate the problem.

## What You Should NEVER Do

::: danger Critical Don'ts
* **Never use /reload** or plugin managers (PlugMan, etc.) with our plugins - always do a clean server restart
* **Never edit any files on a running server** - always shut down first
* **Never mix different versions** of the same plugin on a network - this will break things
* **Never use outdated versions** of Minecraft, server software, or dependencies
:::

## Making A Proper Report

When creating a new issue, please include:

1. **Your server version** (run the `/version` command if unsure)
2. **How to reproduce the issue** - detailed steps to make the problem occur
3. **Any error logs or stack traces** (this is critical) - share via pastebin
4. **List of potentially conflicting plugins** (especially those that might interact with the same game mechanics)
5. **Relevant sections from your configuration files** that might be causing the issue

## After Reporting

Please be patient and give us 1-5 days to respond. We're a small team developing these plugins as a passion project, not a full-time job.

Clear, detailed reports with all the information above will receive faster responses than vague reports or those missing critical information.

---

Remember: Good communication leads to faster solutions! The more detailed and clear your report, the quicker we can help solve your issue. 