import { createControls } from "../Factories/createControls";

export class Player {
    constructor(element, options) {
        this.element = element;
        this.options = Object.assign(this._getDefaults(), options);

        createControls(this);
    }

    isPlaying() {
        return !this.element.paused;
    }

    play() {
        this.element.play();
    }

    pause() {
        this.element.pause();
    }

    toggleMute() {
        this.element.muted = !this.element.muted;
    }

    togglePlay() {
        this.isPlaying() ? this.pause() : this.play();
    }

    on(event, handler) {
        this.element.addEventListener(event, handler);
    }

    get(prop) {
        return this.element[prop];
    }

    _getDefaults() {
        throw "Can not initialize an abstract player.";
    }
}
