# Performance

ChatControl is highly optimized — if you configure it with respect to your hardware and player base.

::: tip TL;DR
* Set `Rules.Case_Insensitive` to false in settings.yml
* Set `Private_Messages.Toasts` to false to eliminate disk operations
* Set `ProtocolLib.Enabled` to false if you don't need the [X] message removal feature
* Review your regular expressions and JavaScript variables for efficiency
:::

## Understanding Performance Impact

For every chat message, ChatControl:

* Compiles each format part and adds gradients
* Executes JavaScript for format conditions
* Replaces variables (including JavaScript ones)
* Checks each word against all rules
* Logs the message and sends it to spies

**All of these operations can be configured or disabled.**

### Key Performance Factors

| Component | Performance Impact |
|-----------|-------------------|
| **Rules** (rules/ folder) | Rule quantity, complexity of conditions, and regex patterns |
| **Formats** (formats/ folder) | Format options, especially JavaScript conditions |
| **Messages** (messages/ folder) | Message quantity and conditional logic |
| **Variables** (variables/ folder) | Variable quantity and complexity of conditions |

The plugin's performance is ~80% dependent on your configuration.

## Optimizing Performance

### Rules

1. Larger, more complex regular expressions require more processing cycles
2. Use [regex101.com](https://regex101.com) to test expression efficiency
3. <u>When testing, enable "insensitive" and "unicode" flags for accurate results</u>

### JavaScript Variables

Each JavaScript execution requires compilation and interpretation with limited caching. Limit JavaScript variables on performance-critical servers.

## Troubleshooting Performance Issues

1. Install the [Spark profiler](https://github.com/lucko/spark)
2. Run your server under normal conditions for at least 30 minutes (2+ hours for smaller servers)
3. Generate a full report and open a GitHub issue with the report attached

## Database Performance

If you experience lag related to database operations:

1. **Use MySQL over SQLite** for servers with 50+ players. SQLite uses file-level locking which blocks concurrent reads/writes.
2. **Keep your database server close** — ideally on the same machine or within the same datacenter. High latency to MySQL causes delays on player joins, chat messages, and data saves.
3. **Increase connection pool size** if you see "connection timeout" errors in console. Check database.yml for pool settings.
4. **Prune old data** — large log tables slow down queries. ChatControl automatically removes old data but you can adjust the retention period.
5. **Lag on player join** is often caused by loading player data (nicks, channels, warning points, toggle states) from the database. Ensure your database has proper indexes (ChatControl creates these automatically).

