require('dotenv').config(); // Load environment variables
const { Client, Intents } = require('discord.js');

// Set up the bot client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = process.env.TOKEN; // Bot token from .env
const PREFIX = process.env.PREFIX || "!";

client.once('ready', () => {
    console.log(`🤖 Bot is online as ${client.user.tag}`);
});

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

client.login(TOKEN);
