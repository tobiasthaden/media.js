import Controls from "./src/Toolbar.js";
import { VideoPlayer, AudioPlayer } from "./src/Player.js";

export default class Cinema {
    /**
     * Initialize all video players.
     *
     * @param {string|null} selector
     * @return {void}
     */
    static watchAll(selector) {
        selector = selector ? selector : "[data-video]";
        Array.from(document.querySelectorAll(selector)).map(movie =>
            new Cinema().watch(movie),
        );
    }

    /**
     * Initialize a video player.
     *
     * @param {Element} movie
     * @return {void}
     */
    watch(movie) {
        new Controls(new VideoPlayer(movie));
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
        selector = selector ? selector : "[data-audio]";
        Array.from(document.querySelectorAll(selector)).map(channel =>
            new Radio().listen(channel),
        );
    }

    /**
     * Initialize a audio player.
     *
     * @param {Element} movie
     * @return {void}
     */
    listen(channel) {
        new Controls(new AudioPlayer(channel));
    }
}
