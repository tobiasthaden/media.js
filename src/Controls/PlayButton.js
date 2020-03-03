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
            this.updateCssClass("play", "pause"),
        );
        this.media.addEventListener("pause", event =>
            this.updateCssClass("pause", "play"),
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
        return Element.create("button");
    }
}
