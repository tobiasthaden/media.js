import { Control } from "./Control";

export class CurrentTime extends Control {
    options(player) {
        return {
            element: "span",
            classList: "media-controls-time",
        };
    }

    mounted(player) {
        let printTime = () => {
            let seconds = player.get("currentTime");
            let minutes = Math.floor(seconds / 60);
            minutes = minutes >= 10 ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = seconds >= 10 ? seconds : "0" + seconds;
            this.element.innerText = minutes + ":" + seconds;
        };

        player.on("timeupdate", printTime);

        printTime();
    }
}
