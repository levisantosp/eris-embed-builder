const { Client } = require("eris")
const Embed = require("../structures/Embed")
const client = new Client('Bot token here')

client.on('messageCreate', message => {
    const embed = new Embed()
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setTitle("Title of embed")
    embed.setDescription("Description of embed")
    embed.setColor("0x7289DA")
    embed.setThumbnail(message.author.avatarURL)
    embed.addField("The field's name of embed", "The field's description of the embed")
    embed.setFooter(message.author.username, message.author.avatarURL)
    embed.setTimestamp()

    message.channel.createMessage({
        content: 'Hello, world!',
        embeds: [embed]
    })
})

client.connect()
