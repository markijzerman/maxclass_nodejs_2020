const Max = require("max-api");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	// post iets naar Max
	Max.post("ONLINE GEKOMEN " + client.user.tag);

	// post iets naar Discord wanneer online
	client.channels.cache.get('----CHANNELKEY----').send('Hallo ik ben nu online!')

	// stuur iets naar Discord wanneer er een message binnenkomt met "bericht X"
	Max.addHandler('bericht', (val) => {
		client.channels.cache.get('----CHANNELKEY----').send("er werd " + val + " verstuurd vanuit Max")
	});
	
});

client.on('message', msg => {

	// restrict bot to specifiek kanaal
	if (msg.channel.id === "----CHANNELKEY----") {

		// reply op hallo met haihai
		if (msg.content === "hallo") {
			msg.reply("haihai");
		}

		// alle messages naar Max
		newMessage = msg.content;
		Max.outlet(newMessage);
	}
});

client.login('----APIKEY----');

