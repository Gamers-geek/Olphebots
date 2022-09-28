const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: `panel`,
    description: ``,
    async execute(client, message, args) {
        message.delete()

        const embed1 = new MessageEmbed()
            .setTitle(`\ud83d\udcee \`Ticket\``)
            .setDescription(`<a:1_fleche_fluffy_rose:815421084462481459> Besoin d'aide ?\n<a:1_fleche_fluffy_rose:815421084462481459> Une question ?\n<a:1_fleche_fluffy_rose:815421084462481459> Vous souhaitez faire un partenariat ?\n<a:1_fleche_fluffy_rose:815421084462481459> Vous souhaitez vous confier ?\n<a:1_fleche_fluffy_rose:815421084462481459> Vous avez des propositions d'id\u00e9es pour le serveur ?\n\nL'\u00e9quipe d'olphedia est pr\u00e9sente pour vous. Cr\u00e9ez un ticket en appuyant sur le bouton "Ouvrir un ticket" puis faites votre demande !\n**Tous les tickets inutiles donneront lieux \u00e0 une sanction.**`)
            .setColor(`8019fd`)
            .setFooter({ text: `Olph\u00e9dia - Support`, iconURL: "https://cdn.discordapp.com/attachments/858054628225843220/943911672895123466/Sans_fond.png" })
        const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`openTicket`)
                    .setStyle(`PRIMARY`)
                    .setEmoji(`🎟️`)
                    .setLabel(`Ouvrir un ticket`)
            )
        await message.channel.send({ embeds: [embed1], components: [button] })
    }
}
