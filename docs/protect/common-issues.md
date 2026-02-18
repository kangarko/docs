# Common Issues

Here's a list of all of the most "popular" problems and solutions that people have. Read this and save hours waiting for reply from our support team. If an issue is arising multiple times, we will change things in the plugin to prevent this.

**PLEASE COMPLETE THE FOLLOWING STEPS WHEN HAVING ISSUES**

1. This sounds silly, but 99% of bugs are solved on the latest version. Use not Protect, but make sure dependencies like ProtocolLib, Essentials etc. are also updated. 

2. Plugin saves files in **UTF-8** format. WordPad or Notepad on Windows WILL break them. Use Notepad++ or Sublime Text. You can test different UTF-8 encodings until you find one that works.

3. Do not use PlugMan. Do a clean restart if having issues.

4. Read our Wiki. Takes 10 minutes but will save you 2 hours and more.

# Confiscation

### How do I stop Protect confiscating my admins or my own items? I have OP!
You need to use a permissions plugin to explicitly give `protect.bypass.scan` permission.

# Configuration

### MySQL database failure
If you're on Minecraft 1.8.8 or anything that's not the latest one, your server may have outdated database driver. MySQL 8.0 thus won't work. Use MariaDB instead. Minecraft 1.8.8 is confirmed to work with MariaDB but breaks with MySQL 8.0. Minecraft 1.17 and higher works with MySQL 8.0.

**Make sure to set your database collation to "utf8mb4_unicode_520_ci".**

If you're getting "Specified key was too long; max key length is 767 bytes" or any other error make sure your database supports the "utf8mb4" charset (use utf8mb4_unicode_520_ci) otherwise it won't work. Also see this [StackOverflow](https://stackoverflow.com/questions/1814532/1071-specified-key-was-too-long-max-key-length-is-767-bytes) issue for solutions to upgrading your db driver.

### Special characters are just showing as ? / Unicodes / Special characters not working

Ensure you open and save all files using the right encoding and the right program, see [Use Right Encoding](/general/use-right-encoding). You may need to regenerate your file in case the unicode letters have been corrupted by wrong encoding earlier. For unicode, you can also use the escape characters `\u2642`.

Please also make sure to surround the message that contains these characters with quotes ("").

**Important** — some systems will simply not work with unicode, such as Windows is known to be problematic with some configuration that is unknown to us. Best case you can speak to your hosting provider or try googling. Windows 10 should work for most of you, anything below may not. Also, if your system's language is using a different char set such as Chinese, Russian, Greek, Turkish, etc., then it may not work, you can try googling on how to enable unicode on your operating system. We unfortunately can't help since we have no idea.

### When I use `<center>` in messages, it doesn't exactly centers chat with colors/Russian/Greek etc. special characters are used!
Unfortunately this is the case of the free library extension we are using, anyone is encouraged to make a pull request to fix that: https://github.com/kangarko/Foundation/blob/master/src/main/java/org/mineacademy/fo/ChatUtil.java

# Discord 

### Discord integration does not work / stopped working!
Ensure your channel is linked and DiscordSRV is configured properly with your Bot joined to your server.

Set the "Debug" option in settings.yml file to "[discord]", restart your server completely (do not reload and do not use PlugMan) and notice the console message when that happens. It will give you instructions on how to fix that, or you can open a ticket and paste the messages there.

# Commands

### '/p' is interfering with another plugin!
Remove p from **Command_Aliases** in settings.yml. You can write your own command to invoke /p there instead.

```yaml
Command_Aliases: [protect, p, anotheralias]
```



