const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`roleinfo`)
        .setDescription(`Affiche des informations à propos d'un rôle`)
        .addRoleOption(option => {
            option.setName('role')
                .setDescription(`Le rôle dont vous souhaitez obtenir des informations`)
                .setRequired(true);
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const role = interaction.options.getRole('role')

        let rolePerms = []
        role.permissions.toArray().forEach((p) => {
            const everyoneRole = interaction.guild.roles.cache.find(r => r.id === interaction.guild.id)
            if (everyoneRole.permissions.toArray().includes(p)) {
                return;
            } else {
                rolePerms.push(p)
            }
        })

        const embed = new MessageEmbed()
            .setAuthor(role.name, client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Mention & ID", value: `<@&${role.id}> (\`${role.id}\`)` },
                { name: "Mentionable", value: `${formatString(String(role.mentionable))}`, inline: true },
                { name: "Posistion", value: `${role.position}`, inline: true },
                { name: "Couleur", value: `${role.hexColor}`, inline: true },
                { name: "Créé", value: `<t:${Math.round(role.createdTimestamp / 1000)}:d>`, inline: true },
                { name: "Hoist", value: `${formatString(String(role.hoist))}`, inline: true },
                { name: "Permissions", value: `${rolePerms.join(", ")}` },
                { name: "Membres", value: `${role.members.size}` }
            )
            .setColor(embedColor)

        interaction.reply({ embeds: [embed] })
    }
}

function formatString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}