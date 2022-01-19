const { Client } = require("eris")
const client = new Client('The bot token here')

client.on('messageCreate', message => {
    message.channel.createMessage('Hello, world!')
})

client.connect()
