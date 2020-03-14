import Element from "./Support/Element.js";

export default class Toolbar {
    /**
     * Create a new Toolbar instance.
     *
     * @param {Player} player
     * @return {void}
     */
    constructor(player) {
        this.element = Element.create("div", { class: "controls" }, element => {
            player.element.appendChild(element);
        });

        player.controls.map(item => {
            item.bind(player.native, control => control.boot());
            item.handle(event => this.dispatch(event));
            this.element.appendChild(item.element);
        });

        this.boot(player);
    }

    /**
     * Register any toolbar events.
     *
     * @param {Player} player
     * @return {void}
     */
    boot(player) {
        this.listen("play", event => player.switchPlay());
        this.listen("mute", event => player.switchMute());
        this.listen("time", event => player.setTime(event.detail.time));
        this.listen("volume", event => player.setVolume(event.detail.volume));
        this.listen("fullscreen", event => player.fullscreen());
    }

    /**
     * Register a toolbar event.
     *
     * @param {string} event
     * @param {Function} callback
     * @return {void}
     */
    listen(event, callback) {
        this.element.addEventListener(event, e => callback(e));
    }

    /**
     * Dispatch the given toolbar event.
     *
     * @param  {Event} event
     * @return {void}
     */
    dispatch(event) {
        this.element.dispatchEvent(event);
    }
}
