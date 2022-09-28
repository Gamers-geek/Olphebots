const { Client, CommandInteraction, Formatters } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`clear`)
        .setDescription(`Supprime des messages en masse.`)
        .addIntegerOption(option => {
            option.setName(`nombre`)
                .setDescription(`Le nombre de messages a supprimer`)
                .setRequired(true);
            return option;
        }),
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const number = interaction.options.getInteger(`nombre`)
        if(!interaction.member.permissions.has(`MANAGE_MESSAGES`)) return interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande", ephemeral: true })
        if(isNaN(number)) return interaction.reply({ content: "Veuillez rentrer un nombre valide.", ephemeral: true })
        if(number > 99) return interaction.reply({ content: `Je ne peux pas supprimer plus de 99 messages`, ephemeral: true })
        interaction.channel.bulkDelete(number).then(msgs => {
        	interaction.reply({ content: `J'ai supprim\u00e9 ${msgs.size} messages.`, ephemeral: true })
        }).catch(err => {
        	interaction.reply({ content: `Je ne peux pas supprimer les messages datant de plus de 14 jours.`, ephemeral: true })
        })

    }
}
