import { Player } from "./Player";

export class Video extends Player {
    _getDefaults() {
        return {
            controls: true,
        };
    }
}
