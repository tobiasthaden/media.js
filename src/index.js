import { Audio } from "./Players/Audio";
import { Video } from "./Players/Video";

const Media = {
    Audio,

    Video,

    version: "1.0.0.alpha",

    new: function (...args) {
        let [element, options] = args;

        if (typeof element === "string" || element instanceof String) {
            element = document.querySelector(element);
        }

        return new this[
            element.localName.charAt(0).toUpperCase() +
                element.localName.slice(1)
        ](element, options);
    },
};

export default Media;
