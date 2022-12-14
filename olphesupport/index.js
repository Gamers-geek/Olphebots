const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"] })
const fs = require('fs')
const path = require('path')
const { token } = require('./config')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", file))
    client.commands.set(command.name, command)
    //console.log(`Commande chargée : ${command.name ? command.name : "Pas de nom"}`)
}

const eventFiles = fs.readdirSync(path.join(__dirname, "events")).filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(path.join(__dirname, "events", file))
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    } else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
    //console.log(`Event chargé : ${event.name}`)
}

client.login(`ODYxOTY1MjM4NzY1MjIzOTY2.YORdrw.RaaEBM4dCpeEO5IVDqF_adctudQ`)