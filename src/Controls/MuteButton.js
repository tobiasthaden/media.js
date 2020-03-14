import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class MuteButton extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.player.listen("volumechange", event => {
            this.player.native.muted
                ? this.element.setAttribute("aria-label", "unmute")
                : this.element.setAttribute("aria-label", "mute");
        });

        this.listen('click', event => this.player.switchMute());
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("button", {
            class: "controls-mute",
            "aria-label": "mute",
        });
    }
}
