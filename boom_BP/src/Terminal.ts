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

// Terminal UI
const terminalUI: ActionFormData = new ActionFormData()
    .title("Terminal")
    .body("[ExodusOS]\nExodus Labs (c) 1995 \n\nWelcome to the Exodus Labs corporate environment.\n\nType Help for list of commands \n\n\nAbigor> \n\n\n")
    .button("Transfer Files");

// Events
export class onTerminalInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        eventData.player.playSound("sfx.old-laptop")
        terminalUI.show(eventData.player);
        score++;
        world.sendMessage("Score: " + score);
        let distance: number = engine.distance(eventData.player.location, {x: 32, y:96, z: -394})
        world.sendMessage("Distance: " + distance)
    }
}