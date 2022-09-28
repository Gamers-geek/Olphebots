const { client } = require('../index')
const { MessageEmbed } = require('discord.js')

client.on(`guildMemberAdd`, member => {
    if (member.guild.id !== "772213904834166805") return;
    const rulesChannel = member.guild.channels.cache.get(`941040318097276938`)
    rulesChannel.send(`**Validez le règlement ${member}**`).then(msg => {
        msg.delete({ timeout: 10000 })
    })

    const guildEmbed = new MessageEmbed()
        .setDescription(`**Ho, un nouveau membre !**\nSouhaitez la bienvenue à \`${member.user.tag}\` :champagne_glass:`)
        .setColor(`8019fd`)
    const generalChannel = member.guild.channels.cache.get(`800048523059658792`)
    generalChannel.send({ embeds: [guildEmbed] })

    const roleChannel = member.guild.channels.cache.get(`938791593710878800`)
    roleChannel.send(`**Prenez vos rôles ${member}**`).then(msg => {
        msg.delete({ timeout: 10000 })
    })

    const dmEmbed = new MessageEmbed()
        .setColor(`8019fd`)
        .setTitle(`Bienvenue ${member.user.username} dans :sparkles: | 𝐎𝐥𝐩𝐡𝐞𝐝𝐢𝐚 !`)
        .setDescription(`➵ Prend ton capri-sun :beverage_box:\n➵ Choisis tes rôles dans ${roleChannel}\n➵ Fais un petit tour dans tous nos salons :cherry_blossom:\n\nBesoin d'aide ? Créez votre ticket dans le salon <#843224995001925702>\nPassez de bons moments sur Olphedia`)
        .addField(':paperclips: ᐧ Lien de nos réseaux juste ici ⤦', 'https://linktr.ee/Olphedia', true)
        .addField(':purple_heart:・Lien pour donner ton avis sur le serveur juste ici ⤦', 'https://forms.gle/esQMyyRzVMz1CaTs8', true)
        .addField(':mailbox_with_mail:・Lien pour faire un don juste ici ⤦', 'https://paypal.me/olphedia', true)
    member.send({ embeds: [dmEmbed] })
        .then(() => console.log(`Message de bienvenue envoyé a ${member.user.username}`))
        .catch(err => {
            console.log(err)
            console.log(`je n'ai pas envoyé de message de bienvenue à ${member.user.username} car il a ses DM de fermés.`)
        })
})