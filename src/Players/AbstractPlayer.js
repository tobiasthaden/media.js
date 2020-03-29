import Element from "../Support/Element.js";
import Keyboard from "../Support/Keyboard.js";

export default class Player {
    /**
     * Create a new Player instance.
     *
     * @param {Element} element
     * @param {Object} options
     */
    constructor(element, options) {
        let src = options.hasOwnProperty("src")
            ? options.src
            : element.dataset.audio || element.dataset.video;

        this.element = element;
        this.native = this.makeMediaPlayer(element, { src });
    }

    /**
     * Create a new native media player.
     *
     * @param {Element} container
     * @param {Object} attributes
     * @return {Element}
     */
    makeMediaPlayer(container, attributes) {
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
