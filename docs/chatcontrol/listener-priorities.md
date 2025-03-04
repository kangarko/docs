# Listener Priorities

::: warning ALWAYS RESTART
⚠️ **You must restart your server (not reload) after changing any listener priority settings!**
:::

## Understanding Bukkit Priorities

Bukkit uses a priority system to determine the order in which plugins process the same event (like a player sending a chat message).

<div class="priority-diagram">
  <div class="priority-wrapper">
    <div class="priority-heading">Plugin Processing Order</div>
    <div class="priority-flow">
      <div class="priority-item lowest">
        <div class="priority-name">LOWEST</div>
        <div class="priority-desc">First</div>
      </div>
      <div class="priority-arrow">→</div>
      <div class="priority-item low">
        <div class="priority-name">LOW</div>
      </div>
      <div class="priority-arrow">→</div>
      <div class="priority-item normal">
        <div class="priority-name">NORMAL</div>
        <div class="priority-desc">Default</div>
      </div>
      <div class="priority-arrow">→</div>
      <div class="priority-item high">
        <div class="priority-name">HIGH</div>
      </div>
      <div class="priority-arrow">→</div>
      <div class="priority-item highest">
        <div class="priority-name">HIGHEST</div>
      </div>
      <div class="priority-arrow">→</div>
      <div class="priority-item monitor">
        <div class="priority-name">MONITOR</div>
        <div class="priority-desc">Last</div>
      </div>
    </div>
  </div>
</div>

### How Priorities Affect Plugin Interaction

Each plugin can:
- **Modify** the event (change message content, recipients, etc.)
- **Cancel** the event (prevent it from continuing)
- **Uncancel** an event (override a previous cancellation)

<div class="example-box">
  <h3>📝 Example Scenario</h3>
  <div class="plugin-interaction-wrapper">
    <div class="plugin-interaction">
      <div class="plugin-card">
        <div class="plugin-priority">LOWEST</div>
        <div class="plugin-name">Protection Plugin</div>
        <div class="plugin-action">Checks if player can build here</div>
        <div class="plugin-result">❌ Cancels block placement</div>
      </div>
      <div class="interaction-arrow">→</div>
      <div class="plugin-card">
        <div class="plugin-priority">NORMAL</div>
        <div class="plugin-name">Sign Plugin</div>
        <div class="plugin-action">Checks if it's a sign</div>
        <div class="plugin-result">✅ Uncancels if it's a sign</div>
      </div>
      <div class="interaction-arrow">→</div>
      <div class="plugin-card">
        <div class="plugin-priority">MONITOR</div>
        <div class="plugin-name">Logging Plugin</div>
        <div class="plugin-action">Records the final result</div>
        <div class="plugin-result">📋 Logs the action</div>
      </div>
    </div>
  </div>
</div>

## ChatControl and Priority Settings

### Why Priority Matters for ChatControl

<div class="important-box">
  <h3>⚠️ Critical Rule</h3>
  <p>As a general rule, <strong>ChatControl needs to process chat FIRST</strong> (at LOWEST priority) to properly filter messages.</p>
  <p>If another plugin processes chat before ChatControl, messages might be sent to other systems (e.g., Discord) even if ChatControl would have blocked them.</p>
</div>

### Modern Minecraft Considerations (1.16+)

In Minecraft 1.16+, there are two different chat events that plugins can use:

<div class="mc-version-box">
  <div class="version-card">
    <h3>Traditional Chat Event</h3>
    <p>Used by older plugins</p>
    <p>Priority example: <code>LOWEST</code></p>
  </div>
  <div class="version-card">
    <h3>Modern Chat Event</h3>
    <p>Used by newer plugins</p>
    <p>Priority example: <code>LOWEST-MODERN</code></p>
  </div>
</div>

::: tip
If you're having issues with a plugin on 1.16+, try both versions (with and without the `-MODERN` suffix) to see which works best with your specific plugin combination.
:::

## Plugin Compatibility Guide

### Common Plugin Settings

<div class="compatibility-table">
  <table>
    <thead>
      <tr>
        <th>Plugin</th>
        <th>Recommended Setting</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Towny / Factions</strong></td>
        <td><code>Chat_Listener_Priority: LOWEST</code></td>
        <td>May need adjustments based on your specific setup</td>
      </tr>
      <tr>
        <td><strong>LiteBans / BanManager</strong></td>
        <td><code>Chat_Listener_Priority: HIGH</code></td>
        <td>Fixes issue with muted players being able to chat</td>
      </tr>
      <tr>
        <td><strong>PlotSquared</strong></td>
        <td><code>Chat_Listener_Priority: LOWEST</code></td>
        <td>For plot-specific chat functionality</td>
      </tr>
      <tr>
        <td><strong>Denizen</strong></td>
        <td><code>Chat_Listener_Priority: HIGH</code></td>
        <td>Allows Denizen to catch chat triggers for scripts</td>
      </tr>
      <tr>
        <td><strong>DiscordSRV</strong></td>
        <td><code>Chat_Listener_Priority: LOWEST</code></td>
        <td>Ensures messages are filtered before being sent to Discord</td>
      </tr>
    </tbody>
  </table>
</div>

## Troubleshooting Decision Tree

Not sure what priority to use? Follow this flowchart:

<div class="decision-tree">
  <div class="decision-node start">
    <div class="node-content">
      Start Here
    </div>
  </div>
  <div class="decision-arrow">↓</div>
  <div class="decision-node">
    <div class="node-content">
      Is ChatControl not filtering some messages?
    </div>
    <div class="decision-choices">
      <div class="choice">
        <div class="choice-label">Yes</div>
        <div class="choice-arrow">→</div>
        <div class="choice-result">Try <code>LOWEST</code> or <code>LOWEST-MODERN</code></div>
      </div>
    </div>
  </div>
  <div class="decision-arrow">↓</div>
  <div class="decision-node">
    <div class="node-content">
      Can muted players still chat?
    </div>
    <div class="decision-choices">
      <div class="choice">
        <div class="choice-label">Yes</div>
        <div class="choice-arrow">→</div>
        <div class="choice-result">Try <code>Chat_Listener_Priority: HIGH</code></div>
      </div>
    </div>
  </div>
  <div class="decision-arrow">↓</div>
  <div class="decision-node">
    <div class="node-content">
      Using chat-dependent plugins<br>(Towny, Factions, etc.)?
    </div>
    <div class="decision-choices">
      <div class="choice">
        <div class="choice-label">Yes</div>
        <div class="choice-arrow">→</div>
        <div class="choice-result">Start with <code>LOWEST</code>, then try others</div>
      </div>
    </div>
  </div>
  <div class="decision-arrow">↓</div>
  <div class="decision-node">
    <div class="node-content">
      Still having issues?
    </div>
    <div class="decision-choices">
      <div class="choice">
        <div class="choice-label">Yes</div>
        <div class="choice-arrow">→</div>
        <div class="choice-result">Try each priority systematically,<br>restarting after each change</div>
      </div>
    </div>
  </div>
</div>

## FAQ

<div class="faq-section">
  <div class="faq-item">
    <div class="faq-question">Do I need to restart after changing priorities?</div>
    <div class="faq-answer">
      <strong>Yes!</strong> Always restart your server (not reload) after changing any priority settings.
    </div>
  </div>
  <div class="faq-item">
    <div class="faq-question">What does the -MODERN suffix do?</div>
    <div class="faq-answer">
      It tells ChatControl to listen to the newer chat event introduced in Minecraft 1.16+. Some plugins use the old event, some use the new one.
    </div>
  </div>
  <div class="faq-item">
    <div class="faq-question">How do I know which priority is right for my server?</div>
    <div class="faq-answer">
      There's no one-size-fits-all setting. You'll need to test different priorities based on your specific plugin combination and observe the results.
    </div>
  </div>
</div>

<style>
/* Base styles */
code {
  font-family: monospace;
  background-color: var(--vp-c-bg-soft);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

.dark code {
  background-color: rgba(255, 255, 255, 0.1);
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.setting-card {
  background-color: var(--vp-c-bg-mute);
  border-radius: 6px;
  padding: 15px;
  border: 1px solid var(--vp-c-border);
}

.setting-card h3 {
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 10px;
}

.setting-card pre {
  margin: 0;
  background-color: var(--vp-c-bg-alt);
  padding: 8px 12px;
  border-radius: 4px;
  overflow: auto;
  font-size: 0.9em;
}

.important-note {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: rgba(var(--vp-c-warning-rgb), 0.1);
  border-left: 3px solid var(--vp-c-warning);
  border-radius: 4px;
}

/* Priority Diagram */
.priority-diagram {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.priority-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  position: relative;
}

.priority-wrapper::-webkit-scrollbar {
  height: 6px;
}

.priority-wrapper::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
}

.priority-wrapper::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
  border-radius: 10px;
}

.priority-heading {
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.1em;
}

.priority-flow {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  min-width: min-content;
  padding: 15px 20px;
  margin: 0 auto;
}

.priority-item {
  flex: 0 0 auto;
  padding: 10px 15px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.priority-name {
  font-weight: bold;
  font-size: 0.83em;
}

.priority-desc {
  font-size: 0.8em;
  opacity: 0.9;
}

.lowest {
  background-color: #4caf50;
  color: white;
}

.low {
  background-color: #8bc34a;
  color: white;
}

.normal {
  background-color: #ffc107;
  color: #333;
}

.high {
  background-color: #ff9800;
  color: white;
}

.highest {
  background-color: #f44336;
  color: white;
}

.monitor {
  background-color: #9c27b0;
  color: white;
}

.priority-arrow {
  color: var(--vp-c-text-2);
  font-weight: bold;
}

/* Example Box */
.example-box {
  margin: 25px 0;
}

.example-box h3 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;
}

.plugin-interaction-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  position: relative;
  /* Add subtle fade on edges to indicate scrollable content */
  background: linear-gradient(to right, 
    var(--vp-c-bg-soft) 0%, 
    transparent 2%, 
    transparent 98%, 
    var(--vp-c-bg-soft) 100%
  );
}

.plugin-interaction-wrapper::-webkit-scrollbar {
  height: 6px;
}

.plugin-interaction-wrapper::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
}

.plugin-interaction-wrapper::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
  border-radius: 10px;
}

.plugin-interaction {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  min-width: min-content;
  margin: 0 auto;
}

.plugin-card {
  flex: 0 0 auto;
  min-width: 200px;
  max-width: 250px;
  background-color: var(--vp-c-bg-mute);
  border-radius: 6px;
  padding: 15px;
  border: 1px solid var(--vp-c-border);
  text-align: center;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.plugin-priority {
  display: inline-block;
  padding: 3px 8px;
  font-size: 0.8em;
  border-radius: 4px;
  margin-bottom: 8px;
  font-weight: bold;
}

.plugin-card:nth-child(1) .plugin-priority {
  background-color: #4caf50;
  color: white;
}

.plugin-card:nth-child(3) .plugin-priority {
  background-color: #ffc107;
  color: #333;
}

.plugin-card:nth-child(5) .plugin-priority {
  background-color: #9c27b0;
  color: white;
}

.plugin-name {
  font-weight: bold;
  margin-bottom: 8px;
}

.plugin-action {
  font-size: 0.9em;
  margin-bottom: 8px;
}

.plugin-result {
  font-size: 0.9em;
  font-weight: bold;
}

.interaction-arrow {
  color: var(--vp-c-text-2);
  font-size: 1.5em;
  font-weight: bold;
}

/* Important Box */
.important-box {
  background-color: rgba(var(--vp-c-danger-rgb), 0.1);
  border-radius: 8px;
  margin: 25px 0;
  padding: 20px;
  border-left: 5px solid var(--vp-c-danger);
}

.important-box h3 {
  margin-top: 0;
  color: var(--vp-c-danger);
}

.important-box p:last-child {
  margin-bottom: 0;
}

/* MC Version Box */
.mc-version-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 25px 0;
}

.version-card {
  flex: 1;
  min-width: 200px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--vp-c-border);
}

.version-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.version-card p:last-child {
  margin-bottom: 0;
}

/* Compatibility Table */
.compatibility-table {
  margin: 25px 0;
}

.compatibility-table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.compatibility-table th {
  background-color: var(--vp-c-brand);
  color: white;
  text-align: left;
  padding: 12px 15px;
  font-weight: 600;
}

.compatibility-table td {
  padding: 10px 15px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.compatibility-table tr:last-child td {
  border-bottom: none;
}

.compatibility-table tr:nth-child(even) {
  background-color: var(--vp-c-bg-soft);
}

/* Decision Tree */
.decision-tree {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.decision-node {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 15px 20px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  border: 1px solid var(--vp-c-border);
}

.decision-node.start {
  background-color: var(--vp-c-brand);
  color: white;
  font-weight: bold;
}

.node-content {
  margin-bottom: 10px;
  font-weight: bold;
}

.decision-choices {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.choice {
  display: flex;
  align-items: center;
  gap: 10px;
}

.choice-label {
  background-color: var(--vp-c-bg-mute);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 0.9em;
}

.choice-arrow {
  color: var(--vp-c-text-2);
}

.choice-result {
  background-color: var(--vp-c-bg-mute);
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 0.9em;
}

.decision-arrow {
  color: var(--vp-c-text-2);
  font-weight: bold;
}

/* FAQ Section */
.faq-section {
  margin: 25px 0;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  font-weight: bold;
  margin-bottom: 10px;
  background-color: var(--vp-c-bg-soft);
  padding: 10px 15px;
  border-radius: 6px;
  position: relative;
  padding-left: 35px;
}

.faq-question:before {
  content: "Q:";
  position: absolute;
  left: 10px;
  color: var(--vp-c-brand);
}

.faq-answer {
  padding: 0 15px 0 35px;
  position: relative;
}

.faq-answer:before {
  content: "A:";
  position: absolute;
  left: 10px;
  color: var(--vp-c-danger);
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .priority-flow {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .priority-arrow {
    transform: none;
  }
  
  .plugin-interaction {
    flex-direction: column;
  }
  
  .interaction-arrow {
    transform: none;
  }
  
  .decision-node {
    width: 95%;
  }
}

/* Add scroll indicator on smaller screens */
@media (max-width: 960px) {
  .priority-diagram::after {
    content: '← Scroll →';
    display: block;
    text-align: center;
    font-size: 0.8em;
    color: var(--vp-c-text-2);
    margin-top: 5px;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  .example-box::after {
    content: '← Scroll →';
    display: block;
    text-align: center;
    font-size: 0.8em;
    color: var(--vp-c-text-2);
    margin-top: 5px;
    animation: pulse 2s infinite;
  }
}
</style>