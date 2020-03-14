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
    }

    /**
     * Register any event listeners.
     *
     * @return {void}
     */
    registerEvents() {
        document.addEventListener("keydown", event =>
            this.keyboard ? this.dispatch(Keyboard.transform(event)) : null,
        );
    }

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
     * Dispatch the given event.
     *
     * @param  {Event} event
     * @return {void}
     */
    dispatch(event) {
        this.native.dispatchEvent(event);
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
     * Increment the current time.
     *
     * @return {void}
     */
    incrementTime() {
        this.setTime(this.native.currentTime + 5);
    }

    /**
     * Decrement the current time.
     *
     * @return {void}
     */
    decrementTime() {
        this.setTime(this.native.currentTime - 5);
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

    /**
     * Increment the volume.
     *
     * @return {void}
     */
    incrementVolume() {
        let volume = this.native.volume + 0.1;
        this.setVolume(volume >= 1 ? 1 : volume);
    }

    /**
     * Decrement the volume.
     *
     * @return {void}
     */
    decrementVolume() {
        let volume = this.native.volume - 0.1;
        this.setVolume(volume <= 0 ? 0 : volume);
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

        this.keyboard = options.hasOwnProperty("keyboard")
            ? options.hasOwnProperty("keyboard")
            : true;

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

        this.events = options.hasOwnProperty("events")
            ? options.events
            : {
                  click: event => this.switchPlay(),
                  "key:m": event => this.switchMute(),
                  "key:f": event => this.fullscreen(),
                  "key:space": event => this.switchPlay(),
                  "key:right": event => this.incrementTime(),
                  "key:left": event => this.decrementTime(),
                  "key:up": event => this.incrementVolume(),
                  "key:down": event => this.decrementVolume(),
              };

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
        super.registerEvents();

        Object.keys(this.events).map(key => this.listen(key, this.events[key]));
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

        this.keyboard = options.hasOwnProperty("keyboard")
            ? options.hasOwnProperty("keyboard")
            : true;

        this.controls = options.hasOwnProperty("controls")
            ? options.controls
            : [
                  new PlayButton(),
                  new MuteButton(),
                  new VolumeSlider(),
                  new TimeDisplay(),
                  new TimeSlider(),
              ];

        this.events = options.hasOwnProperty("events")
            ? options.events
            : {
                  click: event => this.switchPlay(),
                  "key:m": event => this.switchMute(),
                  "key:space": event => this.switchPlay(),
                  "key:right": event => this.incrementTime(),
                  "key:left": event => this.decrementTime(),
                  "key:up": event => this.incrementVolume(),
                  "key:down": event => this.decrementVolume(),
              };

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
