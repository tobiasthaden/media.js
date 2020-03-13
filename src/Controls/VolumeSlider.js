import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class VolumeSlider extends Control {
    /**
     * Get the controls event listeners.
     *
     * @return {array}
     */
    eventListener() {
        return ["input"];
    }

    /**
     * Get the controls event.
     *
     * @return {CustomEvent}
     */
    eventHandler() {
        return new CustomEvent("volume", {
            detail: {
                volume: event.target.value / 100,
            },
        });
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("input", {
            class: "controls-volume",
            type: "range",
            min: 0,
            max: 100,
            value: 100,
        });
    }
}
