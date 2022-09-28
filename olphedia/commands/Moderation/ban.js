const { Client, CommandInteraction, Formatters } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ban`)
        .setDescription(`Bannis un membre du serveur.`)
        .addUserOption(option => {
            option.setName(`membre`)
                .setDescription(`Le membre que vous souhaitez bannir`)
                .setRequired(true);
            return option;
        })
        .addStringOption(option => {
            option.setName(`raison`)
                .setDescription(`La raison du bannissement`)
                .setRequired(false);
            return option;
        }),
    category: __dirname,
/**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const target = interaction.options.getMember(`membre`);
        const reason = interaction.options.getString(`raison`) || "Aucune raison fourni";

        if (!interaction.member.permissions.has(`BAN_MEMBERS`)) return interaction.reply({ content: `Vous n'avez pas la permission de bannir des membres.`, ephemeral: true });
        if (target.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({ content: `Vous ne pouvez pas bannir un membre avec un rôle supérieur ou égal au votre.`, ephemeral: true });
        if (target.id === interaction.member.id) return interaction.reply({ content: `Vous ne pouvez pas vous bannir vous-même.`, ephemeral: true });
        if (target.id === client.user.id) return interaction.reply({ content: `Vous ne pouvez pas bannir le bot.`, ephemeral: true });
        if(target.id === interaction.guild.ownerId) return interaction.reply({ content: `Vous ne pouvez pas bannir le propriétaire du serveur.`, ephemeral: true });
        if(!interaction.guild.me.permissions.has(`BAN_MEMBERS`)) return interaction.reply({ content: `Le bot n'a pas la permission de bannir des membres.`, ephemeral: true });

        await target.send({ content: `Vous avez été banni du serveur **${interaction.guild.name}** par ${Formatters.inlineCode(interaction.user.tag)} pour la raison suivante : **${reason}**` }).catch(() => console.log(`Le message de bannissement n'a pas pu etre envoye`))
        await target.ban({ reason: reason });
        interaction.reply({ content: `${Formatters.inlineCode(target.user.tag)} a été banni du serveur.`, ephemeral: false });
    }
}
