import { world } from "@minecraft/server";
export class onIDScanInteract {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData) {
        world.sendMessage("ID Scan");
    }
}
