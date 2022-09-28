const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require(`../../config`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`botinfo`)
        .setDescription(`Affiche des informations à propos du bot`),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        let totalSeconds = client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let totalCommands = 0
        client.commands.each((c) => {
            totalCommands++
        })
        const embed = new MessageEmbed()
            .setTitle(" > " + client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "Developeur", value: `[Gamers-geek](https://github.com/Gamers-geek)`, inline: true },
                {
                    name: "Version",
                    value: `1.5`,
                    inline: true
                },
                { name: "Serveurs", value: `${client.guilds.cache.size}`, inline: true },
                { name: "Utilisateurs", value: `${client.users.cache.size}`, inline: true },
                { name: "Salons", value: `${client.channels.cache.size}`, inline: true },
                { name: "Emojis", value: `${client.emojis.cache.size}`, inline: true },
                { name: "Librairie", value: `Discord.js: 13.1.0`, inline: true },
                { name: "Commandes", value: `${totalCommands}`, inline: true },
                { name: "Serveur d'aide", value: `[\`Rejoindre\`](https://discord.gg/smkRJwmjg7)`, inline: true },
                { name: "Uptime", value: `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`, inline: true },
            )
            .setColor(embedColor)

        interaction.reply({ embeds: [embed] })
    }
}