import { 
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    world,
    Vector3,
    Vector2,
} from "@minecraft/server";
import * as engine from 'engine';
import * as door from  'Door';
import * as terminal from 'Terminal';

const scannerRegistry = [
    {
        location: {x: 44, y: 96,z: -392},
        door: "tom_a",
        level: 0
    },
    {
        location: {x: 40, y: 96, z: -392},
        door: "tom_a",
        level: 0
    },
    {
        location: {x: 54, y: 96, z: -401},
        door: 1,
        level: 0
    },
    {
        location: {x: 38, y: 96, z: -401},
        door: 2,
        level: 0
    },
    {
        location: {x: 34, y: 96, z: -405},
        door: 2,
        level: 0
    },
    {
        location: {x: 48, y: 96, z: -392},
        door: "john_j",
        level: 0
    },
    {
        location: {x: 52, y: 96, z: -392 }, // 52 96 -392
        door: "john_j",
        level: 0
    },
    { 
        location: {x: 44, y: 96, z: -397},
        door: "s_archives",
        level: 0
    },
    {
        location: {x: 48, y: 96, z: -401},
        door: "s_archives",
        level: 4
    },
    {
        location: {x: 30, y:96, z: -401},
        door: "abigor",
        level: 0
    },
    {
        location: {x: 30, y: 96, z: -397},
        door: "abigor",
        level: 0
    },
    {
        location: {x: 30, y: 96, z: -405},
        door: "alex_j",
        level: 0
    },
    {
        location: {x: 32, y: 96, z: -409},
        door: "alex_j",
        level: 0
    },
    {
        location: {x: 20, y: 96, z: -401},
        door: "ava_g",
        level: 0
    },
    {
        location: {x: 20, y: 96, z: -397},
        door: "ava_g",
        level: 0
    },
    {
        location: {x: 20, y: 96, z: -405},
        door: "ethan_b",
        level: 0
    }
]



export class onIDScanInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        let idScanner = engine.getClosestObject(scannerRegistry, eventData.player.location)

        let maxPlayerDistance = 3;
        if (engine.distance(idScanner.location, eventData.player.location) < maxPlayerDistance) { // Check distance
            eventData.player.playSound("sfx.keypad-a");
            if (terminal.getScore() >= idScanner.level) {
                door.toggleDoor(idScanner.door);
            } else {
                world.sendMessage("Requires Intel Level: " + idScanner.level);
            }
        } else {
            world.sendMessage("Scan failed: Too far");
        }
    }
}