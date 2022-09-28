const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`mp`)
    .setDescription(`Envoie un MP à un membre`)
    .addUserOption(option => {
        option.setName('utilisateur')
        .setDescription('L\'utilisateur à qui envoyer le message')
        .setRequired(true);
        return option;
    })
    .addStringOption(option => {
        option.setName('message')
        .setDescription('Le message à envoyer')
        .setRequired(true);
        return option;
    }),
    olphedia: true,
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if(interaction.guildId !== "772213904834166805") return interaction.reply({ content: `Cette commande n'est pas disponible sur votre serveur.`, ephemeral: true })
        if(!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: `Vous n'avez pas les permissions pour effectuer cette commande`});
        const user = interaction.options.getMember('utilisateur');
        const message = interaction.options.getString('message');

        if(!user) return interaction.reply({ content: `L'utilisateur n'a pas été trouvé`});
        
        user.send({ content: `Vous avez reçu un message depuis **${interaction.guild.name}** :\n> ${message}` });
        interaction.reply({ content: `Le message a été envoyé à ${user.user.tag}`, ephemeral: true });
    }
}
