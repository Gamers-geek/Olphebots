const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`grades`)
        .setDescription(`Envoie embed grade`),
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (interaction.user.id !== "416593143765401600") return

        const embed = new MessageEmbed()
            .setTitle(`<:emoji_sparkles:797552309302591489> Grades <:emoji_sparkles:797552309302591489>`)
            .setDescription(`**Envois des messages dans le serveur pour obtenir de nouveaux rôles**\n*Les rôles s'obtiennent en fonction de votre niveau avec <@!318312854816161792>*\n\n<a:1_fleche_violet:814886678644523040> **Niveau 3 :** <@&772578401709195295>\n• Permission de changer de pseudo\n• Permission de réaction\n• Permission vidéos en vocal (stream & caméra)\n\n<a:1_fleche_violet:814886678644523040> **Niveau 5 :** <@&800074836109426698>\n• Même permissions que le rôle précédent\n\n<a:1_fleche_violet:814886678644523040> **Niveau 10 :** <@&814875846090555413>\n• Même permissions que le rôle précédent\n\n<a:1_fleche_violet:814886678644523040> **Niveau 20 :** <@&772578744480956426>\n• Même permissions que le rôle précédent\n• Permission d'utiliser des emojis externes\n• Permission image dans tous les salons\n\n<a:1_fleche_violet:814886678644523040> **Niveau 30 :** <@&772578994423595060>\n• Même permissions que le rôle précédent\n\n<a:1_fleche_violet:814886678644523040> **Niveau 40 :** <@&814877457160077353>\n• Même permissions que le rôle précédent\n• Permissions vocale (rendre muet, mettre en sourdine, déplacer des membres)\n\n<a:1_fleche_violet:814886678644523040> **Niveau 50 :** <@&818838720240418857>\n• Même permissions que le rôle précédent\n• 10k par jour dans <#800048539098284043>\n• Boost XP ×1,5\n\n<a:1_fleche_violet:814886678644523040> **Niveau 80 :** <@&837067496137818124>\n• Même permissions que le rôle précédent\n• 50k tous les 3 jours dans <#800048539098284043>\n• Boost XP ×2\n\nFaites \`d!rank\` dans le salon <#800048527120138300> pour voir votre niveau actuel.`)
            .setColor("8019fd")

        await interaction.channel.send({ embeds: [embed] })
        await interaction.channel.send({ content: `<a:1_fleche_fluffy_rose:815421084462481459> <#938791593710878800>` })
    }
}

/*
:1_fleche_violet~1: lvl 3
• @🧸・Membre+
• Changer le pseudo, perm de réactions, perms video en voc (stream, caméra)
:1_fleche_violet~1: lvl 5
• @🍯・Resta
• Perms d'avant
:1_fleche_violet~1: lvl 10
• @🍹・Habitué
• Perms d'avant
:1_fleche_violet~1: lvl 20
• @🥂・Icone
• Perms d'avant + autorisation émojis externes + perm images dans tous les salons
:1_fleche_violet~1: lvl 30
• @🐉・légende
• Perms d'avant
:1_fleche_violet~1: lvl 40
• @☄・Immortel
• Perms d'avant + perms voc (mute, mettre en sourdine, déplacer des membres)
:1_fleche_violet~1: lvl 50
• @🌙・King/Queen
• Perms d'avant + 10k par jour pour 💰・thunes + x1,5 boost xp
:1_fleche_violet~1: lvl 80
• @✨・Olphedien de luxe
• Perms d'avant + 50k tous les 3j pour 💰・thunes + x1,5 boost xp

Faites !rank dans 🤖・commandes-bot pour voir votre nombre de niveaux.
*/