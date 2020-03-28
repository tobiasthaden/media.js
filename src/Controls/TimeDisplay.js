import Control from "./Control.js";
import Element from "../Support/Element.js";

export default class TimeDisplay extends Control {
    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        this.setDuration();
        this.updateTime();
    }

    /**
     * Set the duration value.
     *
     * @return {void}
     */
    setDuration() {
        this.player.listen("durationchange", event => {
            this.duration.nodeValue = this.formatTime(this.player.native.duration);
        });
    }

    /**
     * Update the current time value.
     *
     * @return {void}
     */
    updateTime() {
        this.player.listen("timeupdate", event => {
            this.current.nodeValue = this.formatTime(
                this.player.native.currentTime,
            );
        });
    }

    /**
     * Format the time.
     *
     * @param {Number} time
     * @return {String}
     */
    formatTime(time) {
        let minutes = Math.floor(time / 60);
        var seconds = Math.round(time - minutes * 60);
        return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        let container = Element.create("div", {
            class: "controls-display",
        });

        let seperator = Element.create("span", {
            class: "controls-display-seperator",
        });

        seperator.appendChild(document.createTextNode("/"));

        this.current = document.createTextNode("00:00");
        this.duration = document.createTextNode("00:00");

        container.appendChild(this.current);
        container.appendChild(seperator);
        container.appendChild(this.duration);

        return container;
    }
}
