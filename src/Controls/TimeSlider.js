import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class TimeSlider extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.updateTime();

        this.listen('input', event => this.player.setTime(
            (this.player.native.duration / 100) * event.target.value
        ));
    }

    /**
     * Update the slider value.
     *
     * @return {void}
     */
    updateTime() {
        this.player.listen("timeupdate", event => {
            this.element.value =
                (100 / this.player.native.duration) * this.player.native.currentTime;
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
