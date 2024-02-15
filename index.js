
console.log("Disboard Autobumper 2024 - Brought to you by Max Fox at https://github.com/pedro-santos21")

require('dotenv').config();

// discord.js-selfbot setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

var token = process.env.TOKEN;
var running = true;
var cooldown=7200*1000; // 2 hours (in ms)
var inCooldown = false;
var bumpsInSession = 0;

// timer
const timer = ms => new Promise(res => setTimeout(res, ms))

async function Bump(channel_id, bump_message) {
	
	if (inCooldown) {
		// console.log("In cooldown") // (for testing if cooldown is working)
		return false;
	}

	let channel = client.channels.cache.get(channel_id);
	
	if (channel) {
		console.log(`Channel found: ${channel.name}`);
		channel.sendSlash('302050872383242240', 'bump');
	} else {
		throw new Error('Invalid channel ID - Channel was not found.');
	}
	
	bumpsInSession++;
	let currentTime = new Date();
	console.log(`${currentTime} - Bump! (${bumpsInSession})`)
	
	inCooldown = true;
	await timer(cooldown);
	inCooldown = false;
}

client.on('ready', async () => {
  	console.log(`${client.user.username} is ready!`);
	
	while(running) {
		(async () => {
			Bump(process.env.CHANNEL_ID, "/bump");
		})();
	}
})

client.login(token);
