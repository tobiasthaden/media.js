import { CurrentTime } from "../Controls/CurrentTime";
import { ToggleMute } from "../Controls/ToggleMute";
import { TogglePlay } from "../Controls/TogglePlay";

const createControls = function (player) {
    if (!player.options.controls) {
        return;
    }

    let controls = {
        TogglePlay,
        CurrentTime,
        ToggleMute,
    };

    let elements = document.createElement("div");
    elements.classList.add("media-controls");

    for (let [_, Control] of Object.entries(controls)) {
        let control = new Control(player);
        elements.appendChild(control.element);
    }

    player.element.parentNode.append(elements);
};

export { createControls };
