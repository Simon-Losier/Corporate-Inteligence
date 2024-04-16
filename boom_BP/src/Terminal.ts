import {
    world,
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    Vector3,
    Player
} from '@minecraft/server'
import { ActionFormData } from '@minecraft/server-ui';
import * as engine from 'engine';

let score: number = 0;

// Terminal Registration
const terminalRegistry = [
    {
        "name": "Abigor",
        "location": {x: 32, y:96, z: -394},
        "activated": false
    },
    {
        "name": "Simon",
        "location": {x: 32, y:96, z:-414},
        "activated": false
    }
]

// Terminal UI
/**
 * Creates a UI const for terminal
 * @param name 
 */
function createUI(name: String, buttonName: String) {
    const terminalUI: ActionFormData = new ActionFormData()
        .title("Terminal")
        .body(`[ExodusOS]\nExodus Labs (c) 1995 \n\nWelcome to the Exodus Labs corporate environment.\n\nType Help for list of commands \n\n\n${name}> \n\n\n`)
        .button("Transfer Files")
    return terminalUI;
}

// Events
export class onTerminalInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        let terminal = engine.getClosestObject(terminalRegistry, eventData.player.location);
        if (!terminal.activated) {
            eventData.player.playSound("sfx.old-laptop", {location: terminal.location});
            terminal.activated = true;
        }
        createUI(terminal.name, "Transfer Files").show(eventData.player);
    }
}