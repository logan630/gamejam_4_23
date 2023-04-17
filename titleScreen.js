const GAME_WIDTH  = 1200;
const GAME_HEIGHT = 900;

let config = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

function preload() {
    this.load.image('stonks_titleScreen', 'assets/stonks_titleScreen.png');
    this.load.image('skyscrapers'       , 'assets/skyscrapers.jpg');
}

function create() {
    this.skyscrapers = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'skyscrapers').setScale(GAME_WIDTH / 256, GAME_HEIGHT / 192);

    this.logo = this.physics.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'stonks_titleScreen').setScale(1.5);
    this.logo.setVelocity(100, 200);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);
}

new Phaser.Game(config);
