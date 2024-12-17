require('dotenv').config(); // Load environment variables
const { Client, Intents } = require('discord.js');
const express = require('express');  // Import express

// Set up the Express app
const app = express();

// Set up the bot client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = process.env.TOKEN; // Bot token from .env
const PREFIX = process.env.PREFIX || "!";

// Set up a simple route for the web service to avoid port binding errors
app.get('/', (req, res) => {
    res.send('Bot is running!');
});

// Start the Express server on the port provided by Render (or default to 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Web service is running on port ${port}`);
});

// Bot ready event
client.once('ready', () => {
    console.log(`🤖 Bot is online as ${client.user.tag}`);
});

// Bot message event
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore bot messages
    if (!message.content.startsWith(PREFIX)) return;

    const command = message.content.slice(PREFIX.length).trim().toLowerCase();

    if (command === 'ping') {
        message.reply('🏓 Pong!');
    } else if (command === 'hello') {
        message.reply('👋 Hello there!');
    } else {
        message.reply('⚠️ Unknown command!');
    }
});

// Log in to Discord
client.login(TOKEN);
