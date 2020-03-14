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
     * @param {Object|null} options
     * @return {void}
     */
    static watchAll(selector, options) {
        return [
            ...document.querySelectorAll(selector ?? "[data-video]"),
        ].map(movie => Cinema.watch(movie, options));
    }

    /**
     * Initialize a video player.
     *
     * @param {Element} movie
     * @return {void}
     */
    static watch(movie, options) {
        return tap(
            new VideoPlayer(movie, options),
            player => new Controls(player),
        );
    }
}

export class Radio {
    /**
     * Initialize all audio players.
     *
     * @param {string|null} selector
     * @param {Object|null} options
     * @return {void}
     */
    static listenAll(selector, options) {
        return [
            ...document.querySelectorAll(selector ?? "[data-audio]"),
        ].map(channel => Radio.listen(channel, options));
    }

    /**
     * Initialize a audio player.
     *
     * @param {Element} channel
     * @return {void}
     */
    static listen(channel) {
        return tap(
            new AudioPlayer(channel, options),
            player => new Controls(player),
        );
    }
}
