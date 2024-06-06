const {
    Client,
    GatewayIntentBits,
    Partials,
} = require('discord.js');
require('dotenv').config();

const channelIds = ['CHANNEL_ID', 'CHANNEL_ID', 'CHANNEL_ID']; // which channels you want to log

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)]
})

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot || !channelIds.includes(message.channel.id)) return;

    const logmsg = `[${message.channel.name}] ${message.author.username}: ${message.content}\n`;

    console.log(logmsg)
});

client.login(process.env.token);