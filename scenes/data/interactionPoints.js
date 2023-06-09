import { VIOLET_X, VIOLET_Y, VIOLET_R } from "./constants.js";

// An array of JS objects that define player-environment interactions
// Fields:
// name: string - the name of the point; for debugging purposes
// x: number (integer) - the x coordinate of the point
// y: number (integer) - the y coordinate of the point
// r: number (integer) - the distance the player can be from the point to trigger it
// action: () -> () - a void function w/ no parameters that modifies stats and the environment
export const interactionPoints = [
    {
        name: 'violet', x: VIOLET_X, y: VIOLET_Y, r: VIOLET_R,
        action: (stats) => {
            let div = document.getElementById('textbox');
            if(stats.inCutScene) {
                div.style.visibility = 'hidden';
            } else {
                div.style.visibility = 'visible';
            }
            stats.inCutScene = !stats.inCutScene;
            return stats;
        }
    },

    {
        name: 'waterCooler', x: 442, y: 247, r: 64,
        action: (stats) => {
            if(stats.time > 0) {
                stats.time -= 5;
                stats.stock += 1;
                if(stats.time === 0) stats.dayOver = true;
            } else {
                stats.dayOver = true;
            }
            return stats;
        }
    },
    {
        name: 'toilet', x: -143, y: 120, r: 50,
        action: (stats) => {
            stats.stock += 100;
            return stats;
        }
    },
    {
        name: 'vendingMachine', x: -228, y: 289, r: 50,
        action: (stats) => {
            stats.stock += Math.round(Math.random() * (10) - 5);
            return stats;
        }
    }
];