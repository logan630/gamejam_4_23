import { GAME_WIDTH, GAME_HEIGHT } from "./scenes/data/constants.js";
import { titleScreen } from './scenes/titleScreen.js';
import { mainMap } from './scenes/mainMap.js';

const config = {
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
    scene: [titleScreen, mainMap],
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: 'gameContainer',
    transparent: true
};

const game = new Phaser.Game(config);
