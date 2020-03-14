import Element from "./Support/Element.js";
import Keyboard from "./Support/Keyboard.js";
import MuteButton from "./Controls/MuteButton.js";
import PlayButton from "./Controls/PlayButton.js";
import VolumeSlider from "./Controls/VolumeSlider.js";
import TimeDisplay from "./Controls/TimeDisplay.js";
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
     * Bootstrap any player services.
     *
     * @return {void}
     */
    boot() {
        this.registerEvents();
        this.enableKeyboard();
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
     * Enable keyboard support.
     *
     * @return {void}
     */
    enableKeyboard() {
        this.keyboard = true;
    }

    /**
     * Disable keyboard support.
     *
     * @return {void}
     */
    disableKeyboard() {
        this.keyboard = false;
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
     * Create a new video player instance.
     *
     * @param  {Element} element
     * @param  {Object|null} options
     */
    constructor(element, options) {
        super(element);

        options = options ?? {};

        this.controls = options.hasOwnProperty("controls")
            ? options.controls
            : [
                  new PlayButton(),
                  new MuteButton(),
                  new VolumeSlider(),
                  new TimeDisplay(),
                  new TimeSlider(),
                  new FullscreenButton(),
              ];

        this.boot();
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
    }

    /**
     * Request fullscreen.
     *
     * @return {Promise}
     */
    fullscreen() {
        if (this.native.webkitRequestFullScreen) {
            return this.native.webkitRequestFullScreen();
        }

        return this.native.requestFullscreen();
    }
}

export class AudioPlayer extends Player {
    /**
     * Create a new video player instance.
     *
     * @param  {Element} element
     * @param  {Object|null} options
     */
    constructor(element, options) {
        super(element);

        options = options ?? {};

        this.controls = options.hasOwnProperty("controls")
            ? options.controls
            : [
                  new PlayButton(),
                  new MuteButton(),
                  new VolumeSlider(),
                  new TimeDisplay(),
                  new TimeSlider(),
              ];

        this.boot();
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
