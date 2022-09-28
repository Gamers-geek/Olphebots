const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`serverinfo`)
        .setDescription(`Affiche des informations à propos du serveur`),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const embed = new MessageEmbed()
            .setTimestamp()
            .setTitle(`${interaction.guild.name}`)
            .setColor(embedColor)
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addField(`🆔 ID du serveur :`, interaction.guild.id, true)
            .addField(`👑 Créateur :`, `<@${interaction.guild.ownerId}>`, true)
            .addField(`👥 Nombre de membres :`, interaction.guild.members.cache.size.toString(), true)
            .addField(`🤖 Nombre de bots :`, interaction.guild.members.cache.filter(u => u.user.bot).size.toString(), true)
            .addField(`🚶 Membres non bot :`, interaction.guild.members.cache.filter(member => !member.user.bot).size.toString(), true)
            .addField(`😗 Emojis :`, interaction.guild.emojis.cache.size.toString(), true)
            .addField(`👻 Emojis animés :`, interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(), true)
            .addField(`💬 Nombre de salons :`, interaction.guild.channels.cache.size.toString(), true)
            .addField(`👔 Nombre de rôles :`, interaction.guild.roles.cache.size.toString(), true)
            .addField(`⏲ Date de création :`, `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}>`, true)
            .setAuthor({ name: `${interaction.guild.name}` })
        if (interaction.guild.banner) embed.setImage(interaction.guild.bannerURL({ format: `png` }))
        if (interaction.guild.vanityURLCode) embed.addField(`🔗 Code de vanité :`, interaction.guild.vanityURLCode, true)
        if (interaction.guild.stickers) embed.addField(`🎨 Stickers :`, interaction.guild.stickers.cache.size.toString(), true)
        if (interaction.guild.premiumSubscriptionCount > 0) embed.addField(`💵 Boosts :`, interaction.guild.premiumSubscriptionCount.toString(), true)

        interaction.reply({ embeds: [embed], ephemeral: false })
    }
}
