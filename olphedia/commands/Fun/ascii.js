const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const figlet = require('figlet')
const util = require('util')
const figletAsync = util.promisify(figlet)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ascii`)
        .setDescription(`Génère un ascii art à partir d'un texte donné`)
        .addStringOption(option => {
            option.setName(`texte`)
                .setDescription(`Le texte à transformer en ascii art`)
                .setRequired(true)
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const texte = interaction.options.getString(`texte`);
        if (texte.length > 20) return interaction.reply({ content: `Le texte est trop long et ne doit pas dépasser 20 caractères.`, ephemeral: true });
        const rendered = await figletAsync(texte)
        interaction.reply({ content: `\`\`\`${rendered}\`\`\``, ephemeral: false });
    }
}