import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class VolumeSlider extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.updateVolume();

        this.listen("input", event =>
            this.player.setVolume(event.target.value / 100),
        );
    }

    /**
     * Update the slider value.
     *
     * @return {void}
     */
    updateVolume() {
        this.player.listen("volumechange", event => {
            this.element.value = this.player.native.volume * 100;
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
