const { client, commands } = require('../index');

client.on('ready', async () => {

    try {
        await client.application.commands.set(commands).catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }

    const status = [
        `${client.guilds.cache.size} serveurs`,
        `${client.users.cache.size} utilisateurs`,
        `${client.channels.cache.size} salons`,
    ]

    setInterval(() => {
        const random = Math.floor(Math.random() * status.length)
        client.user.setActivity(status[random], { type: 'WATCHING' })
    }, 10000)

    console.log(`${client.user.tag} is ready!`);
});
