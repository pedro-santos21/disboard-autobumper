
console.log("Disboard Autobumper 2024 - Brought to you by Max Fox at https://github.com/pedro-santos21")

require('dotenv').config();

// discord.js-selfbot setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

var token = process.env.TOKEN;
var bot_id = '302050872383242240';
var running = true;
var cooldown=7200*1000; // 2 hours (in ms)
var inCooldown = false;
var bumpsInSession = 0;

// timer
const timer = ms => new Promise(res => setTimeout(res, ms))

// random number between x and y
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Bump(channel_id) {
	
	if (inCooldown) {
		// console.log("In cooldown") // (for testing if cooldown is working)
		return false;
	}

	let channel = client.channels.cache.get(channel_id);
	
	if (channel) {
		console.log(`Channel found: ${channel.name}`);
		channel.sendSlash(bot_id, 'bump');
	} else {
		throw new Error('Invalid channel ID - Channel was not found.');
	}
	
	bumpsInSession++;
	let currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
	console.log(`${currentTime} - Bump! (${bumpsInSession})`)
	
	cooldown = randomIntFromInterval(5401, 7201);

}

client.on('ready', async () => {
  	console.log(`${client.user.username} is ready!`);
	
	Bump(process.env.CHANNEL_ID);
})

client.login(token);
