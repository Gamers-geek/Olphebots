const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { embedColor } = require('../../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`avatar`)
        .setDescription(`Affiche l'avatar d'un utilisateur`)
        .addUserOption(option => {
            option.setName(`utilisateur`)
                .setDescription(`L'utilisateur dont vous souhaitez obtenir l'avatar`)
                .setRequired(false);
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const user = interaction.options.getUser('utilisateur') || interaction.user;

        const embed = new MessageEmbed()
            .setAuthor({ name: user.tag })
            .setDescription(`[Avatar](${user.displayAvatarURL({ format: 'png', size: 4096 })})`)
            .setImage(user.displayAvatarURL({ format: 'png', size: 4096 }))
            .setColor(embedColor)

        interaction.reply({ embeds: [embed] });
    }
}