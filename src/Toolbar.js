import Element from "./Support/Element.js";

export default class Toolbar {
    /**
     * Create a new Toolbar instance.
     *
     * @param {Player} player
     * @return {void}
     */
    constructor(player) {
        let element = Element.create("div", { class: "controls" }, element => {
            player.element.appendChild(element);
        });

        player.controls.map(item => {
            item.bind(player, control => control.boot());
            element.appendChild(item.element);
        });

        this.element = element;
    }
}
