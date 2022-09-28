const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { client } = require("../index");

client.on(`messageCreate`, async (message) => {
    if (message.author.bot) return
    if (message.channel.id === "941040318097276938") {

        const embed = new MessageEmbed()
            .setTitle(`__**Bienvenue sur Olphédia !**__`)
            .setDescription(`Le staff du serveur vous souhaite la bienvenue ! Olphédia est un serveur Discord de type communautaire & de divertissement créé le samedi 31 octobre 2020.\n\n**Une fois arrivé sur le serveur, nous considérons que chaque membre a lu et approuvé le règlement, et est d'accord pour s'y conformer sous peine de sanction. Chaque membre doit également respecter les [conditions d'utilisation de Discord](https://discord.com/terms).**\n\nLe règlement suivant n'est pas exhaustif, le staff se réserve le droit de sanctionner pour d'autres types de débordement s'ils le jugent nécessaire. Nous vous recommandons de vérifier que des modifications n'ont pas été apporté au règlement de manière régulière.
            `)
            .setColor("8019fd")
            .setImage("https://media.discordapp.net/attachments/800060125749444649/941084396008665088/presentation.png")

        await message.channel.send({ embeds: [embed] })


        const rulesText = new MessageEmbed()
            .setTitle(`Chartre communautaire`)
            .setDescription(`**Le respect, la courtoisie et le savoir-vivre est primordiale au sein du serveur.** Toute forme de propos ayant pour but de déranger, de nuire à la communauté, ou de nuire à un autre membre du serveur sera sévèrement sanctionné.\n\nNous souhaitons garder un serveur sympathique et convivial où tout le monde se sent bien c'est pour celà que **tout type d'insulte, de spam, de ping abusif ou de message de flood, en message privé ou sur le serveur sera sanctionné.**\n\nAfin d'éviter tout problème, et d'assurer votre sécurité, veuillez nous signaler immédiatement les messages ou liens renvoyant sur des sites frauduleux, à caractère illégal ou à caractère pornographique.`)
            .setColor(`8019fd`)
            .setImage(`https://cdn.discordapp.com/attachments/797420250643562496/942093812573044786/commu.png`)

        await message.channel.send({ embeds: [rulesText] })

        const validation = new MessageEmbed()
            .setTitle(`Validation du règlement`)
            .setDescription(`Pour valider le règlement ainsi qu'accéder au serveur, veuillez cliquer sur le bouton sous ce message.\n**En cas de problème de validation, contactez un membre du staff en ligne.**`)
            .setColor(`8019fd`)

        const buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`validateRules`)
                    .setStyle(`SUCCESS`)
                    .setEmoji(`830618420096663583`)
                    .setLabel(`Valider le règlement`)
            )

        await message.channel.send({ embeds: [validation], components: [buttons] })
    }
})