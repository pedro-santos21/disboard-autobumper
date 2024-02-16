
console.log("Disboard Autobumper 2024 - Brought to you by Max Fox at https://github.com/pedro-santos21/disboard-autobump-2024")

// imports
require('dotenv').config();
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')

// discord.js-selfbot setup
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

var token = process.env.TOKEN;
var bot_id = '302050872383242240'; // Disboard's ID
var bumpsInSession = 0;

function Bump(channel_id) {

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
}

// setup toad-scheduler
const scheduler = new ToadScheduler()
const task = new Task('autobump', () => { Bump(process.env.CHANNEL_ID); })
const job = new SimpleIntervalJob({ hours: 2, minutes:2 }, task) // create job to bump every 2 hrs and 2 min

client.on('ready', async () => {
	// This executes when the Discord selfbot client is connected.
	
  	console.log(`${client.user.username} is ready!`);
	
	// bump once...
	Bump(process.env.CHANNEL_ID);
	// ...then add bump job to schedule
	scheduler.addSimpleIntervalJob(job);
})

client.login(token);
