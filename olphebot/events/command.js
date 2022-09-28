const { client } = require('../index')

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return
    try {
        await command.execute(interaction, client)
    } catch (err) {
        if (err) console.error(err)
        await interaction.reply({ content: "Une erreur est survenue durant l'exécution de la commande.", ephemeral: true })
    }
})