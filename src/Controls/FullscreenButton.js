import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class FullscreenButton extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.listen('click', event => this.player.fullscreen());
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("button", {
            class: "controls-fullscreen",
        });
    }
}
