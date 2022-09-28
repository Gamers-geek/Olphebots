const { Interaction, Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    once: false,
    /**
     * @param {Interaction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if(interaction.isButton()) {
            if(interaction.customId === 'deleteTicket') {
                interaction.reply({ content: `Le ticket sera supprimé dans 10 secondes...`, ephemeral: true })
                setTimeout(() => {
                    interaction.channel.delete()
                }, 10000)
            }
        }
    }
}