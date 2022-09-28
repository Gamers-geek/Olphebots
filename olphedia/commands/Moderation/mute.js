const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const ms = require('ms')
module.exports = {
    data: new SlashCommandBuilder()
        .setName(`mute`)
        .setDescription(`Rend un membre muet.`)
        .addUserOption(option => {
            option.setName(`membre`)
                .setDescription(`Le membre que vous souhaitez rendre muet`)
                .setRequired(true)
            return option
        })
        .addStringOption(option => {
            option.setName(`temps`)
                .setDescription(`Le temps de mute`)
                .setRequired(true)
            return option
        })
        .addStringOption(option => {
            option.setName(`raison`)
                .setDescription(`La raison du mute`)
                .setRequired(true)
            return option
        }),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const target = interaction.options.getMember(`membre`)
        const time = interaction.options.getString(`temps`)
        const reason = interaction.options.getString(`raison`)

        if (!interaction.member.permissions.has(`MODERATE_MEMBERS`)) return interaction.reply({ content: `Vous n'avez pas la permission de modérer les membres.`, ephemeral: true });
        if (target.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({ content: `Vous ne pouvez pas rendre muet un membre avec un rôle supérieur ou égal au votre.`, ephemeral: true });
        if (target.id === interaction.member.id) return interaction.reply({ content: `Vous ne pouvez pas vous rendre muet vous-même.`, ephemeral: true });
        if (target.id === client.user.id) return interaction.reply({ content: `Vous ne pouvez pas rendre muet le bot.`, ephemeral: true });
        if (target.id === interaction.guild.ownerId) return interaction.reply({ content: `Vous ne pouvez pas rendre muet le propriétaire du serveur.`, ephemeral: true });
        if (!interaction.guild.me.permissions.has(`MODERATE_MEMBERS`)) return interaction.reply({ content: `Le bot n'a pas la permission de modérer les membres.`, ephemeral: true });

        if (!ms(time)) return interaction.reply({ content: `Le temps de mute est invalide.`, ephemeral: true });

        target.timeout(ms(time), reason).then(() => {
            interaction.reply({ content: `Le membre ne peux plus parler pendant ${time}` })
        })
    }
}
