import Player from "./AbstractPlayer.js";
import Element from "../Support/Element.js";
import MuteButton from "../Controls/MuteButton.js";
import PlayButton from "../Controls/PlayButton.js";
import VolumeSlider from "../Controls/VolumeSlider.js";
import TimeDisplay from "../Controls/TimeDisplay.js";
import TimeSlider from "../Controls/TimeSlider.js";

export default class AudioPlayer extends Player {
    /**
     * Create a new audio player instance.
     *
     * @param  {Element} element
     * @param  {Object|null} options
     */
    constructor(element, options) {
        options = options || {};

        super(element, options);

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
    makeMediaPlayer(container, attributes) {
        return Element.create("audio", { src: attributes.src }, element =>
            container.appendChild(element),
        );
    }
}
