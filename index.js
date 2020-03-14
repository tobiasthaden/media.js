import Controls from "./src/Toolbar.js";
import { VideoPlayer, AudioPlayer } from "./src/Player.js";

/**
 * Call the callback with the value then return the value.
 *
 * @param  {*} value
 * @param  {Function} callback
 * @return {*}
 */
const tap = function(value, callback) {
    callback(value);
    return value;
};

export default class Cinema {
    /**
     * Initialize all video players.
     *
     * @param {string|null} selector
     * @return {void}
     */
    static watchAll(selector) {
        return [
            ...document.querySelectorAll(selector ?? "[data-video]"),
        ].map(movie => Cinema.watch(movie));
    }

    /**
     * Initialize a video player.
     *
     * @param {Element} movie
     * @return {void}
     */
    static watch(movie) {
        return tap(new VideoPlayer(movie), player => new Controls(player));
    }
}

export class Radio {
    /**
     * Initialize all audio players.
     *
     * @param {string|null} selector
     * @return {void}
     */
    static listenAll(selector) {
        return [
            ...document.querySelectorAll(selector ?? "[data-audio]"),
        ].map(channel => new Radio().listen(channel));
    }

    /**
     * Initialize a audio player.
     *
     * @param {Element} movie
     * @return {void}
     */
    static listen(channel) {
        return tap(new AudioPlayer(channel), player => new Controls(player));
    }
}
