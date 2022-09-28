const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`say`)
        .setDescription(`Permet d'envoyer un message avec le bot`)
        .addStringOption(option => {
            option.setName(`message`)
                .setDescription(`Le message à envoyer`)
                .setRequired(true)
            return option;
        }),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (interaction.member.permissions.has("MANAGE_MESSAGES")) {
            const message = interaction.options.getString(`message`)
            interaction.channel.send({ content: message, allowedMentions: false })
            interaction.reply({ content: `Message envoyé !`, ephemeral: true })
        } else {
            interaction.reply({ content: `Vous n'avez pas les permissions pour utiliser cette commande`, allowedMentions: false, ephemeral: true })
        }
    }
}