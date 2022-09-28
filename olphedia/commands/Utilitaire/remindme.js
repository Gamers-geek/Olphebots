const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const ms = require('ms');
const { embedColor } = require('../../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`remindme`)
        .setDescription(`Créer un rappel`)
        .addStringOption(option => {
            option.setName(`temps`)
                .setDescription(`La durée du rappel`)
                .setRequired(true);
            return option;
        })
        .addStringOption(option => {
            option.setName(`objet`)
                .setDescription(`L'objet du rappel`)
                .setRequired(true);
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const time = interaction.options.getString('temps');
        const objet = interaction.options.getString('objet');

        if (!ms(time)) return interaction.reply({ content: `Le temps doit respecter le format suivant :\n\`h\` pour heure\n\`w\` pour semaines\n\`m\` pour minute\n\`s\` pour seconde`, ephemeral: true });

        if (ms(time) < 0 || ms(time) > ms('2w')) return interaction.reply({ content: `Le temps doit être compris entre 0 et 2 semaines`, ephemeral: true });

        const embed = new MessageEmbed()
            .setTitle(`Rappel ajouté !`)
            .setDescription(`Très bien ${interaction.member.nickname ? interaction.member.nickname : interaction.user.username}, je vous rappelerai ${objet} dans ${time}`)
            .setColor(embedColor)
            .setTimestamp()
            .setFooter({ text: `${interaction.member.nickname ? interaction.member.nickname : interaction.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true }) });

        interaction.reply({ embeds: [embed] });

        setTimeout(() => {
            interaction.user.send(`**Rappel :** ${objet}`).catch(() => { });
        }, ms(time));
    }
}