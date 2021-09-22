const { Client, Intents } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

if (config.token == 'YOUR_BOT_TOKEN') return console.log('You Haven\'t changed your bot Token in config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

module.exports = client;

client.login(config.token);