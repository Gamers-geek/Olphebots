const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { embedColor } = require('../../config')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`serverbots`)
        .setDescription(`Affiche la liste des bots du serveur`),
    category: __dirname,
    /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    async execute(interaction, client) {
        let members = interaction.guild.members.cache.filter(u => u.user.bot).map((u) => `${u.user.tag} (\`${u.id}\`)`)
        const total_members = members.length
        members = total_members > 20 ? members.slice(0, 20).join("\n") : members.join("\n")
        if (members.length <= 0) members = "Aucun bot"

        const embed = new MessageEmbed()
            .setAuthor({ text: `Bots trouvés !`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`Il y a un total de **${total_members}** bots dans **${interaction.guild.name}**`)
            .addFields({ name: "Bots", value: `${total_members > 20 ? `${members} et ${total_members - 20} de plus.` : members}` })
            .setColor(embedColor)

        return interaction.reply({ embeds: [embed] })
    }
}