const { client } = require('../index')

client.on(`messageCreate`, (message) => {
    if(message.channelId === "843193670478856212" || message.channelId === "813496534087761930" || message.channelId === "800048528864313374") message.react(`797551543381000254`)
})