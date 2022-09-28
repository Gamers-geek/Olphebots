const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')
const fs = require('fs')
const path = require('path')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Affiche la liste des commandes du bot`)
        .addStringOption(option => {
            option.setName('commande')
                .setDescription(`La commande dont vous souhaitez avoir des informations`)
                .setRequired(false)
            return option
        }),
    category: __dirname,
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const command = interaction.options.getString('commande')
        if (!command) {
            const embed = new MessageEmbed()
                .setTitle(`Liste des commandes`)
                .setColor(embedColor)
                .setDescription(`Voici la liste des commandes`)

            const commandFolders = fs.readdirSync(path.join(__dirname, '..', '..', 'commands'));
            for (const folder of commandFolders) {
                const commandFiles = fs.readdirSync(path.join(__dirname, '..', '..', 'commands', folder)).filter(file => file.endsWith('.js'))
                if (folder != 'Olphedia') {
                    embed.addField(folder, commandFiles.map(file => {
                        const command = require(path.join(__dirname, '..', '..', 'commands', folder, file))
                        return `\`${command.data.name}\``
                    }).join(", "))
                }

            }
            const buttons = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL(`https://top.gg/fr/bot/840527634726387742`)
                        .setLabel(`Vote`)
                        .setStyle("LINK")
                )
                .addComponents(
                    new MessageButton()
                        .setURL(`https://discord.gg/KWCefaFCe2`)
                        .setLabel(`Support`)
                        .setStyle("LINK")
                )
                .addComponents(
                    new MessageButton()
                        .setURL(`https://discord.com/oauth2/authorize?client_id=840527634726387742&permissions=8&scope=bot%20applications.commands`)
                        .setLabel(`M'inviter dans votre serveur`)
                        .setStyle("LINK")
                )
            interaction.reply({ embeds: [embed], components: [buttons] })
        } else {
            const commandInfo = client.commands.find(cmd => cmd.data.name == command)

            if (!commandInfo) return interaction.reply({ content: `La commande n'existe pas !`, ephemeral: true })

            const embed = new MessageEmbed()
                .setTitle(`Information sur la commande \`${command}\``)
                .setColor(embedColor)
                .setDescription(commandInfo.data.description)
                .addFields(
                    {
                        name: `Catégorie`,
                        value: path.basename(commandInfo.category),
                        inline: true
                    }
                )

            console.log(path.basename(commandInfo.category))

            const buttons = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL(`https://top.gg/fr/bot/840527634726387742`)
                        .setLabel(`Vote`)
                        .setStyle("LINK")
                )
                .addComponents(
                    new MessageButton()
                        .setURL(`https://discord.gg/KWCefaFCe2`)
                        .setLabel(`Support`)
                        .setStyle("LINK")
                )
                .addComponents(
                    new MessageButton()
                        .setURL(`https://discord.com/oauth2/authorize?client_id=840527634726387742&permissions=8&scope=bot%20applications.commands`)
                        .setLabel(`M'inviter dans votre serveur`)
                        .setStyle("LINK")
                )
            interaction.reply({ embeds: [embed], components: [buttons] })
        }
    }
}
