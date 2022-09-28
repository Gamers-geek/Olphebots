const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`servericon`)
    .setDescription(`Affiche la photo de profil du serveur`),
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const icon = interaction.guild.iconURL({ dynamic: true, size: 4096 })

        if(!icon) return interaction.reply({content: `Le serveur n'a pas de photo de profil !`})

        const embed = new MessageEmbed()
        .setDescription(`**[16px](${interaction.guild.iconURL({dynamic: true, size: 16})})** • **[32px](${interaction.guild.iconURL({dynamic: true, size: 32})})** • **[64px](${interaction.guild.iconURL({dynamic: true, size: 64})})** • **[128px](${interaction.guild.iconURL({dynamic: true, size: 128})})** • **[256px](${interaction.guild.iconURL({dynamic: true, size: 256})})** • **[512px](${interaction.guild.iconURL({dynamic: true, size: 512})})** • **[1024px](${interaction.guild.iconURL({dynamic: true, size: 1024})})** • **[2048px](${interaction.guild.iconURL({dynamic: true, size: 2048})})** • **[4096px](${interaction.guild.iconURL({dynamic: true, size: 4096})})**`)
        .setImage(icon)
        .setColor(embedColor)

        return interaction.reply({ embeds: [embed]})
    }
}