const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`banner`)
    .setDescription(`Affiche la bannière du serveur`),
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const banner = interaction.guild.bannerURL({dynamic: true, size: 1024})

        if(!banner) return interaction.reply({ content: `Ce serveur n'a pas de bannière !` })

        const embed = new MessageEmbed()
        .setDescription(`**[16px](${interaction.guild.bannerURL({dynamic: true, size: 16})})** • **[32px](${interaction.guild.bannerURL({dynamic: true, size: 32})})** • **[64px](${interaction.guild.bannerURL({dynamic: true, size: 64})})** • **[128px](${interaction.guild.bannerURL({dynamic: true, size: 128})})** • **[256px](${interaction.guild.bannerURL({dynamic: true, size: 256})})** • **[512px](${interaction.guild.bannerURL({dynamic: true, size: 512})})** • **[1024px](${interaction.guild.bannerURL({dynamic: true, size: 1024})})** • **[2048px](${interaction.guild.bannerURL({dynamic: true, size: 2048})})** • **[4096px](${interaction.guild.bannerURL({dynamic: true, size: 4096})})**`)
        .setImage(banner)
        .setColor(embedColor)

        interaction.reply({ embeds: [embed] })
    }
}
