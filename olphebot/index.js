const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config');
const { readdirSync } = require('fs');
const path = require('path')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ]
})

client.commands = new Collection();
const commands = []

module.exports.commands = commands
module.exports.client = client

const commandFiles = readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", file));
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
}

const eventFiles = readdirSync(path.join(__dirname, "events")).filter(file => file.endsWith('.js'));
eventFiles.map((value) => require(path.join(__dirname, "events", value)));

client.login(token)