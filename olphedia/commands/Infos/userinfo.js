const { Client, CommandInteraction, MessageEmbed, Formatters } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { badges, embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`userinfo`)
        .setDescription(`Permet d'obtenir des informations à propos d'un utilisateur`)
        .addUserOption(option => {
            option.setName(`utilisateur`)
                .setDescription(`L'utilisateur dont vous souhaitez obtenir des informations`)
                .setRequired(false);
            return option;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const user = interaction.options.getMember('utilisateur') || interaction.member;

        /*
            DISCORD_EMPLOYEE
            PARTNERED_SERVER_OWNER
            HYPESQUAD_EVENTS
            BUGHUNTER_LEVEL_1
            HOUSE_BRAVERY
            HOUSE_BRILLIANCE
            HOUSE_BALANCE
            EARLY_SUPPORTER
            TEAM_USER
            BUGHUNTER_LEVEL_2
            VERIFIED_BOT
            EARLY_VERIFIED_BOT_DEVELOPER
            DISCORD_CERTIFIED_MODERATOR
        */
        const flags = (await user.user.fetchFlags());

        const badgesList = []
        let badge = ''

        if (flags.has(`DISCORD_EMPLOYEE`)) {
            badge = badges.find(b => b.name === `DISCORD_EMPLOYEE`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`PARTNERED_SERVER_OWNER`)) {
            badge = badges.find(b => b.name === `PARTNERED_SERVER_OWNER`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`HYPESQUAD_EVENTS`)) {
            badge = badges.find(b => b.name === `HYPESQUAD_EVENTS`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`BUGHUNTER_LEVEL_1`)) {
            badge = badges.find(b => b.name === `BUGHUNTER_LEVEL_1`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`HOUSE_BRAVERY`)) {
            badge = badges.find(b => b.name === `HOUSE_BRAVERY`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`HOUSE_BRILLIANCE`)) {
            badge = badges.find(b => b.name === `HOUSE_BRILLIANCE`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`EARLY_SUPPORTER`)) {
            badge = badges.find(b => b.name === `EARLY_SUPPORTER`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`TEAM_USER`)) {
            badge = badges.find(b => b.name === `TEAM_USER`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`BUGHUNTER_LEVEL_2`)) {
            badge = badges.find(b => b.name === `BUGHUNTER_LEVEL_2`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`VERIFIED_BOT`)) {
            badge = badges.find(b => b.name === `VERIFIED_BOT`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`EARLY_VERIFIED_BOT_DEVELOPER`)) {
            badge = badges.find(b => b.name === `EARLY_VERIFIED_BOT_DEVELOPER`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`EARLY_VERIFIED_BOT_DEVELOPER`)) {
            badge = badges.find(b => b.name === `EARLY_VERIFIED_BOT_DEVELOPER`)
            badgesList.push(badge.emoji)
        }
        if (flags.has(`DISCORD_CERTIFIED_MODERATOR`)) {
            badge = badges.find(b => b.name === `DISCORD_CERTIFIED_MODERATOR`)
            badgesList.push(badge.emoji)
        }


        let totalRoles = []
        user.roles.cache.forEach((r) => {
            totalRoles.push(r)
        })
        let perms = []
        user.permissions.toArray().forEach((p) => {
            const everyoneRole = interaction.guild.roles.cache.find(r => r.id === interaction.guild.id)
            if (everyoneRole.permissions.toArray().includes(p)) {
                return;
            } else {
                perms.push(Formatters.underscore(p))
            }
        })


        const embed = new MessageEmbed()
            .setAuthor({ name: user.user.tag, iconURL: user.user.displayAvatarURL({ dynamic: true }) })
            .addFields(
                { name: "Mention & ID", value: `<@${user.id}> (\`${user.id}\`)` },
                { name: "A rejoint le serveur", value: `<t:${Math.floor(user.joinedTimestamp / 1000)}:D>`, inline: true },
                { name: `A rejoint Discord`, value: `<t:${Math.floor(user.user.createdTimestamp / 1000)}:D>`, inline: true },
                { name: `Rôles [${user.roles.cache.size}]`, value: `${totalRoles.join(", ")}` },
                { name: `Permissions`, value: `${perms.join(", ")}` },
                { name: `Badge(s)`, value: badgesList.length > 0 ? badgesList.join(", ") : "Cet utilisateur n'a aucun badges", inline: false }
            )
            .setColor(embedColor)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

        interaction.reply({ embeds: [embed] })

    }
}