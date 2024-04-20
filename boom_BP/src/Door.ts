import { world } from '@minecraft/server'
import * as engine from 'engine';

const doorRegistry = { // An object instead of array to make IDs permenent for linking
    0: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 42, y: 97, z: -391},
                locationB: {x: 42, y: 96, z: -391}
            },
            {
                block: "lab:door",
                locationA: {x: 42, y: 95, z: -391},
                locationB: {x: 42, y: 95, z: -391}
            }
        ],
    },
    1: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 56, y: 97, z: -404},
                locationB: {x: 56, y: 96, z: -402}
            },
            {
                block: "lab:door",
                locationA: {x: 56, y: 95, z: -404},
                locationB: {x: 56, y: 95, z: -402}
            }
        ]
    },
    2: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 36, y: 97, z: -402},
                locationB: {x: 36, y: 96, z: -404}
            },
            {
                block: "lab:door",
                locationA: {x: 36, y: 95, z: -402},
                locationB: {x: 36, y: 95, z: -404}
            }
        ]
    }
}

export function toggleDoor(id: number) {
    if (doorRegistry[id].open) {
        closeDoor(id);
    } else {
        openDoor(id);
    }
}

/**
 * Will open the door
 * @param id ID of the door in number
 */
export function openDoor(id: number) {
    for (let i = 0; i<doorRegistry[id].blocks.length; i++) {
        engine.fill("air", doorRegistry[id].blocks[i].locationA, doorRegistry[id].blocks[i].locationB);
    }
    doorRegistry[id].open = true;
}

/**
 * 
 * @param id 
 */
export function closeDoor(id: number) {
    for (let i = 0; i<doorRegistry[id].blocks.length; i++) {
        engine.fill(doorRegistry[id].blocks[i].block, doorRegistry[id].blocks[i].locationA, doorRegistry[id].blocks[i].locationB)
    }
    doorRegistry[id].open = false;
}