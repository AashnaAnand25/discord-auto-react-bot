require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.channel.id === process.env.CHANNEL_ID && 
!message.author.bot) {
    message.react('👍'); // Thumbs up
    message.react('➖'); // Minus
    message.react('👎'); // Thumbs down
  }
});

client.login(process.env.TOKEN);
