let gameScene = new Phaser.scene("STONKS!");

const GAME_WIDTH  = 100;
const GAME_HEIGHT = 100;

let config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    scene: gameScene
};

config.pixelArt = false;
config.antialias= true;



gameScene.preload = function preload() {
    this.load.image("windowsXPbackground_bliss", "assets/backgrounds/windowsXPbackground_bliss.jpg");
    this.load.image("fumo", "assets/pixel_assets/973852989573976114.webp");
};

gameScene.create = function() {
    this.windowsXPbackground_bliss = this.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, "windowsXPbackground_bliss");
    this.player = this.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, "fumo");
};

new Phaser.Game(config);
