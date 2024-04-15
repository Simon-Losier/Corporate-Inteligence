import { 
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    world,
    Vector3,
    Vector2
} from "@minecraft/server";

export class onIDScanInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        world.sendMessage("ID Scan");
        eventData.player.playSound("sfx.keypad-a");
    }
}