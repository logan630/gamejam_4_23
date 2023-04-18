import { VIOLET_X, VIOLET_Y } from "./constants.js";

// An array of JS objects that define player-environment interactions
// Fields:
// name: string - the name of the point; for debugging purposes
// x: number (integer) - the x coordinate of the point
// y: number (integer) - the y coordinate of the point
// r: number (integer) - the distance the player can be from the point to trigger it
// action: () -> () - a void function w/ no parameters that modifies stats and the environment
export const interactionPoints = [
    {
        name: 'something', x: 420, y: 420, r: 75,
        action: (stats) => {
            let div = document.getElementById('gameContainer');
            div.style.backgroundColor = '#b00b69';
            return stats;
        }
    },
    {
        name: 'something else', x: 800, y: 420, r: 75,
        action: (stats) => {
            let div = document.getElementById('gameContainer');
            div.style.backgroundColor = '#420690';
            return stats;
        }
    },
    {
        name: 'violet', x: VIOLET_X, y: VIOLET_Y, r: 50,
        action: (stats) => {
            let div = document.getElementById('gameContainer');
            div.style.backgroundColor = '#aa44aa';
            return stats;
        }
    }
];