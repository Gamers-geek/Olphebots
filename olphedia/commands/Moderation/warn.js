const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const uuid = require('uuid')
const { embedColor } = require('../../config')
const fetch = require("node-fetch")

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`warn`)
        .setDescription(`Gère les avertissements d'un membre`)
        .addSubcommand(subcommand => {
            subcommand.setName(`add`)
                .setDescription(`Ajoute un avertissement à un membre`)
                .addUserOption(option => {
                    option.setName(`membre`)
                        .setDescription(`Le membre à avertir`)
                        .setRequired(true);
                    return option;
                })
                .addStringOption(option => {
                    option.setName(`raison`)
                        .setDescription(`La raison de l'avertissement`)
                        .setRequired(true);
                    return option;
                })
            return subcommand;
        })
        .addSubcommand(subcommand => {
            subcommand.setName(`remove`)
                .setDescription(`Retire un avertissement à un membre`)
                .addUserOption(option => {
                    option.setName(`membre`)
                        .setDescription(`Le membre dont vous souhaitez retirer l'avertissement`)
                        .setRequired(true);
                    return option;
                })
                .addStringOption(option => {
                    option.setName(`id`)
                        .setDescription(`L'ID de l'avertissement`)
                        .setRequired(true);
                    return option;
                })
            return subcommand;
        })
        .addSubcommand(subcommand => {
            subcommand.setName(`list`)
                .setDescription(`Affiche l'ensemble des avertissements du membre`)
                .addUserOption(option => {
                    option.setName(`membre`)
                        .setDescription(`Le membre dont vous souhaitez les avertissements`)
                        .setRequired(true);
                    return option;
                })
            return subcommand;
        }),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        const command = interaction.options.getSubcommand();

        if (command == "add") {
            const reason = interaction.options.getString("raison");
            const member = interaction.options.getMember("membre");

            const req = await fetch("http://olphedia.byethost17.com/api/warn.php", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240",
                    cookie: "__test=e71a1ecd5eaf1101c19ea86817a50253;expires=2037-12-31T23:55:55.000Z;path=/;"
                },
                body: JSON.stringify({
                    addWarn: true,
                    id: uuid.v4(),
                    guild: interaction.guild.id,
                    member: member.id,
                    moderator: interaction.user.id,
                    reason: reason,
                    date: Date.now(),
                    securityKey: "]t/^5#:pGgdt^-MYTtL%dY^B]u-rY,nv'bpiI',g-)-PQACiA#gRiY:C..8mM(Mf~hR7@Cho7B-@2xHUe%l1n}}gjS,RjONdP"
                })
            })

            const response = await req.json();
            if (response.success) {
                const embed = new MessageEmbed(
                    {
                        title: `Avertissement ajouté`,
                        description: `${member.user.tag} a été averti par ${interaction.user.tag} pour la raison suivante : ${reason}`,
                        color: embedColor,
                        timestamp: new Date()
                    }
                )
                await interaction.reply({ embeds: [embed], fetchReply: true });
                member.send(`Vous avez reçu un avertissement du serveur **${interaction.guild.name}**\n**Modérateur :** ${interaction.user.tag} (\`${interaction.user.id}\`)\n**Date :** <t:${Date.now()}>\n**Raison :** ${reason}`).catch(err => interaction.editReply(`Impossible d'envoyer un message à ${member.user.tag}`));
            } else {
                if (response.error) {
                    if (response.error == "Missing parameters") {
                        console.log("Missing parameters on add warn")
                        interaction.reply({ content: "Il y a eu une erreur durant l'ajout du warn. Cette erreur a été enregistrée." })
                    } else if (response.error == "Invalid security key") {
                        console.log("Invalid security key on add warn")
                        interaction.reply({ content: "Il y a eu une erreur durant l'ajout du warn. Cette erreur a été enregistrée." })
                    } else {
                        console.log(response)
                        interaction.reply({ content: "Il y a eu une erreur durant l'ajout du warn." })
                    }
                }
            }
        } else if (command == "list") {
            const member = interaction.options.getMember("membre");

            const req = await fetch("http://olphedia.byethost17.com/api/warn.php", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240",
                    cookie: "__test=e71a1ecd5eaf1101c19ea86817a50253;expires=2037-12-31T23:55:55.000Z;path=/;"
                },
                body: JSON.stringify({
                    listWarn: true,
                    guild: interaction.guild.id,
                    member: member.id,
                    securityKey: "]t/^5#:pGgdt^-MYTtL%dY^B]u-rY,nv'bpiI',g-)-PQACiA#gRiY:C..8mM(Mf~hR7@Cho7B-@2xHUe%l1n}}gjS,RjONdP"
                })
            })

            const response = await req.json();
            if (response.success) {
                const results = response.data
                const embed = new MessageEmbed()
                    .setAuthor({ name: `Avertissements de ${member.user.tag}`, iconURL: member.user.avatarURL() })
                    .setColor(embedColor)
                    .setTimestamp()
                    .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                if (results.length < 1) {
                    embed.setDescription(`Cet utilisateur n'as aucun avertissement !`)
                } else {
                    let i = 0
                    embed.setDescription(`${member} a ${results.length} avertissement(s).`)
                    results.forEach(warn => {
                        if (i > 28) return
                        embed.addField(`ID : ${warn.id}`, `>>> **Modérateur :** <@${warn.moderator}> (${warn.moderator})\n**Raison :** ${warn.reason}\n**Date :** <t:${Math.floor(warn.date / 1000)}:D>`)
                    })
                }

                interaction.reply({ embeds: [embed] });
            } else if (response.error) {
                if (response.error == "Missing parameters") {
                    console.log("Missing parameters on list warn")
                    interaction.reply({ content: "Il y a eu une erreur durant la liste des warns. Cette erreur a été enregistrée." })
                } else if (response.error == "Invalid security key") {
                    console.log("Invalid security key on list warn")
                    interaction.reply({ content: "Il y a eu une erreur durant la liste des warns. Cette erreur a été enregistrée." })
                } else {
                    console.log(response)
                    interaction.reply({ content: "Il y a eu une erreur durant la liste des warns." })
                }
            }
        } else if (command == "remove") {
            const id = interaction.options.getString("id");
            const member = interaction.options.getMember("membre");

            const req = await fetch("http://olphedia.byethost17.com/api/warn.php", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240",
                    cookie: "__test=e71a1ecd5eaf1101c19ea86817a50253;expires=2037-12-31T23:55:55.000Z;path=/;"
                },
                body: JSON.stringify({
                    removeWarn: true,
                    guild: interaction.guild.id,
                    member: member.id,
                    id: id,
                    securityKey: "]t/^5#:pGgdt^-MYTtL%dY^B]u-rY,nv'bpiI',g-)-PQACiA#gRiY:C..8mM(Mf~hR7@Cho7B-@2xHUe%l1n}}gjS,RjONdP"
                })
            })

            const response = await req.json();

            if (response.success) {
                const embed = new MessageEmbed(
                    {
                        title: `Avertissement retiré`,
                        description: `${member.user.tag} a été retiré de l'avertissement par ${interaction.user.tag}`,
                        color: embedColor,
                        timestamp: new Date()
                    }
                )
                await interaction.reply({ embeds: [embed], fetchReply: true });
                member.send(`Votre avertissement du serveur **${interaction.guild.name}** a été retiré\n**Modérateur :** ${interaction.user.tag} (\`${interaction.user.id}\`)\n**Date :** <t:${Date.now()}>`).catch(err => interaction.editReply(`Impossible d'envoyer un message à ${member.user.tag}`));
            }

        }
    }
}