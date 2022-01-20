const ColorResolver = require("../util/ColorResolver")

module.exports = class Embed {
    constructor() {
        this.author = null
        this.title = null
        this.url = null
        this.description = null
        this.fields = []
        this.image = null
        this.thumbnail = null
        this.timestamp = null
        this.footer = null
        this.color = null
    }

    /**
     * 
     * @param {string} name 
     * @param {string} iconURL 
     * @param {string} url 
     * @returns {Embed}
     */
    setAuthor(name, iconURL, url) {
        return this.author = { name, iconURL, url }
    }

    /**
     * 
     * @param {string} title 
     * @returns {Embed}
     */
    setTitle(title) {
        return this.title = title
    }

    /**
     * 
     * @param {string} description 
     * @returns {Embed}
     */
    setDescription(description) {
        return this.description = description.toString().substring(0, 2048)
    }

    /**
     * 
     * @param {string} color 
     * @returns {Embed}
     */
    setColor(color) {
        return this.color = ColorResolver.resolve(color)
    }

    /**
     * 
     * @param {string} name 
     * @param {string} value 
     * @param {boolean} inline 
     * @returns {Embed}
     */
    addField(name, value, inline = false) {
        return this.fields.push({
            name: name.toString().substring(0, 256),
            value: value.toString().substring(0, 1024),
            inline: inline
        })
    }

    /**
     * 
     * @param {string} url 
     * @returns {Embed}
     */
    setThumbnail(url) {
        return this.thumbnail = { url }
    }

    /**
     * 
     * @param {string} url 
     * @returns {Embed}
     */
    setURL(url) {
        return this.url = url
    }

    /**
     * 
     * @param {number} timestamp 
     * @returns {Embed}
     */
    setTimestamp(timestamp = new Date()) {
        return this.timestamp = timestamp
    }

    /**
     * 
     * @param {string} text 
     * @param {string} iconURL 
     * @returns {Embed}
     */
    setFooter(text, iconURL) {
        return this.footer = {
            text: text.toString().substring(0, 2048),
            icon_url: iconURL
        }
    }
}
