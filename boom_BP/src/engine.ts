import { Vector3, world, Player } from "@minecraft/server";


// Vector Utilities
/**
 * Will return the distance of two vectore points.
 * @param vectorA Cooridnate one
 * @param vectorB Coordinate two
 * @returns Distance
 */
export function distance(vectorA: Vector3, vectorB: Vector3) {
    let diffX: number = vectorA.x - vectorB.x;
    let diffY: number = vectorA.y - vectorB.y;
    let diffZ: number = vectorA.z - vectorB.z;
    let distance: number = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2) + Math.pow(diffZ, 2));
    return distance;
}

/**
 * Returns the closest object to a specified location. 
 * @param listOfObjects Array of Objects with .position
 * @param location Player position
 * @returns Closest object reference
 */
export function getClosestObject(listOfObjects: Array<any>, location: Vector3) {
    let closestObject;
    let currentDistance: number = 1000;
    for (let i = 0; i<listOfObjects.length; i++) {
        let distanceFromLocation: number = distance(listOfObjects[i].location, location);
        if (distanceFromLocation < currentDistance) {
            currentDistance = distanceFromLocation;
            closestObject = listOfObjects[i]
        }
    }
    return closestObject;
}

// Title Utilities
/**
 * Sends a visible title with the goal to display a title to the player
 * @param player Player to send title to
 */
export function sendTitle(player: Player) {
    
}

/**
 * Sends an invisible title with the goal to update UI
 * @param player Player to send title to
 */
export function sendUITitle(player: Player) {

}

// Block placing utilities
export function setblock(block:String, locationA: Vector3, locationB: Vector3) {
    throw "Not implemented"
}

export function destroyBlock(location: Vector3) {
    throw "Not implemented"
}

export function destroyBlocks(locationA: Vector3, locationB: Vector3) {
    throw "Not implemented"
}

export function helloWorld() {
    world.sendMessage("Hello world");
}