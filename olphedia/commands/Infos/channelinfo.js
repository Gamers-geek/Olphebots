const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { embedColor } = require('../../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`channelinfo`)
        .setDescription(`Affiche des informations à propos d'un salon`)
        .addChannelOption(option => {
            option.setName(`salon`)
                .setDescription(`Le salon dont vous souhaitez afficher les informations`)
                .setRequired(false);
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const channel = interaction.options.getChannel(`salon`) || interaction.channel;

        const embed = new MessageEmbed()
            .setAuthor({ name: channel.name, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .addFields(
                { name: "Mention & ID", value: `<#${channel.id}> (\`${channel.id}\`)` },
                { name: "Position", value: `${channel.rawPosition}` },
                { name: "NSFW", value: `${channel.nsfw ? "Oui" : "Non"}` },
                { name: "Type", value: `${channel.type == "GUILD_TEXT" ? "Textuel" : channel.type == "GUILD_VOICE" ? "Vocal" : channel.type == "GUILD_STAGE_VOICE" ? "Stage" : channel.type == "GUILD_CATEGORY" ? "Category" : channel.type == "GUILD_NEWS" || channel.type == "GUILD_NEWS_THREAD" ? "Annonce" : channel.type == "GUILD_STORE" ? "Magasin" : channel.type == "GUILD_PUBLIC_THREAD" || channel.type == "GUILD_PRIVATE_THREAD" ? "Thread" : "Message privés"}` },
                { name: "Sujet", value: `${channel.topic ? channel.topic : "Pas de sujet"}` }
            )
            .setColor(embedColor)

        interaction.reply({ embeds: [embed] })
    }
}