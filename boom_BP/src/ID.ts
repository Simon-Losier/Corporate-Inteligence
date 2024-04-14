import { 
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    world
} from "@minecraft/server";

export class onIDScanInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        world.sendMessage("ID Scan");
    }
}