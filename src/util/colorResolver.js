module.exports = class ColorResolver {
    static resolve(color) {
        if (typeof color !== 'string') throw new Error(`Unexpected type ${typeof color} while building the embed!`)
        return parseInt(color.toUpperCase().replace('#', ''), 16)
    }
}