export default class Control {
    /**
     * Create a new Control instance.
     * @return {void}
     */
    constructor() {
        this.element = this.makeElement();
    }

    /**
     * Create a new native element.
     *
     * @return {Element}
     */
    makeElement() {
        throw "Can not instantiate an abstract control object.";
    }

    /**
     * Boot any control services.
     *
     * @return {void}
     */
    boot() {
        //
    }

    /**
     * Get the controls event listeners.
     *
     * @return {array}
     */
    eventListener() {
        return [];
    }

    /**
     * Bind a a native media player.
     *
     * @param {Element} media
     * @param {Function} callback
     * @return {void}
     */
    bind(media, callback) {
        this.media = media;

        if (callback) {
            callback(this);
        }
    }

    /**
     * Update the CSS selector.
     *
     * @param {string} current
     * @param {string} before
     * @return {void}
     */
    updateCssClass(current, before) {
        this.element.classList.add(current);
        this.element.classList.remove(before);
    }

    /**
     * Handle any control events.
     *
     * @param {Function} callback
     * @return {void}
     */
    handle(callback) {
        this.eventListener().map(listener => {
            this.element.addEventListener(listener, event =>
                callback(this.eventHandler()),
            );
        });
    }
}
