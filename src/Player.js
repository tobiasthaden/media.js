import Element from "./Support/Element.js";
import MuteButton from "./Controls/MuteButton.js";
import PlayButton from "./Controls/PlayButton.js";
import VolumeSlider from "./Controls/VolumeSlider.js";
import TimeSlider from "./Controls/TimeSlider.js";
import FullscreenButton from "./Controls/FullscreenButton.js";

class Player {
    /**
     * Create a new Player instance.
     *
     * @param {Element} element
     * @return {void}
     */
    constructor(element) {
        this.element = element;
        this.native = this.makeMediaPlayer(element);

        this.registerEvents();
    }

    /**
     * Create a new native media player.
     *
     * @param {Element} container
     * @return {Element}
     */
    makeMediaPlayer(container) {
        throw "Can not instantiate an abstract player.";
    }

    /**
     * Register any event listeners.
     *
     * @return {void}
     */
    registerEvents() {}

    /**
     * Register a player event.
     *
     * @param {string} event
     * @param {Function} callback
     * @return {void}
     */
    listen(event, callback) {
        this.native.addEventListener(event, e => callback(e));
    }

    /**
     * Change the mute state.
     *
     * @return {void}
     */
    switchMute() {
        this.native.muted = !this.native.muted;
    }

    /**
     * Change the play state.
     *
     * @return {void}
     */
    switchPlay() {
        this.native.paused ? this.native.play() : this.native.pause();
    }

    /**
     * Request fullscreen.
     *
     * @return {Promise}
     */
    fullscreen() {
        return this.native.requestFullscreen();
    }

    /**
     * Update the current time.
     *
     * @param {number} time
     * @return {void}
     */
    setTime(time) {
        this.native.currentTime = time;
    }

    /**
     * Update the current volume.
     *
     * @param {number} volume
     * @return {void}
     */
    setVolume(volume) {
        this.native.volume = volume;
    }
}

export class VideoPlayer extends Player {
    /**
     * Get the players controls.
     *
     * @return {Array}
     */
    controls() {
        return [
            new PlayButton(),
            new MuteButton(),
            new VolumeSlider(),
            new TimeSlider(),
            new FullscreenButton(),
        ];
    }

    /**
     * Create a new native video player.
     *
     * @param {Element} container
     * @return {Element}
     */
    makeMediaPlayer(container) {
        return Element.create(
            "video",
            { src: container.dataset.video },
            element => container.appendChild(element),
        );
    }

    /**
     * Register any event listeners.
     *
     * @return {void}
     */
    registerEvents() {
        this.listen("click", event => this.switchPlay());
        this.listen("keydown", event =>
            event.which == 32 ? this.switchPlay() : null,
        );
    }
}

export class AudioPlayer extends Player {
    /**
     * Get the players controls.
     *
     * @return {Array}
     */
    controls() {
        return [
            new PlayButton(),
            new MuteButton(),
            new VolumeSlider(),
            new TimeSlider(),
        ];
    }

    /**
     * Create a new native audio player.
     *
     * @param {Element} container
     * @return {Element}
     */
    makeMediaPlayer(container) {
        return Element.create(
            "audio",
            { src: container.dataset.audio },
            element => container.appendChild(element),
        );
    }
}
