# Compatibility Guide

::: danger Check Plugin Documentation
This page contains general compatibility information that applies to most MineAcademy plugins. However, individual plugins may have specific requirements or exceptions.

**Always check the dedicated compatibility page in each plugin's documentation section for the most accurate information.**
:::

Additional compatibility guides:

- [ChatControl Compatibility](../chatcontrol/compatibility.md)
- [Boss Compatibility](../boss/compatibility.md)
- [CoreArena Compatibility](../corearena/compatibility.md)
- [Protect Compatibility](../protect/compatibility.md)
- [Winter Compatibility](../winter/compatibility.md)

## Overview

All MineAcademy plugins are built on our [Foundation](https://github.com/kangarko/foundation) framework, providing consistent compatibility across our product line. 

This guide covers general requirements and compatibility information.

## System Requirements

### Java Version

::: info Minimum Java Version
  Java 8 or greater is required
:::

### Remote Database

For plugins supporting custom database connections:

::: warning Database Character Set Requirement
Your database must support the "utf8mb4" charset (use utf8mb4_unicode_520_ci) to properly handle non-English item names and special characters.
:::

Supported database types:
- SQLite (default, no setup required)
- MySQL
- MariaDB
- Custom (you will need to install the driver yourself and configure the Line option in the plugin which supports database.yml file)

---

## Minecraft Server Compatibility

### Server Types

<table>
  <thead>
    <tr>
      <th>Server Software</th>
      <th>Status</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Paper</strong></td>
      <td>✅</td>
      <td><strong>Officially tested and supported.</strong> Recommended for best performance and compatibility.</td>
    </tr>
    <tr>
      <td><strong>Purpur</strong></td>
      <td>✅</td>
      <td>Fully supported.</td>
    </tr>
    <tr>
      <td><strong>Folia</strong></td>
      <td>⚠️</td>
      <td>Check the BuiltByBit compatibility table for your specific plugin.</td>
    </tr>
    <tr>
      <td><strong>Spigot Forks</strong><br>(UniverseSpigot, PandaSpigot, etc.)</td>
      <td>⚠️</td>
      <td>Should work, but not officially tested. We access minimal NMS and have protections to prevent data loss. When experiencing issues, <strong>always test on Paper first</strong> before opening a support ticket.</td>
    </tr>
    <tr>
      <td><strong>CraftBukkit</strong></td>
      <td>⚠️</td>
      <td>Supported for Minecraft versions below 1.16. For newer versions, use Paper.</td>
    </tr>
    <tr>
      <td><strong>Thermos/Cauldron 1.7.10</strong></td>
      <td>❌</td>
      <td>No longer supported.</td>
    </tr>
  </tbody>
</table>

### Minecraft Versions

::: warning Plugin Dependencies
Many issues are caused by incompatible plugin dependencies rather than our plugins themselves. Always ensure dependencies like ProtocolLib are up-to-date.
:::

<table>
  <thead>
    <tr>
      <th>Minecraft Version</th>
      <th>Status</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1.21.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.20.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.19.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.18.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.17.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.16.x</strong></td>
      <td>⚠️</td>
      <td>Possibly unsupported due to a class path conflict (<a href="https://github.com/kangarko/ChatControl/issues/3048">Issue #3048</a>). Contact us for refund if already purchased</td>
    </tr>
    <tr>
      <td><strong>1.15.x</strong></td>
      <td>⚠️</td>
      <td>Possibly unsupported due to a class path conflict (<a href="https://github.com/kangarko/ChatControl/issues/3048">Issue #3048</a>). Contact us for refund if already purchased</td>
    </tr>
    <tr>
      <td><strong>1.14.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.13.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.12.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.11.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.10.x</strong></td>
      <td>✅</td>
      <td>Fully supported</td>
    </tr>
    <tr>
      <td><strong>1.9.x</strong></td>
      <td>✅</td>
      <td>Supported with limitations. Book-related events don't work due to missing API</td>
    </tr>
    <tr>
      <td><strong>1.8.x</strong></td>
      <td>✅</td>
      <td>Supported with limitations (see 1.9.x)</td>
    </tr>
    <tr>
      <td><strong>1.7.10 and older</strong></td>
      <td>❌</td>
      <td>No longer supported</td>
    </tr>
  </tbody>
</table>
