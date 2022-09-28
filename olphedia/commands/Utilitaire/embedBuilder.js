const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`embed-builder`)
        .setDescription(`Permet de concevoir un embed`),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.reply({ content: `Vous n'avez pas la permission d'utiliser cette commande`, ephemeral: true })

        client.embed(interaction)
    }
}