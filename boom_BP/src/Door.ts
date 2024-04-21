import { world } from '@minecraft/server'
import * as engine from 'engine';

const doorRegistry = { // An object instead of array to make IDs permenent for linking
    tom_a: {
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
    },
    john_j: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 50, y: 97, z: -391},
                locationB: {x: 50, y: 96, z: -391}
            }, // 50 97 -391
            {
                block: "lab:door",
                locationA: {x: 50, y: 95, z: -391},
                locationB: {x: 50, y: 95, z: -391}
            }
        ]
    },
    s_archives: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 47, y: 97, z: -399},
                locationB: {x: 45, y: 96, z: -399}
            },
            {
                block: "lab:door",
                locationA: {x: 47, y: 95, z: -399},
                locationB: {x: 45, y: 95, z: -399}
            }
        ]
    },
    abigor: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 31, y: 97, z: -399},
                locationB: {x: 31, y: 96, z: -399}
            }, 
            {
                block: "lab:door",
                locationA: {x: 31, y: 95, z: -399},
                locationB: {x: 31, y: 95, z: -399}
            }
        ]
    },
    alex_j: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 31, y: 97, z: -407},
                locationB: {x: 31, y: 96, z: -407},
            },
            {
                block: "lab:door",
                locationA: {x: 31, y: 95, z: -407},
                locationB: {x: 31, y: 95, z: -407},
            }
        ]
    },
    ava_g: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 21, y: 97, z: -399},
                locationB: {x: 21, y: 96, z: -399}
            },
            {
                block: "lab:door",
                locationA: {x: 21, y: 95, z: -399},
                locationB: {x: 21, y: 95, z: -399}
            }
        ]
    },
    ethan_b: {
        open: false,
        blocks: [
            {
                block: "black_concrete",
                locationA: {x: 21, y: 97, z: -407},
                locationB: {x: 21, y: 96, z: -407},
            },
            {
                block: "lab:door",
                locationA: {x: 21, y: 95, z: -407},
                locationB: {x: 21, y: 95, z: -407}
            }
        ]
    }
}

export function toggleDoor(id: number|string) {
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
export function openDoor(id: number|string) {
    for (let i = 0; i<doorRegistry[id].blocks.length; i++) {
        engine.fill("air", doorRegistry[id].blocks[i].locationA, doorRegistry[id].blocks[i].locationB);
    }
    doorRegistry[id].open = true;
}

/**
 * 
 * @param id 
 */
export function closeDoor(id: number|string) {
    for (let i = 0; i<doorRegistry[id].blocks.length; i++) {
        engine.fill(doorRegistry[id].blocks[i].block, doorRegistry[id].blocks[i].locationA, doorRegistry[id].blocks[i].locationB)
    }
    doorRegistry[id].open = false;
}