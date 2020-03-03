import { Control } from "./Control";

export class TogglePlay extends Control {
    options(player) {
        return {
            element: "button",
            classList: "media-controls-play/pause",
            on: {
                click: (event) => player.togglePlay(event),
            },
        };
    }

    mounted(player) {
        player.on("play", () => {
            this.element.classList.add("media-controls-pause");
            this.element.classList.remove("media-controls-play");
        });
        player.on("pause", () => {
            this.element.classList.add("media-controls-play");
            this.element.classList.remove("media-controls-pause");
        });
    }
}
