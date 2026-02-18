# Compatibility

On this page, you'll learn the minimum requirements and supported third party plugins for Protect to run.

::: danger
Please read the [General Compatibility Guide](../general/compatibility.md) for general compatibility information and requirements that apply to Protect.
:::

::: tip Custom Item/Enchants Plugins

* 1.16+: Protect ignores items containing any custom persistent metadata keys, which are typically only added by plugins. Ask your developer to add a persistent metadata tag to the custom item. This can be disabled in Ignore.Custom_Persistent_Tags key in settings.yml.
* 1.14+: Protect ignores items having custom model data. This can be disabled in Ignore.Custom_Model_Data key in settings.yml.
* 1.8.8+: You can also use "ignore tag" operator in your checks which will ignore items containing the given custom NBT tag at the root level. Developers can use open source libraries such as NBT-API to add a custom persistent tag to an ItemStack.
* Additionally, we routinely test Protect with popular plugins such as ExcellentEnchants to ensure they are compatible. In general, if a custom enchants plugin uses proper API methods, Bukkit will recognize the enchant correctly and we won't confiscate it.
* However, we are happy to work with you if Protect confiscates a custom item and navigate you on adding an exclusion, just open a ticket! Please make a backup before installing Protect if you have a heavily modified server.

:::

## Dependencies

* To fine a player, you need **[Vault](https://www.spigotmc.org/resources/vault.34315/)** and an economy plugin.
* For network features, install [ChatControl](https://builtbybit.com/resources/chatcontrol-red-format-filter-chat.18217/). Then, if you're on BungeeCord, install [BungeeControl](https://builtbybit.com/resources/bungeecontrol-red-cross-network-chat.24248/) or [VelocityControl](https://builtbybit.com/resources/velocitycontrol-cross-network-chat.43226/) for Velocity. Network commands (`then bungeeconsole`) are temporarily disabled in the current version.

## Supported Plugins

* BlueShop
* ChestShop
* ExcellentShop
* ShopGUI
* Shop
* SignShop
* EconomyShopGUI
* QuickShop
* **Per-world inventory plugins**: Compatible, because we wait until they have refreshed the player's inventory before scanning it.
* **Custom GUI plugins**: Compatible, because we ignore non-vanilla inventory titles by default and lets you ignore container types or custom inventories by name manually too.