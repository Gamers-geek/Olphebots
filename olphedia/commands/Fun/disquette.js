const { Client, CommandInteraction, MessageEmbed, Formatters } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { embedColor } = require('../../config')
const path = require('path')
const disquettes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../", "data", "disquette.json"), 'utf8'))

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`disquette`)
        .setDescription(`Envoie une disquette`)
        .addUserOption(option => {
            option.setName(`envoyer-à`)
            option.setRequired(false)
            option.setDescription(`Envoie la disquette à un utilisateur`)
            return option
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const user = interaction.options.getMember('envoyer-à')
        const disquette = disquettes["disquettes"][Math.floor(Math.random() * disquettes["disquettes"].length)]
        const embed = new MessageEmbed()
            .setColor(embedColor)
            .setTitle(`Disquette`)
            .setDescription(`${disquette.content}`)
            .setFooter({ text: `ID : ${disquette.id}` })
            .setTimestamp()
        if (user) {
            interaction.reply({ embeds: [embed], ephemeral: false, content: `${Formatters.userMention(user.id)}` })
        } else {
            interaction.reply({ embeds: [embed], ephemeral: false })
        }
    }
}