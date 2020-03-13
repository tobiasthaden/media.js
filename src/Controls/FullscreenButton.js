import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class FullscreenButton extends Control {
    /**
     * Get the controls event listeners.
     *
     * @return {array}
     */
    eventListener() {
        return ["click"];
    }

    /**
     * Get the controls event.
     *
     * @return {CustomEvent}
     */
    eventHandler() {
        return new CustomEvent("fullscreen");
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
