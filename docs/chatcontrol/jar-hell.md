# JAR Hell

::: warning
Some plugin developers improperly shade libraries which are already shipped with modern server versions without relocating them, breaking our plugin.

If you were sent here, try loading ChatControl WITHOUT ANY OTHER PLUGINS on your server. If it loads properly, add the plugins one-by-one until you find the culprit, then read this page and in most cases you'll need to contact the other developer to fix their bad coding practices.
:::

## Explainer for beginners

Your Minecraft server comes with many utility libraries. Some plugin developers use them in writing their plugins, however they include them in their plugin jar in a wrong way, causing conflicts.

For example, the Adventure library is shipped since Paper 1.16 in the server jar. Its Java package, the unique location, is `net.kyori.adventure`. 

## Shading a library in a plugin's jar

When you're developing a plugin, there's no need to include Adventure if you only plan to support Paper 1.16. However, should you wish to support Spigot, or legacy Minecraft versions, you need to bundle the library in your jar.

## Jar hell

::: danger
If you bundle it as-is, meaning you don't relocate its package to for example `me.myname.net.kyori.adventure` but leave it as `net.kyori.adventure`, and the server already comes with the library with its original location of `net.kyori.adventure`, bad things will happen, called "JAR hell".

The Java compiler will not be able to determine which version of the library it's being called should another plugin use it and cause conflicts. This is made worse by developers even shipping an outdated library in their plugin without relocation, which can crash ChatControl. 
:::

Here is an example of ChatControl loading with HexNicks plugin on legacy server version, this is how a crash will appear in the game console:

![JAR hell crash example](/images/chatcontrol/w748GUm_d.webp)

Upon decompiling HexNicks, we found it shaded an outdated Adventure library without relocation (the path `net.kyori.adventure` should have been changed). Java compiler has thus given ChatControl the outdated library to use, leading to its crash:

::: info
**UPDATE**: The issue appears to have been resolved in the most recent versions of HexNicks.
:::

![HexNicks decompiled code showing improper shading](/images/chatcontrol/5FB4PlM.png)

Here is an example of DiscordSRV, a well-made plugin shading the Adventure library in a relocated package, meaning ChatControl will properly use the official version of the library and Java knows that it should only serve DiscordSRV the library it ships with:

![DiscordSRV decompiled code showing proper shading with relocation](/images/chatcontrol/ysgDNIB.png)

## The solution is simple

Plugin developers need to configure their favorite tool like Maven or Gradle to **relocate the library** they shade into the plugin jar to be contained in a unique package, ideally prefixed with their own package name.

<div class="solution-links">

* Maven class relocation: [https://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html](https://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html)
* Gradle task relocation: [https://gradleup.com/shadow/configuration/relocation/](https://gradleup.com/shadow/configuration/relocation/)

</div>

<style>
.solution-links {
  background-color: rgba(var(--vp-c-brand-rgb), 0.05);
  border-left: 3px solid var(--vp-c-brand);
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.solution-links a {
  font-weight: 500;
}

/* Dark mode adjustments */
.dark .solution-links {
  background-color: rgba(var(--vp-c-brand-rgb), 0.1);
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
</style> 