# JAR Hell

::: warning
Some plugins improperly shade libraries already shipped with modern servers, breaking ChatControl.

**To find the culprit:** Load ChatControl WITHOUT any other plugins. If it works, add plugins one-by-one until you find which one causes the crash. Then ask that plugin's developer to fix their shading (see below).
:::

## What Is JAR Hell?

Your server ships libraries like Adventure (`net.kyori.adventure`). When a plugin bundles the same library **without relocating it** to a unique package (e.g., `me.author.net.kyori.adventure`), Java can't tell which version to use. If the bundled version is outdated, ChatControl crashes.

**Example crash** from a plugin shipping an outdated, unrelocated Adventure library:

![JAR hell crash example](/images/chatcontrol/w748GUm_d.webp)

## How Proper Shading Looks

**Bad** — unrelocated `net.kyori.adventure` inside the plugin jar (conflicts with server's copy):
![HexNicks decompiled code showing improper shading](/images/chatcontrol/5FB4PlM.png)

**Good** — DiscordSRV relocates Adventure to its own unique package:
![DiscordSRV decompiled code showing proper shading with relocation](/images/chatcontrol/ysgDNIB.png)

## Solution for Plugin Developers

Relocate shaded libraries to a unique package:

* Maven: [Class relocation guide](https://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html)
* Gradle: [Shadow relocation guide](https://gradleup.com/shadow/configuration/relocation/)