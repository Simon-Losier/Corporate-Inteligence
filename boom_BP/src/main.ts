import {
    world, 
    BlockPermutation, 
    BlockCustomComponent,
    BlockComponentPlayerInteractEvent,
    system,
    Player
} from "@minecraft/server"
import * as terminal from 'Terminal'
import * as IDscanner from 'ID'

// Bind events
world.beforeEvents.worldInitialize.subscribe((eventData) => {

    // ID Scanner
    eventData.blockTypeRegistry.registerCustomComponent(
        'lab:id_scan_interact',
        new IDscanner.onIDScanInteract()
    );

    // Terminal
    eventData.blockTypeRegistry.registerCustomComponent(
        'lab:on_terminal_interact', 
        new terminal.onTerminalInteract()
    );
})
world.afterEvents.worldInitialize.subscribe(() => {
    terminal.setScore(0)
})