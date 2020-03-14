export default class Keyboard {
    constructor(key) {
        this.key = typeof key === "number" ? this.fromCode(key) : key;
    }

    event() {
        return new CustomEvent(["key", this.key].join(":"));
    }

    fromCode(code) {
        return this.codes[code];
    }

    static transform({ keyCode }) {
        return new Keyboard(keyCode).event();
    }
}

Keyboard.prototype.codes = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    75: "k",
    77: "m",
};
