const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require(`../../config`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`survey`)
        .setDescription(`Permet de lancer un sondage avec le bot`)
        .addStringOption(option => {
            option.setName(`sondage`)
                .setDescription(`La question du sondage`)
                .setRequired(true)
            return option;
        }),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const survey = interaction.options.getString(`sondage`)
        const embed = new MessageEmbed()
            .setTitle(`Sondage`)
            .setDescription(`${survey}`)
            .setFooter({ text: `Sondage lanc\u00e9 par ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setColor(embedColor)

        const message = await interaction.reply({ embeds: [embed], fetchReply: true })
        message.react(`✅`)
        message.react(`⚪`)
        message.react(`❌`)
    }
}
