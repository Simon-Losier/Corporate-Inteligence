import { world } from "@minecraft/server";
import * as terminal from 'Terminal';
import * as IDscanner from 'ID';
let score = 0;
// Bind events
world.beforeEvents.worldInitialize.subscribe((eventData) => {
    // ID Scanner
    eventData.blockTypeRegistry.registerCustomComponent('lab:id_scan_interact', new IDscanner.onIDScanInteract());
    // Terminal
    eventData.blockTypeRegistry.registerCustomComponent('lab:on_terminal_interact', new terminal.onTerminalInteract());
});
