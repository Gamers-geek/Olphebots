const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = require('node-fetch')
const { blagueApiToken, embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`joke`)
        .setDescription(`Envoie une blague`)
        .addStringOption(option => {
            option.setName(`type`)
                .setDescription(`Le type de blague à envoyer`)
                .setRequired(true)
                .addChoices({ name: "Blague globales", value: "global" })
                .addChoices({ name: "Blague limite", value: "limit" })
                .addChoices({ name: "Blague beauf", value: "beauf" })
                .addChoices({ name: "Blague blondes", value: "blondes" })
                .addChoices({ name: "Blague de dev", value: "dev" })
                .addChoices({ name: "Humour noir", value: "dark" })
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const type = interaction.options.getString(`type`);


        fetch(`https://www.blagues-api.fr/api/type/${type}/random`, {
            headers: {
                'Authorization': `Bearer ${blagueApiToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const embed = new MessageEmbed()
                    .setColor(embedColor)
                    .setTimestamp()
                    .setTitle(`${data.joke}`)
                    .setDescription(`||${data.answer}||`)
                    .setFooter({ text: `ID : ${data.id} | Type : ${data.type}` })
                interaction.reply({ embeds: [embed], ephemeral: false })
            })

    }
}