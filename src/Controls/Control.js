export default class Control {
    /**
     * Create a new Control instance.
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
     * Bind the player.
     *
     * @param {Element} player
     * @param {Function} callback
     * @return {void}
     */
    bind(player, callback) {
        this.player = player;

        if (callback) {
            callback(this);
        }
    }

    /**
     * Register a toolbar listener.
     *
     * @param {string} event
     * @param {Function} callback
     * @return {void}
     */
    listen(event, callback) {
        this.element.addEventListener(event, e => callback(e));
    }

    /**
     * Update the CSS selector.
     *
     * @param {string} add
     * @param {string} remove
     * @return {void}
     */
    updateCssClass(add, remove) {
        this.element.classList.add(add);
        this.element.classList.remove(remove);
    }
}
