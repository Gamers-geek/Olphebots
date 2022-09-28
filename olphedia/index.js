const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token } = require(`./config`)
const nekos = require('nekos.life');
const djs = require('@gamers-geek/djs-embed-builder');
const path = require('path');

// On créé une nouvelle instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_PRESENCES],
});
module.exports.client = client;

const commands = [];
const olphediaCommands = [];
module.exports.commands = commands;
module.exports.olphediaCommands = olphediaCommands;

// Création d'une collection pour les commandes du client.
client.commands = new Collection();
client.nekos = new nekos();
client.embed = new djs(client).createEmbed
module.exports.nekos = client.nekos;

// Command handler
const commandFolders = fs.readdirSync(path.join(__dirname, "commands"));
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(path.join(__dirname, "commands", folder)).filter(file => file.endsWith('.js'))
	for (const file of commandFiles) {
		const command = require(path.join(__dirname, "commands", folder, file))
		commands.push(command.data.toJSON());
		client.commands.set(command.data.name, command)
	}
}

// Event handler
const eventFiles = fs.readdirSync(path.join(__dirname, "events")).filter(file => file.endsWith('.js'));
eventFiles.map((value) => require(path.join(__dirname, "events", value)));

client.login(token);
