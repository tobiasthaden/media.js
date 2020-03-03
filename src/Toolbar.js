import Element from "./Support/Element.js";
import MuteButton from "./Controls/MuteButton.js";
import PlayButton from "./Controls/PlayButton.js";
import VolumeSlider from "./Controls/VolumeSlider.js";
import TimeSlider from "./Controls/TimeSlider.js";
import FullscreenButton from "./Controls/FullscreenButton.js";

export default class Toolbar {
    /**
     * Create a new Toolbar instance.
     *
     * @param {Player} player
     * @return {void}
     */
    constructor(player) {
        this.items = [
            new PlayButton(),
            new MuteButton(),
            new VolumeSlider(),
            new TimeSlider(),
            new FullscreenButton(),
        ];

        this.element = Element.create("div", element => {
            player.element.appendChild(element);
        });

        this.items.map(item => {
            item.bind(player.native, control => control.boot());
            item.handle(event => this.element.dispatchEvent(event));
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
}
