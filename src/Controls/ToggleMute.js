import { Control } from "./Control";

export class ToggleMute extends Control {
    options(player) {
        return {
            element: "button",
            classList: "media-controls-mute/unmute",
            on: {
                click: (event) => player.toggleMute(event),
            },
        };
    }

    mounted(player) {
        player.on("volumechange", (event) => {
            if (event.target.muted) {
                this.element.classList.add("media-controls-mute");
                this.element.classList.remove("media-controls-unmute");
            } else {
                this.element.classList.add("media-controls-unmute");
                this.element.classList.remove("media-controls-mute");
            }
        });
    }
}
