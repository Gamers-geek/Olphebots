const { MessageEmbed } = require('discord.js');
const { client } = require('../index')
const { embedColor, logsChannel, errorEmoji, doneEmoji } = require('../config')
const attente = 25
const unb = require('unb-api')
const unbClient = new unb.Client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5MTM1MDE0OTg0NTE4MjEyMjkiLCJpYXQiOjE2Mzc4NjYxMjl9.17VJpgN41O-hMlUd1aUCpaJmOl_icuEIN46Zhr1CI_Y")

client.on(`messageCreate`, async message => {
    if (message.author.bot || !message.guild) return
    if (message.channelId === "877603497728700467") {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        if (randomNumber == attente) {
            const valideEmote = message.guild.emojis.cache.find(emoji => emoji.id === `830618420096663583`)


            const win = Math.floor(Math.random() * 100000) + 1
            unbClient.getUserBalance(message.guild.id, message.author.id).then(bal => {
                unbClient.setUserBalance(message.guild.id, message.author.id, { cash: bal.cash, bank: parseInt(bal.bank + win) }, "Gagnant au loto")
            })

            const embed = new MessageEmbed()
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
                .setTitle(`Nombre attendu : ${attente}`)
                .setDescription(`${doneEmoji} Félicitation ! Vous avez gagné ${win} Olphécoin`)
                .addField(`Nombre tiré :`, `${randomNumber}`)
                .setColor(embedColor)
            message.reply({ embeds: [embed] })
            message.member.roles.add("881570650450452531")
            const channel = message.guild.channels.cache.get(logsChannel)
            channel.send(`\`${message.author.tag}\` (\`${message.author.id}\`) viens de gagner ${win}$ au casino.`)
        } else {
            const invalidEmote = message.guild.emojis.cache.find(emoji => emoji.id === `854663262698995743`)
            const embed = new MessageEmbed()
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
                .setTitle(`Nombre attendu : ${attente}`)
                .setDescription(`${errorEmoji} Désolé, vous avez perdu. Vous pouvez retenter votre chance dans 2 heures.`)
                .addField(`Nombre tiré :`, `${randomNumber}`)
                .setColor(embedColor)
            message.reply({ embeds: [embed] })
        }
    }
})
