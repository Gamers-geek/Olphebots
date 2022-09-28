const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`roles`)
        .setDescription(`Envoie les embed de rôle`),
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (interaction.user.id !== "416593143765401600") return

        const genre = new MessageEmbed()
            .setTitle(`**__Choisissez votre genre :__**`)
            .setDescription(`♀️ <a:1_fleche_fluffy_rose:815421084462481459> <@&787523274820288582>\n♂️ <a:1_fleche_fluffy_rose:815421084462481459> <@&787523173737955328>\n♾ <a:1_fleche_fluffy_rose:815421084462481459> <@&787523602060148776>`)
            .setColor(`8019fd`)

        const genreButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleFemme`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♀️`)
                    .setLabel(`Femme`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleHomme`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♂️`)
                    .setLabel(`Homme`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNonBinaire`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♾`)
                    .setLabel(`Non binaire`)
            )
        await interaction.channel.send({ embeds: [genre], components: [genreButtons], files: ["./img/genre2.png"] })

        const age = new MessageEmbed()
            .setTitle(`**__Sélectionnez en fonction de votre âge:__**`)
            .setDescription(`🥂 <a:1_fleche_fluffy_rose:815421084462481459> <@&787523791978233866>\n🍩 <a:1_fleche_fluffy_rose:815421084462481459> <@&787523307498766336>`)
            .setColor(`8019fd`)

        const ageButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleMajeur`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🥂`)
                    .setLabel(`Majeur`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleMineur`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍩`)
                    .setLabel(`Mineur`)
            )
        await interaction.channel.send({ embeds: [age], components: [ageButtons], files: ["./img/age2.png"] })

        const relation = new MessageEmbed()
            .setTitle(`**__Sélectionnez votre situation amoureuse :__**`)
            .setDescription(`❤ <a:1_fleche_fluffy_rose:815421084462481459> <@&787523856125657129>\n💓 <a:1_fleche_fluffy_rose:815421084462481459> <@&787524168391327745>\n💔 <a:1_fleche_fluffy_rose:815421084462481459> <@&787523951147614248>`)
            .setColor(`8019fd`)

        const relationButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouple`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`❤`)
                    .setLabel(`En couple`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCrush`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`💓`)
                    .setLabel(`En crush / en bail`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCelib`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`💔`)
                    .setLabel(`Célibataire`)
            )
        await interaction.channel.send({ embeds: [relation], components: [relationButtons], files: ["./img/relation2.png"] })

        const signesAstro = new MessageEmbed()
            .setTitle(`**__Sélectionnez votre signe astrologique :__**`)
            .setDescription(`♈ <a:1_fleche_fluffy_rose:815421084462481459> Bélier\n♉ <a:1_fleche_fluffy_rose:815421084462481459> Taureau\n♊ <a:1_fleche_fluffy_rose:815421084462481459> Gémeaux\n♋ <a:1_fleche_fluffy_rose:815421084462481459> Cancer\n♌ <a:1_fleche_fluffy_rose:815421084462481459> Lion\n♍ <a:1_fleche_fluffy_rose:815421084462481459> Vierge\n♎ <a:1_fleche_fluffy_rose:815421084462481459> Balance\n♏ <a:1_fleche_fluffy_rose:815421084462481459> Scorpion\n♐ <a:1_fleche_fluffy_rose:815421084462481459> Sagittaire\n♑ <a:1_fleche_fluffy_rose:815421084462481459> Capricorne\n♒ <a:1_fleche_fluffy_rose:815421084462481459> Verseau\n♓ <a:1_fleche_fluffy_rose:815421084462481459> Poisson`)
            .setColor(`8019fd`)

        const signesAstroButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroBelier`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♈`)
                    .setLabel(`Bélier`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroTaureau`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♉`)
                    .setLabel(`Taureau`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroGemeaux`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♊`)
                    .setLabel(`Gémeaux`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroCancer`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♋`)
                    .setLabel(`Cancer`)
            )
        const signesAstroButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroLion`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♌`)
                    .setLabel(`Lion`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroVierge`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♍`)
                    .setLabel(`Vierge`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroBalance`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♎`)
                    .setLabel(`Balance`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroScorpion`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♏`)
                    .setLabel(`Scorpion`)
            )
        const signesAstro3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroSagittaire`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♐`)
                    .setLabel(`Sagittaire`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroCapricorne`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♑`)
                    .setLabel(`Capricorne`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroVerseau`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♒`)
                    .setLabel(`Verseau`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAstroPoisson`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`♓`)
                    .setLabel(`Poisson`)
            )
        await interaction.channel.send({ embeds: [signesAstro], components: [signesAstroButtons, signesAstroButtons2, signesAstro3], files: ["./img/astro2.png"] })

        const notifs = new MessageEmbed()
            .setTitle(`**__Sélectionnez vos notifications :__**`)
            .setDescription(`📢 <a:1_fleche_fluffy_rose:815421084462481459> <@&797506420764573727>\n🎉 <a:1_fleche_fluffy_rose:815421084462481459> <@&788778750489788467>\n🧮 <a:1_fleche_fluffy_rose:815421084462481459> <@&787684824432640001>\n🎁 <a:1_fleche_fluffy_rose:815421084462481459> <@&815334677899771915>\n🌐 <a:1_fleche_fluffy_rose:815421084462481459> <@&849315218809946192>\n🔗 <a:1_fleche_fluffy_rose:815421084462481459> <@&820085736677834794>\n🖇️ <a:1_fleche_fluffy_rose:815421084462481459> <@&858436314504232960>\n🎵 <a:1_fleche_fluffy_rose:815421084462481459> <@&880858647004057671>\n📰 <a:1_fleche_fluffy_rose:815421084462481459> <@&880858861307846677>\n🎮 <a:1_fleche_fluffy_rose:815421084462481459> <@&882554750518849576>\n`)
            .setColor(`8019fd`)

        const notifsButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifAnnonces`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`📢`)
                    .setLabel(`Annonces`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifAnimations`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎉`)
                    .setLabel(`Animations`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifVotes`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🧮`)
                    .setLabel(`Votes`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifGiveaways`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎁`)
                    .setLabel(`Giveaways`)
            )

        const notifsButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifReseaux`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌐`)
                    .setLabel(`Réseaux`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifPartenariat`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🔗`)
                    .setLabel(`Partenariat`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifCollaborations`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🖇️`)
                    .setLabel(`Collaborations`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifMix`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎵`)
                    .setLabel(`Mix`)
            )

        const notifsButtons3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifJournal`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`📰`)
                    .setLabel(`Journal`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleNotifJeux`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎮`)
                    .setLabel(`Jeux`)
            )

        await interaction.channel.send({ embeds: [notifs], components: [notifsButtons, notifsButtons2, notifsButtons3], files: ["./img/notifs2.png"] })

        const access = new MessageEmbed()
            .setTitle(`**__Choisissez les catégories auxquelles vous souhaitez avoir accès :__**`)
            .setDescription(`**⚠️ Ces rôles donnent accès à des salons**\n🧩 <a:1_fleche_fluffy_rose:815421084462481459> <@&820402735664463922>\n🎮 <a:1_fleche_fluffy_rose:815421084462481459> <@&800061896992227338>\n📷 <a:1_fleche_fluffy_rose:815421084462481459> <@&842449852868722699>`)
            .setColor("8019fd")

        const accessButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAccessDivertissements`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🧩`)
                    .setLabel(`Divertissements`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAccessJeux`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎮`)
                    .setLabel(`Jeux`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleAccessMedias`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`📷`)
                    .setLabel(`Médias`)
            )

        await interaction.channel.send({ embeds: [access], components: [accessButtons], files: ["./img/acces2.png"] })

        await interaction.channel.send({ content: `<a:1_fleche_fluffy_rose:815421084462481459> <#939908243487092837> ` })
    }
}