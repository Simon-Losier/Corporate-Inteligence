import { Vector3 } from "@minecraft/server";


/**
 * Checks if the location coordinate is in the area of coordinate1 and coordinate 2
 * @param coordinate1 Point one of the area
 * @param coordinate2 Point two of the area
 * @param location 
 * @returns boolean
 */
function collision(coordinate1: Vector3, coordinate2: Vector3, location: Vector3) {
    return false;
}

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