# Performance

ChatControl is an extremely optimized plugin, if you understand how it works and configure it with respect to your hardware and player base.

::: tip TL;DR - Quick Performance Tips
* Set **Rules.Case_Insensitive** to false in settings.yml
* Disable **Private_Messages.Toasts** to eliminate disk operations
* Disable **ProtocolLib.Enabled** if you don't need the [X] message removal feature
* Review your regular expressions and JavaScript variables for efficiency
* Keep your hardware in mind - more rules and conditions need more processing power
:::

## Understanding Performance Impact

The magic lays in the word "if". For every chat message, ChatControl performs several operations:

* Compiles each format part
* Adds gradients if used
* Executes JavaScript for format conditions
* Replaces variables, including JavaScript ones
* Checks each word against all rules
* Logs the message
* Sends it to spies (where many of these operations apply again)

**All of these operations can be configured or disabled completely based on your needs.**

### Key Performance Factors

The following plugin components have the most significant impact on performance:

| Component | Performance Impact |
|-----------|-------------------|
| **Rules** (rules/ folder) | Rule quantity, complexity of conditions, and regex patterns |
| **Formats** (formats/ folder) | Format options, especially JavaScript conditions |
| **Messages** (messages/ folder) | Message quantity and conditional logic |
| **Variables** (variables/ folder) | Variable quantity and complexity of conditions |

**Important**: The plugin's performance is approximately 80% dependent on your configuration. Claiming ChatControl has poor performance while running hundreds of inefficient regex patterns and complex JavaScript conditions on modest hardware doesn't represent the plugin's true capability.

## Optimizing Performance

### Configuration Recommendations

Here are specific settings you can adjust in your `settings.yml` to improve ChatControl's performance:

::: info Performance Configuration
1. **Rules Section**
   * Set `Rules.Case_Insensitive` to `false` to disable case-insensitive message evaluation
   * Minimize complex regex patterns

2. **Messages Section**
   * Set `Private_Messages.Toasts` to `false` to eliminate disk operations for advancement popups

3. **ProtocolLib Section** 
   * Consider setting `ProtocolLib.Enabled` to `false` if you don't need the [X] message removal feature
   * This eliminates message decoding/encoding operations that can be costly on busy servers

4. **General Optimization**
   * Review the Performance section and disable features you don't need
   * Use simpler formats with fewer conditional parts
   * Limit JavaScript usage when possible
:::

### ProtocolLib Considerations

When `ProtocolLib.Enabled` is set to `true`, each message must be decoded and saved. This process:

* Relies on ProtocolLib APIs that call NMS and Adventure methods
* Supports the [X] message removal feature
* Can significantly impact performance on servers with heavy chat load
* Is not optimizable by ChatControl as it depends on external libraries

### Optimizing Rules

The efficiency of regular expressions directly impacts performance:

1. **Rule Complexity**: Larger, more complex regular expressions require more processing cycles
2. **Testing Tools**: Use [regex101.com](https://regex101.com) to test expression efficiency
3. <u>**Correct Flags**: When testing, enable "insensitive" and "unicode" flags for accurate results</u>

### JavaScript Variables

JavaScript variables can significantly impact performance because:

* Each JavaScript execution requires compilation and interpretation
* Complex scripts take longer to process
* There's limited opportunity for caching due to dynamic nature

::: warning JavaScript Impact
If performance is critical for your server, consider limiting the use of JavaScript variables or optimize your scripts for maximum efficiency.
:::

## Troubleshooting Performance Issues

If you're experiencing performance problems despite optimization:

1. Install the [Spark profiler](https://github.com/lucko/spark)
2. Run your server under normal conditions for at least 30 minutes (2+ hours for smaller servers)
3. Generate a full report
4. Open a new issue ticket on our GitHub with the report attached

This will help us identify specific bottlenecks and provide targeted optimization advice.

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th {
  background-color: var(--vp-c-bg-soft);
  font-weight: bold;
  text-align: left;
  padding: 10px;
}

td {
  border-top: 1px solid var(--vp-c-divider);
  padding: 10px;
}

.dark th {
  background-color: var(--vp-c-bg-soft-dark);
}
</style>