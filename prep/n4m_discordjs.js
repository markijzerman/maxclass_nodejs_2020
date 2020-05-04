const Discord = require('discord.js');
const Max = require('max-api');
const client = new Discord.Client();

// get Discord dev token at https://discordapp.com/developers/applications

Max.post('Halloootjesss');

client.on('ready', () => {
	Max.post(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.channel.id === '---CHANNELTOKEN---') {
		if (msg.content === 'ping') {
			msg.reply('pong');
			Max.outlet('ontvangen is ' + msg.content);
		}
	}
});

client.login('---APIKEY---');