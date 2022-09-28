const { Interaction, Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { ticketCategory, partenariatCategory, problemCategory, autreCategory, hautStaff } = require('../config')

module.exports = {
    name: `interactionCreate`,
    /**
     * 
     * @param {Interaction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (interaction.isButton()) {
            if (interaction.customId === "openTicket") {
                if (interaction.guild.channels.cache.find(c => c.name === `ticket-${interaction.user.id}`)) return interaction.reply({ content: "Vous avez déjà un ticket ouvert !", ephemeral: true });
                interaction.guild.channels.create(`ticket-${interaction.user.id}`, {
                    type: "text",
                    parent: ticketCategory,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: ["VIEW_CHANNEL"]
                        },
                        {
                            id: interaction.user.id,
                            allow: ["VIEW_CHANNEL"],
                            deny: ["SEND_MESSAGES"]
                        },
                        {
                            id: client.user.id,
                            allow: ["VIEW_CHANNEL"]
                        },
                        {
                            id: interaction.guild.roles.cache.get(hautStaff),
                            allow: ["VIEW_CHANNEL"]
                        }
                    ]
                }).then(ch => {
                    const embed = new MessageEmbed()
                        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                        .setTitle(`Ouverture de ticket`)
                        .setDescription(`Bonjour ${interaction.user.username}, afin de répondre de la manière la plus correcte à votre demande, veuillez sélectionner la catégorie à laquelle elle est associée.\n🤝 Partenariat\n❓ Question diverse\n❗ Signaler un problème\n🎓 Recrutements`)
                        .setFooter({ text: `Support - Olphédia`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                        .setColor("BLUE")
                        .setTimestamp()
                    const buttons = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setEmoji(`🤝`)
                                .setStyle(`SECONDARY`)
                                .setCustomId(`partenariat`)
                        )
                        .addComponents(
                            new MessageButton()
                                .setEmoji(`❓`)
                                .setStyle(`SECONDARY`)
                                .setCustomId(`question`)
                        )
                        .addComponents(
                            new MessageButton()
                                .setEmoji(`❗`)
                                .setStyle(`SECONDARY`)
                                .setCustomId(`probleme`)
                        )
                        .addComponents(
                            new MessageButton()
                                .setEmoji(`🎓`)
                                .setStyle(`SECONDARY`)
                                .setCustomId(`recrutements`)
                        )

                    ch.send({ embeds: [embed], components: [buttons], content: `<@&812813334306881558> <@&772218791429668896>` }).then(msg => {
                        const filter = interact => interact.user.id === interaction.user.id
                        // Créer un collector pour récupérer la réponse de l'utilisateur d'une durée de 5 minutes
                        const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: 300000 });
                        collector.on('collect', async i => {
                            if (i.isButton()) {
                                if (i.customId === "partenariat") {
                                    ch.setParent(partenariatCategory)
                                    ch.permissionOverwrites.set([
                                        {
                                            id: interaction.guild.id,
                                            deny: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: client.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.guild.roles.cache.get(hautStaff),
                                            allow: ["VIEW_CHANNEL"]
                                        }
                                    ])
                                    ch.setName(`partenariat-${interaction.user.id}`)
                                    const embed = new MessageEmbed()
                                        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                                        .setTitle(`Demande de partenariat`)
                                        .setDescription(`Bonjour ${interaction.user},\nAfin de pouvoir répondre le plus vite possible à votre demande, veuillez nous fournir les informations suivantes :\n**Nom du serveur :**\n**Votre rôle sur le serveur :**\n**Le code d'invitation vers votre serveur (sans discord.gg) :**\n**Type de serveur :**\n\nVotre pub sera demandé si le partenariat est accepté. En cas de refus, vous en serez informé. Nous nous réservons le droit de ne pas communiquer les raisons de notre refus.`)
                                        .setColor("BLUE")

                                    const components = new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setEmoji(`🗑️`)
                                                .setStyle(`DANGER`)
                                                .setCustomId(`deleteTicket`)
                                        )
                                    msg.edit({ embeds: [embed], components: [components] })
                                    i.reply({ content: `Votre ticket a été déplacé dans la catégorie approprié à votre demande.`, ephemeral: true })
                                }
                                if (i.customId === "question") {
                                    ch.setParent(autreCategory)
                                    ch.permissionOverwrites.set([
                                        {
                                            id: interaction.guild.id,
                                            deny: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: client.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.guild.roles.cache.get(hautStaff),
                                            allow: ["VIEW_CHANNEL"]
                                        }
                                    ])
                                    ch.setName(`question-${interaction.user.id}`)
                                    const embed = new MessageEmbed()
                                        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                                        .setTitle(`Question diverse`)
                                        .setDescription(`Bonjour ${interaction.user},\nAfin de pouvoir répondre le plus vite possible à votre demande, veuillez poser votre question en étant clair et précis.\nNous vous répondrons dès que possible.`)
                                        .setColor("BLUE")

                                    const components = new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setEmoji(`🗑️`)
                                                .setStyle(`DANGER`)
                                                .setCustomId(`deleteTicket`)
                                        )
                                    msg.edit({ embeds: [embed], components: [components] })
                                    i.reply({ content: `Votre ticket a été déplacé dans la catégorie approprié à votre demande.`, ephemeral: true })
                                }
                                if (i.customId === "probleme") {
                                    ch.setParent(problemCategory)
                                    ch.permissionOverwrites.set([
                                        {
                                            id: interaction.guild.id,
                                            deny: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: client.user.id,
                                            allow: ["VIEW_CHANNEL"]
                                        },
                                        {
                                            id: interaction.guild.roles.cache.get(hautStaff),
                                            allow: ["VIEW_CHANNEL"]
                                        }
                                    ])
                                    ch.setName(`probleme-${interaction.user.id}`)
                                    const embed = new MessageEmbed()
                                        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                                        .setTitle(`Signalement de problème`)
                                        .setDescription(`Bonjour ${interaction.user},\nAfin de pouvoir répondre le plus vite possible à votre demande, veuillez nous fournir les informations suivantes :\n**Problème rencontré :**\n**Votre rôle sur le serveur :**\n**Personnes ou services affectés :**\nNous vous remerçions d'avoir pris le temps de nous avoir signalé votre problème et reviendrons le plus rapidement possible vers vous.`)
                                        .setColor("BLUE")

                                    i.reply({ content: `Votre ticket a été déplacé dans la catégorie approprié à votre demande.`, ephemeral: true })

                                    const components = new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setEmoji(`🗑️`)
                                                .setStyle(`DANGER`)
                                                .setCustomId(`deleteTicket`)
                                        )
                                    msg.edit({ embeds: [embed], components: [components] })
                                }

                            }

                            if (i.customId === "recrutements") {
                                ch.setParent(`900079229910278184`)
                                ch.permissionOverwrites.set([
                                    {
                                        id: interaction.guild.id,
                                        deny: ["VIEW_CHANNEL"]
                                    },
                                    {
                                        id: interaction.user.id,
                                        allow: ["VIEW_CHANNEL"]
                                    },
                                    {
                                        id: client.user.id,
                                        allow: ["VIEW_CHANNEL"]
                                    },
                                    {
                                        id: interaction.guild.roles.cache.get(hautStaff),
                                        allow: ["VIEW_CHANNEL"]
                                    }
                                ])
                                ch.setName(`recrutements-${interaction.user.id}`)
                                const embed = new MessageEmbed()
                                    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                                    .setTitle(`Recrutement`)
                                    .setDescription(`Bonjour ${interaction.user},\nAfin de pouvoir répondre le plus vite possible à votre demande, veuillez nous fournir une candidature contenant au moins les informations suivantes :\n**Votre Pseudo Discord :**\n**Depuis quand vous êtes présent sur le serveur :**\n**Avez-vous reçu des sanctions sur le serveur ?**\n**Votre expérience :**\n**Le rôle que vous souhaitez obtenir :**\n**Votre âge :**\n\nLe staff se réserve le droit de refuser toutes candidature s'il le décide, et ce, sans avoir besoin de donner les raisons du refus.`)
                                    .setColor("BLUE")

                                const components = new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                            .setEmoji(`🗑️`)
                                            .setStyle(`DANGER`)
                                            .setCustomId(`deleteTicket`)
                                    )
                                msg.edit({ embeds: [embed], components: [components] })
                                i.reply({ content: `Votre ticket a été déplacé dans la catégorie approprié à votre demande.`, ephemeral: true })
                            }
                        })

                        collector.on('end', async (collected) => {
                            if (collected.size === 0) {
                                ch.send({ content: `Vous n'avez pas répondu dans le délai imparti. Le ticket va être supprimé dans 10 secondes` })
                                setTimeout(() => {
                                    ch.delete().catch(() => {
                                        console.log(`Impossible de supprimer le ticket. Il a probablement déjà été supprimé`)
                                    })
                                }, 10000)
                            }
                        })
                    })
                    interaction.reply({ content: `Votre ticket a été créé : ${ch}`, ephemeral: true })



                })
            }
        }
    }
}
