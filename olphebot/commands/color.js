const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`couleur`)
        .setDescription(`Envoie les embeds colors`),
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (interaction.user.id !== "416593143765401600") return

        const couleursFoncees = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur foncée :__**`)
            .setDescription(`🍷 <a:1_fleche_fluffy_rose:815421084462481459> <@&797190516889485332>\n💘 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191123193823284>\n🌂 <a:1_fleche_fluffy_rose:815421084462481459> <@&797189776037642290>\n🌊 <a:1_fleche_fluffy_rose:815421084462481459> <@&797192817738514482>\n🐍 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590080146243584>\n🍋 <a:1_fleche_fluffy_rose:815421084462481459> <@&849591393525694484>\n🦁 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590156347703327>\n🐗 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590145359675452>`)
            .setColor(`#8019fd`)

        const couleursFonceesButtons1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRougeFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍷`)
                    .setLabel(`Rouge foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRoseFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`💘`)
                    .setLabel(`Rose foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVioletFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌂`)
                    .setLabel(`Violet foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBleuFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌊`)
                    .setLabel(`Bleu foncé`)
            )
        const couleursFonceesButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVertFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐍`)
                    .setLabel(`Vert foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurJauneFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍋`)
                    .setLabel(`Jaune foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurOrangeFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🦁`)
                    .setLabel(`Orange foncé`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurMarronFonce`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐗`)
                    .setLabel(`Marron foncé`)
            )

        await interaction.channel.send({ embeds: [couleursFoncees], components: [couleursFonceesButtons1, couleursFonceesButtons2] })

        const couleursNormale = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur :__**`)
            .setDescription(`🌹 <a:1_fleche_fluffy_rose:815421084462481459> <@&797190847740772434>\n🌺 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191028674920478>\n☂️ <a:1_fleche_fluffy_rose:815421084462481459> <@&797192318032674837>\n🥏 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191128654544907>\n🍀 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590139760279573>\n🌝 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590197838151690>\n🎃 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590228310425662>\n🐴 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590162404933632>`)
            .setColor(`#8019fd`)

        const couleursNormaleButtons1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRouge`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌹`)
                    .setLabel(`Rouge`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRose`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌺`)
                    .setLabel(`Rose`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurViolet`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`☂️`)
                    .setLabel(`Violet`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBleu`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🥏`)
                    .setLabel(`Bleu`)
            )
        const couleursNormaleButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVert`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍀`)
                    .setLabel(`Vert`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurJaune`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌝`)
                    .setLabel(`Jaune`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurOrange`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎃`)
                    .setLabel(`Orange`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurMarron`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐴`)
                    .setLabel(`Marron`)
            )

        await interaction.channel.send({ embeds: [couleursNormale], components: [couleursNormaleButtons1, couleursNormaleButtons2] })



        const couleursPastel = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur pastel :__**`)
            .setDescription(`🎈 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191861810757642>\n🌸 <a:1_fleche_fluffy_rose:815421084462481459> <@&797190301780410368>\n🦄 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191116851380234>\n💙 <a:1_fleche_fluffy_rose:815421084462481459> <@&797190726244630529>\n🌴 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590167999348806>\n🐝 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590173591011328>\n🧡 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590237977772043>\n🐕 <a:1_fleche_fluffy_rose:815421084462481459> <@&849591406418329620>`)
            .setColor(`#8019fd`)

        const couleursPastelButtons1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRougePastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎈`)
                    .setLabel(`Rouge pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRosePastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌸`)
                    .setLabel(`Rose pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVioletPastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🦄`)
                    .setLabel(`Violet pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBleuPastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`💙`)
                    .setLabel(`Bleu pastel`)
            )
        const couleursPastelButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVertPastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌴`)
                    .setLabel(`Vert pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurJaunePastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐝`)
                    .setLabel(`Jaune pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurOrangePastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🧡`)
                    .setLabel(`Orange pastel`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurMarronPastel`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐕`)
                    .setLabel(`Marron pastel`)
            )

        await interaction.channel.send({ embeds: [couleursPastel], components: [couleursPastelButtons1, couleursPastelButtons2] })

        const couleursClair = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur clair :__**`)
            .setDescription(`❤️ <a:1_fleche_fluffy_rose:815421084462481459> <@&820221908100317224>\n🎀 <a:1_fleche_fluffy_rose:815421084462481459> <@&797191382783230002>\n💜 <a:1_fleche_fluffy_rose:815421084462481459> <@&797189901770686555>\n🌐 <a:1_fleche_fluffy_rose:815421084462481459> <@&797197389441400853>\n🌱 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590132654735380>\n🐣 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590233488949252>\n🟠 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590121607200788>\n🍂 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590242846572585>`)
            .setColor(`#8019fd`)

        const couleursClairButtons1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRougeClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`❤️`)
                    .setLabel(`Rouge clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurRoseClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🎀`)
                    .setLabel(`Rose clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVioletClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`💜`)
                    .setLabel(`Violet clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBleuClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌐`)
                    .setLabel(`Bleu clair`)
            )
        const couleursClairButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVertClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🌱`)
                    .setLabel(`Vert clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurJauneClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐣`)
                    .setLabel(`Jaune clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurOrangeClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🟠`)
                    .setLabel(`Orange clair`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurMarronClair`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍂`)
                    .setLabel(`Marron clair`)
            )

        await interaction.channel.send({ embeds: [couleursClair], components: [couleursClairButtons1, couleursClairButtons2] })

        const couleursSpeciale = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur :__**`)
            .setDescription(`🕵️ <a:1_fleche_fluffy_rose:815421084462481459> <@&849590150471876618>\n🥭 <a:1_fleche_fluffy_rose:815421084462481459> <@&850084528877863003>\n🍑 <a:1_fleche_fluffy_rose:815421084462481459> <@&849590115734519818>\n🐬 <a:1_fleche_fluffy_rose:815421084462481459> <@&849595236468523008>\n👚 <a:1_fleche_fluffy_rose:815421084462481459> <@&849595372258721812>`)
            .setColor(`#8019fd`)

        const couleursSpecialeButtons1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurGris`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🕵️`)
                    .setLabel(`Gris`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBeige`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🥭`)
                    .setLabel(`Beige`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurPunch`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🍑`)
                    .setLabel(`Punch`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurTurquoise`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐬`)
                    .setLabel(`Turquoise`)
            )
        const couleursSpecialeButtons2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurVioline`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`👚`)
                    .setLabel(`Violine`)
            )

        await interaction.channel.send({ embeds: [couleursSpeciale], components: [couleursSpecialeButtons1, couleursSpecialeButtons2] })

        const couleurInvisible = new MessageEmbed()
            .setTitle(`**__Choisissez une couleur :__**`)
            .setDescription(`📱 <a:1_fleche_fluffy_rose:815421084462481459> <@&820227791290368001>\n🖥️ <a:1_fleche_fluffy_rose:815421084462481459> <@&849594870901506049>\n🐈‍⬛ <a:1_fleche_fluffy_rose:815421084462481459> <@&849590105526239242>\n👻 <a:1_fleche_fluffy_rose:815421084462481459> <@&815351832499060767>`)
            .setColor(`#8019fd`)

        const couleurInvisibleButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurInvisibleMobile`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`📱`)
                    .setLabel(`Invisible mobile`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurInvisiblePC`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🖥️`)
                    .setLabel(`Invisible PC`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurNoir`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🐈‍⬛`)
                    .setLabel(`Noir`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleCouleurBlanc`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`👻`)
                    .setLabel(`Blanc`)
            )

        await interaction.channel.send({ embeds: [couleurInvisible], components: [couleurInvisibleButtons] })

        const tools = new MessageEmbed()
            .setTitle(`**__Outils :__**`)
            .setDescription(`🔀 <a:1_fleche_fluffy_rose:815421084462481459> Couleur aléatoire\n⛔ <a:1_fleche_fluffy_rose:815421084462481459> Retirer les couleurs`)
            .setColor(`#8019fd`)

        const toolsButtons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleToolsRandom`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`🔀`)
                    .setLabel(`Couleur aléatoire`)
            )
            .addComponents(
                new MessageButton()
                    .setCustomId(`roleToolsRemove`)
                    .setStyle(`SECONDARY`)
                    .setEmoji(`⛔`)
                    .setLabel(`Retirer les couleurs`)
            )

        await interaction.channel.send({ embeds: [tools], components: [toolsButtons] })

        await interaction.channel.send({ content: `<a:1_fleche_fluffy_rose:815421084462481459> <#938791593710878800> ` })

    }
}