import Player from "./AbstractPlayer.js";
import Element from "../Support/Element.js";
import MuteButton from "../Controls/MuteButton.js";
import PlayButton from "../Controls/PlayButton.js";
import VolumeSlider from "../Controls/VolumeSlider.js";
import TimeDisplay from "../Controls/TimeDisplay.js";
import TimeSlider from "../Controls/TimeSlider.js";
import FullscreenButton from "../Controls/FullscreenButton.js";

export default class VideoPlayer extends Player {
    /**
     * Create a new video player instance.
     *
     * @param  {Element} element
     * @param  {Object|null} options
     */
    constructor(element, options) {
        super(element);

        options = options ? options : {};

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
        return Element.create("video", { src: container.dataset.video }, element =>
            container.appendChild(element),
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
