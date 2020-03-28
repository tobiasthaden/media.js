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

export default class Media {
    /**
     * Initialize video players.
     *
     * @param {string|Element} element
     * @param {Object|null} options
     * @return {void}
     */
    static watch(element, options) {
        if (element instanceof Element) {
            return tap(
                new VideoPlayer(element, options),
                player => new Controls(player),
            );
        }

        return [
            ...document.querySelectorAll(element ? element : "[data-video]"),
        ].map(movie => Media.watch(movie, options));
    }

    /**
     * Initialize audio players.
     *
     * @param {string|Element} element
     * @param {Object|null} options
     * @return {void}
     */
    static listen(element, options) {
        if (element instanceof Element) {
            return tap(
                new AudioPlayer(element, options),
                player => new Controls(player),
            );
        }

        return [
            ...document.querySelectorAll(element ? element : "[data-audio]"),
        ].map(channel => Media.listen(channel, options));
    }
}
