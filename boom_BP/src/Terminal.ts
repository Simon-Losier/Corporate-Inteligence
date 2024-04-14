import {
    world,
    BlockComponentPlayerInteractEvent,
    BlockCustomComponent
} from '@minecraft/server'
import { ActionFormData } from '@minecraft/server-ui';

// Terminal UI
const terminalUI: ActionFormData = new ActionFormData()
    .title("Terminal")
    .body("[ExodusOS]\n Exodus Labs (c) 1995 \n\n\n\nWelcome to the Exodus Lab corporate environment. \n\n Hello Dr. Abigor \n\n")
    .button("Download Files");

// Events
export class onTerminalInteract implements BlockCustomComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData: BlockComponentPlayerInteractEvent) {
        terminalUI.show(eventData.player);
    }
}