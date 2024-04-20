import {
    world,
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent,
    Vector3,
    Player,
    TitleDisplayOptions,
    system
} from '@minecraft/server'
import { ActionFormData } from '@minecraft/server-ui';
import * as engine from 'engine';

let score: number = 0;
let state: string = "collect" // States: collect, escape
// Terminal Registration
const terminalRegistry = [
    {
        "name": "Abigor",
        "location": {x: 32, y:96, z: -394},
        "activated": false
    },
    {
        "name": "Alias",
        "location": {x: 32, y:96, z:-414},
        "activated": false
    },
    {
        "name": "John",
        "location": {x: 21, y: 96, z:-394},
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
            score++;
        }
        createUI(terminal.name, "Transfer Files").show(eventData.player);
        if (!terminal.activated) {
            let scoreText: string = "updateIntel Found: " + score;
            eventData.player.onScreenDisplay.setTitle(scoreText, {
                stayDuration: 0,
                fadeInDuration: 0,
                fadeOutDuration: 0
            });
            if (score >= terminalRegistry.length) {
                system.runTimeout(() => {
                    eventData.player.onScreenDisplay.setTitle("Contract Completed");
                    eventData.player.onScreenDisplay.updateSubtitle("All Inteligence Collected");
                }, 40)
            } else {
                eventData.player.onScreenDisplay.setActionBar("Inteligence Collected, " + (terminalRegistry.length - score) + " remaining");
            }
        }
        terminal.actived = true;
    }
}