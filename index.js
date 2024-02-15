
console.log("Disboard Autobumper 2024 - Brought to you by Max Fox at https://github.com/pedro-santos21")

require('dotenv').config();
console.log(process.env);

// discord.js-selfbot setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

var token = process.env.TOKEN;

function Bump(channel_id, bump_message) {
	console.log("Bumping...")
}

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login(token);
