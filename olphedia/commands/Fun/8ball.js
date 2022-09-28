const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`8ball`)
        .setDescription(`Réponds à une question donnée.`)
        .addStringOption(option => {
            option.setName(`question`)
                .setDescription(`La question à laquelle le bot doit répondre`)
                .setRequired(true);
            return option;
        }),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const question = interaction.options.getString(`question`);
        const reponses = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin", "Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi oui", "C'est certain", "Oui absolument", "Tu peux compter dessus", "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"]
        const reponse = reponses[Math.floor(Math.random() * reponses.length)];

        const embed = new MessageEmbed()
            .setTitle(`🎱 Boule magique`)
            .setDescription(`La Magic 8-Ball est un jouet produit par la société Mattel. Elle est censée prédire l'avenir et répondre à n'importe quelle question posée.`)
            .addFields(
                { name: `Question :`, value: question },
                { name: `Réponse :`, value: reponse }
            )
            .setColor(embedColor)
            .setTimestamp()
            .setFooter({ text: `Question posé par ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
        interaction.reply({ embeds: [embed], ephemeral: false })
    }
}