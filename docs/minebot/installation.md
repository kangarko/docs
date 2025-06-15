# Installation

A complete guide on how to install MineBot for both beginners and experienced users.

## Video Guide (Deprecated)

Follow along with our step-by-step video tutorial to quickly install and run MineBot:

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/nlC1TCoK3R8" title="MineBot Installation & Run Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 1. Download Bot

<Tabs>
  <TabPanel title="Windows">
    
1. **Download the Files**: Download the bot files from BuiltByBit.
2. **Extract the Files**: Right-click the downloaded ZIP file and select "Extract All...".
3. **Choose Destination**: Select the destination folder and click "Extract".
    
  </TabPanel>
  
  <TabPanel title="macOS">
    
1. **Download the Files**: Download the bot files from BuiltByBit.
2. **Extract the Files**: Double-click the downloaded ZIP file to extract it.
3. **Move Files**: Move the extracted files to your desired location.
    
  </TabPanel>
  
  <TabPanel title="Linux">
    
1. **Download the Files**: Download the bot files from BuiltByBit.
2. **Extract the Files**: Open Terminal and navigate to the directory containing the downloaded ZIP file.
3. **Run Extraction Command**: Use the command `unzip <filename>.zip` to extract the files.
4. **Move Files**: Move the extracted files to your desired location.
    
  </TabPanel>
</Tabs>

## 2. Setup A Discord Application

Create a new bot on Discord's developer portal using the instructions below.

::: danger
Before proceeding, enable Discord Developer Mode by navigating to `Settings -> Advanced -> Developer Mode`.

Anyone with access to this token has **full access to your bot's account**, you should ensure that nobody has access to this token but you. Treat it like a username/password combination, but for bots.
:::

<div class="vp-card-container">
  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">1</div>
      <strong>Create A New Application</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-1.webp" alt="Create Application" class="zoomable-img">
        <figcaption>Head over to <a href="https://discord.com/developers/applications" target="_blank">Discord's Developer Portal</a> and create a new application.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">2</div>
      <strong>Copy Application Id</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-2.webp" alt="General Information Tab" class="zoomable-img">
        <figcaption>In the General Information tab, copy the application ID for the next step.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">3</div>
      <strong>Invite Bot To Server</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-3.webp" alt="Create the Invite Link" class="zoomable-img">
        <figcaption><a href="https://discordapi.com/permissions.html#2147483656" target="_blank">Visit this website</a>, ensure "Administrator" and "Use Application Commands" are checked and paste your Client ID from step 2 into "Client ID". Do not change any other options. Then click the "Link". <br><br>Invite the bot to your server and in the final screen, check all boxes to grant all of the permissions we've selected previously.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">4</div>
      <strong>Adjust Role & Permissions</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-10.webp" alt="Check Permissions" class="zoomable-img">
        <figcaption>Drag the "bot" role to the top (it can be below other administrator roles) and ensure it's got the Administrator permission.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">5</div>
      <strong>Navigate To The Bot Tab</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-4.webp" alt="Bot Tab" class="zoomable-img">
        <figcaption>Access the bot settings in this tab.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">6</div>
      <strong>Create A New Token</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-5.webp" alt="Reset Token" class="zoomable-img">
        <figcaption>Generate a new token for your bot and keep it private.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">7</div>
      <strong>Paste Your Token</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-7.webp" alt="Write Token" class="zoomable-img">
        <figcaption>Write your token to your configuration/settings.yml file.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">8</div>
      <strong>Give Bot Privileged Intents</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-6.webp" alt="Give Intents" class="zoomable-img">
        <figcaption>Adjust 3 Privileged Gateway Intents as per the image above.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">9</div>
      <strong>Copy Guild Id</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-8.webp" alt="Copy ID" class="zoomable-img">
        <figcaption>Copy the Discord server id (guild id) that you plan to use with MineBot.</figcaption>
      </figure>
    </div>
  </div>

  <div class="vp-card">
    <div class="vp-card-title">
      <div class="vp-card-icon">10</div>
      <strong>Paste Guild Id</strong>
    </div>
    <div class="vp-card-content">
      <figure>
        <img src="/images/minebot/image-9.webp" alt="Paste ID" class="zoomable-img">
        <figcaption>Paste the Discord server guild ID that you copied in the same config file where you set the bot token in step 8.</figcaption>
      </figure>
    </div>
  </div>
</div>

## 3. Run The Bot

<div class="connector-setup">
  <div class="connector-header">
    <div class="connector-icon">🔐</div>
    <h3>Generate SSL Certificates</h3>
    <p>Before proceeding with MineBridge installation, you need to run MineBot once to generate necessary SSL certificates.</p>
  </div>

  <div class="connector-steps">
    <div class="connector-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Start MineBot</h4>
        <p>Follow the instructions in the <a href="./running.md">Running Guide</a> to start your bot for the first time.</p>
      </div>
    </div>
    <div class="connector-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Verify Certificate Creation</h4>
        <p>After running, check that the certificate files have been generated in the <code>configuration/certs/</code> folder.</p>
      </div>
    </div>
  </div>
</div>

::: info
SSL certificates enable secure communication between MineBot and MineBridge. They are automatically generated the first time you run the bot, so this step is crucial for security.
:::

## 4. Install MineBridge

<div class="connector-setup">
  <div class="connector-header">
    <div class="connector-icon">🔌</div>
    <h3>Connect Your Bot to Minecraft</h3>
    <p>To integrate MineBot with your Minecraft server, follow these steps:</p>
  </div>

  <div class="connector-steps">
    <div class="connector-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Set server name</h4>
        <p>Create a variable called <code>server-name=SERVER NAME</code> in <code>server.properties</code></p>
      </div>
    </div>
    <div class="connector-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Move the MineBridge jar</h4>
        <p>Copy the <code>MineBridge-X-X.jar</code> file into your Minecraft server's <code>plugins</code> folder.</p>
      </div>
    </div>
    <div class="connector-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>Copy SSL certificate</h4>
        <p>Copy the <code>configuration/certs/X.crt</code> file into your Minecraft server's <code>plugins/MineBridge-X/certs</code> folder.</p>
      </div>
    </div>
    <div class="connector-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>Restart Your Minecraft Server</h4>
        <p>Restart your Minecraft server to load the MineBridge plugin.</p>
      </div>
    </div>
    <div class="connector-step">
      <div class="step-number">5</div>
      <div class="step-content">
        <h4>Configure WebSocket Port</h4>
        <p>Open the file <code>plugins/MineBridge-X/settings.yml</code> on your Minecraft server and set the <code>websocket.port</code> to match the port specified in your MineBot's <code>configuration/settings.yml</code> under <code>server.websocket.port</code>.</p>
        <p>Make sure to edit the <code>websocket.host</code> and <code>websocket.password</code> parameter to match the IP address of your MineBot's <code>server.websocket.host</code> and <code>server.websocket.password</code>.</p>
      </div>
    </div>
  </div>
</div>

::: warning
<code>server-name</code> is not the generic name of your server, it is the name for that server only, for example survival, creative, etc.
:::
::: warning
Ensure the WebSocket port you configured is allowed through your firewall. If you're unsure or using a hosting provider, contact your hosting support to confirm which ports are available for use.
:::

<style>
.vp-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.vp-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  background-color: var(--vp-c-bg-soft);
  transition: box-shadow 0.25s, border-color 0.25s;
}

.vp-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.vp-card-title {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
}

.vp-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: var(--vp-c-brand);
  color: white;
  font-weight: bold;
}

.vp-card-content figure {
  margin: 0;
}

.vp-card-content img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 8px;
}

.vp-card-content figcaption {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

/* Responsive video container */
.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 1.5rem auto;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

/* Make sure aspect ratio is maintained on all screens */
@media screen and (min-width: 1440px) {
  .video-container {
    max-width: 1000px;
  }
}

@media screen and (max-width: 640px) {
  .video-container {
    max-width: 100%;
  }
}

/* MineBridge Setup Styles */
.connector-setup {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--vp-c-divider);
}

.dark .connector-setup {
  background-color: var(--tab-bg-dark);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.connector-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.connector-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.connector-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.connector-header p {
  color: var(--vp-c-text-2);
}

.connector-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.connector-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.step-content p {
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.step-content code {
  background-color: var(--vp-c-bg-alt);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--vp-c-brand);
}

.dark .step-content code {
  background-color: rgba(0, 0, 0, 0.2);
}

/* Add styles for zoomable images */
.zoomable-img {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.zoomable-img:hover {
  transform: scale(1.01);
}
</style>
