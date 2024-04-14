import { ActionFormData } from '@minecraft/server-ui';
// Terminal UI
const terminalUI = new ActionFormData()
    .title("Terminal")
    .body("[ExodusOS]\n Exodus Labs (c) 1995 \n\n\n\nWelcome to the Exodus Lab corporate environment. \n\n Hello Dr. Abigor \n\n")
    .button("Download Files");
// Events
export class onTerminalInteract {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(eventData) {
        terminalUI.show(eventData.player);
    }
}
