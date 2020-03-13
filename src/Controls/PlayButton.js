import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class PlayButton extends Control {
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
        this.media.addEventListener("play", event =>
            this.element.setAttribute("aria-label", "pause"),
        );
        this.media.addEventListener("pause", event =>
            this.element.setAttribute("aria-label", "play"),
        );
    }

    /**
     * Get the controls event.
     *
     * @return {CustomEvent}
     */
    eventHandler() {
        return new CustomEvent("play");
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
