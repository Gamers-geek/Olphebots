const { client } = require(`../index`)

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        console.log(`${interaction.user.tag} (${interaction.user.id}) vient d'exectuer la commande ${interaction.commandName} sur ${interaction.guild.name} (${interaction.guild.id})`)
        await command.execute(interaction, client);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: `Il y a eu une erreur durant l\'exécution de la commande`, ephemeral: true });
    }
});
