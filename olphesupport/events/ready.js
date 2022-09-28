const { Client } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} client 
     */
    async execute(client) {
        client.user.setStatus("dnd")
        client.user.setActivity({ name: 'vos demandes 👀', type: 'WATCHING', url: 'https://www.twitch.tv/olphedia' })
        console.log(`${client.user.tag} is ready!`);
    }
}