import titleScreen from "./scenes/titleScreen.js";
import Starty from "./scenes/start.js"
import mainMap from "./scenes/mainMap.js";


const GAME_WIDTH  = 1000;
const GAME_HEIGHT = 750;
let cloudVelocity = 0.75;




let config = {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [titleScreen, Starty, mainMap],
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: 'gameContainer',
    transparent: true
};




const game = new Phaser.Game(config);