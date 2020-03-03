export default class Element {
    /**
     * Create a new element.
     *
     * @param {string} type
     * @param {...Object|...Function} parameters
     * @return {Element}
     */
    static create(type, ...parameters) {
        let attributes = {};
        let callback = function() {};
        let element = document.createElement(type);

        parameters.forEach(parameter => {
            attributes = typeof parameter === "object" ? parameter : attributes;
            callback = typeof parameter === "function" ? parameter : callback;
        });

        Object.entries(attributes).forEach(attribute => {
            let [key, value] = attribute;
            element.setAttribute(key, value);
        });

        callback(element);

        return element;
    }
}
