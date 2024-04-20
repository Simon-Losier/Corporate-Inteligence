import { 
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    world,
    Vector3,
    Vector2
} from "@minecraft/server";
import * as engine from 'engine';
import * as door from  'Door';
const scannerRegistry = [
    {
        location: {x: 44, y: 96,z: -392},
        door: 0
    },
    {
        location: {x: 54, y: 96, z: -401},
        door: 1
    },
    {
        location: {x: 38, y: 96, z: -401},
        door: 2
    },
    {
        location: {x: 34, y: 96, z: -405},
        door: 2
    }
]



export class onIDScanInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        let idScanner = engine.getClosestObject(scannerRegistry, eventData.player.location)

        let maxPlayerDistance = 3;
        if (engine.distance(idScanner.location, eventData.player.location) < maxPlayerDistance) {
            eventData.player.playSound("sfx.keypad-a");
            door.toggleDoor(idScanner.door);
        } else {
            world.sendMessage("Scan failed");
        }
    }
}