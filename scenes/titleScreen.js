import { GAME_WIDTH, GAME_HEIGHT } from './data/constants.js';

let cloudVelocity = 0.75;

export class titleScreen extends Phaser.Scene {

    constructor() {
        super({key: "titleScreen"});
    }

    preload() {
        this.load.image('stonks_titleScreen', 'assets/stonks_titleScreen.png');
        this.load.image('skyscrapers'       , 'assets/skyscrapers.png');
        this.load.image('clouds'            , 'assets/clouds.png');
        this.load.image('skyColor'          , 'assets/skyColor.jpg');
    }
    
    create() {
        this.skyColor = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'skyColor');
    
        this.clouds = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'clouds').setScale(GAME_WIDTH / 256);
    
        this.skyscrapers = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'skyscrapers').setScale(GAME_WIDTH / 256, GAME_HEIGHT / 192);
    
        this.stonks = this.physics.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'stonks_titleScreen').setScale(1.5);
        this.stonks.setVelocity(100, 200);
        this.stonks.setBounce(1, 1);
        this.stonks.setCollideWorldBounds(true);
        this.stonks.setInteractive();

        this.stonks.once("pointerup", () => this.scene.start("mainMap"), this);
    }
    
    update() {
        if((this.clouds.x >= GAME_WIDTH - 400) || (this.clouds.x <= 400))
            cloudVelocity *= -1;
        this.clouds.x += cloudVelocity;
    }
}