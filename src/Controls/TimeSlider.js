import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class TimeSlider extends Control {
    /**
     * Get the controls event listeners.
     *
     * @return {array}
     */
    eventListener() {
        return ["input"];
    }

    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.updateTime();
    }

    /**
     * Get the controls event.
     *
     * @return {CustomEvent}
     */
    eventHandler() {
        return new CustomEvent("time", {
            detail: {
                time: (this.media.duration / 100) * event.target.value,
            },
        });
    }

    /**
     * Update the slider value.
     *
     * @return {void}
     */
    updateTime() {
        this.media.addEventListener("timeupdate", event => {
            this.element.value =
                (100 / this.media.duration) * this.media.currentTime;
        });
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        return Element.create("input", {
            class: "controls-timeline",
            type: "range",
            min: 0,
            max: 100,
            value: 0,
        });
    }
}
