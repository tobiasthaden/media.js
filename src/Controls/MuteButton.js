import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class MuteButton extends Control {
    /**
     * Get the controls event listeners.
     *
     * @return {array}
     */
    eventListener() {
        return ["click"];
    }

    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.media.addEventListener("volumechange", event => {
            this.media.muted
                ? this.updateCssClass("mute", "voice")
                : this.updateCssClass("voice", "mute");
        });
    }

    /**
     * Get the controls event.
     *
     * @return {CustomEvent}
     */
    eventHandler() {
        return new CustomEvent("mute");
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("button");
    }
}
