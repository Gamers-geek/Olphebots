const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`partner`)
    .setDescription(`Fait un partenariat sur Olphédia`),
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(client, interaction) {
        if(!interaction.member.roles.cache.has(`816382818019704842`) && !interaction.member.permissions.has(`ADMINISTRATOR`)) return interaction.reply({ content: `Vous n'avez pas la permission d'utiliser cette commande.`, ephemeral: true })

        interaction.channel.send({ content: `<a:1_fleche_fluffy_rose:815421084462481459> <@&820085736677834794>\n<a:1_sparkles_colors:840163751020724234> L'équipe d'olphédia vous remercie pour ce partenariat <a:1_sparkles_colors:840163751020724234> `})

        interaction.reply({ content: `Partenariat effectué.`, ephemeral: true })
    }
}
