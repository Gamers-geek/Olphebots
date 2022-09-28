const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents, Collection } = require("discord.js");
const dotenv = require("dotenv").config();
const path = require("path");

// Create a new client instance
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_WEBHOOKS,
	],
});

module.exports.client = client;

const TEST_GUILD_ID = null;

const commands = [];

// Creating a collection for commands in client
client.commands = new Collection();

const commandFiles = fs
	.readdirSync(path.join(__dirname, "commands"))
	.filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(path.join(__dirname, "commands", file));
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(client, interaction);
	} catch (error) {
		if (error) console.error(error);
		await interaction.reply({
			content: "Il y a eu une erreur durant l'exécution de la commande.",
			ephemeral: true,
		});
	}
});

client.once("ready", async () => {
	console.log(`Logged in as ${client.user.tag}!`);
	// Registering the commands in the client
	await client.application.commands.set(commands);
	client.user.setActivity(`faire des partenariats`);
});
client.login(process.env.OLPHEPARTNER_TOKEN);
