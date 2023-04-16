import Phaser from 'phaser'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: 100,
    height: 100,
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    scene: []
}

const game = new Phaser.Game(config);
