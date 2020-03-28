export default class Keyboard {
    /**
     * Create a new keyboard instance.
     *
     * @param  {string|number} key
     * @return {void}
     */
    constructor(key) {
        this.key = typeof key === "number" ? this.fromCode(key) : key;
    }

    /**
     * Create a key:* event.
     *
     * @return {Event}
     */
    event() {
        return new CustomEvent(["key", this.key].join(":"));
    }

    /**
     * Get the event key from code.
     *
     * @param  {number|string} code
     * @return {number|string}
     */
    fromCode(code) {
        return this.codes.hasOwnProperty(code) ? this.codes[code] : code;
    }

    /**
     * Create a new key event frok native event.
     *
     * @param  {Event[keyCode]} options.keyCode
     * @return {Event}
     */
    static transform({ keyCode }) {
        return new Keyboard(keyCode).event();
    }
}

/**
 * Available key aliases.
 *
 * @type {Object}
 */
Keyboard.prototype.codes = {
    27: "esc",
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    48: "zero",
    70: "f",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    188: "comma",
    190: "period",
};
