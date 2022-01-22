## English 🇺🇸
  - This repository is for those who want to make embeds in eris easier, without having to install packages or create the JSON embed.
## Portuguese 🇧🇷
  - Este repositório é para quem deseja fazer embeds no eris de forma mais fácil, sem precisar ficar instalando pacotes ou criando a embed em JSON.
## Installation
```
npm i eris
```
## Example
~~~javascript
const { Client } = require("eris")
const Embed = require("./src/structures/Embed")
const client = new Client('The bot token here')

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === '!embed') {
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
            content: "Hello, world!",
            embeds: [embed]
        })
    }
})
~~~
