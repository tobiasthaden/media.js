import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class PlayButton extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.player.listen("play", event =>
            this.element.setAttribute("aria-label", "pause"),
        );

        this.player.listen("pause", event =>
            this.element.setAttribute("aria-label", "play"),
        );

        this.listen("click", event => this.player.switchPlay());
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("button", {
            class: "controls-play",
            "aria-label": "play",
        });
    }
}
