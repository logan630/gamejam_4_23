const GAME_WIDTH  = 1200;
const GAME_HEIGHT = 900;
let cloudVelocity = 0.75;

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
        create: create,
        update: update
    }
};

function preload() {
    this.load.image('stonks_titleScreen', 'assets/stonks_titleScreen.png');
    this.load.image('skyscrapers'       , 'assets/skyscrapers.png');
    this.load.image('clouds'            , 'assets/clouds.png');
    this.load.image('skyColor'          , 'assets/skyColor.jpg');
}

function create() {
    this.skyColor = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'skyColor');

    this.clouds = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'clouds').setScale(GAME_WIDTH / 256);

    this.skyscrapers = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'skyscrapers').setScale(GAME_WIDTH / 256, GAME_HEIGHT / 192);

    this.logo = this.physics.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'stonks_titleScreen').setScale(1.5);
    this.logo.setVelocity(100, 200);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);
}

function update() {
    if((this.clouds.x >= GAME_WIDTH - 400) || (this.clouds.x <= 400))
        cloudVelocity *= -1;
    this.clouds.x += cloudVelocity;
}

new Phaser.Game(config);
