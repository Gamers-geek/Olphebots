const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`splash`)
    .setDescription(`Affiche l'arrière plan d'invitation du serveur`),
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const banner = interaction.guild.splashURL({ dynamic: true, size: 4096 })

        if(!banner) return interaction.reply({content: `Ce serveur n'a pas d'arrière plan d'invitation !`})

        const embed = new MessageEmbed()
        .setDescription(`**[16px](${interaction.guild.splashURL({dynamic: true, size: 16})})** • **[32px](${interaction.guild.splashURL({dynamic: true, size: 32})})** • **[64px](${interaction.guild.splashURL({dynamic: true, size: 64})})** • **[128px](${interaction.guild.splashURL({dynamic: true, size: 128})})** • **[256px](${interaction.guild.splashURL({dynamic: true, size: 256})})** • **[512px](${interaction.guild.splashURL({dynamic: true, size: 512})})** • **[1024px](${interaction.guild.splashURL({dynamic: true, size: 1024})})** • **[2048px](${interaction.guild.splashURL({dynamic: true, size: 2048})})** • **[4096px](${interaction.guild.splashURL({dynamic: true, size: 4096})})**`)
        .setImage(banner)
        .setColor(embedColor)

        return interaction.reply({ embeds: [embed] })
    }
}