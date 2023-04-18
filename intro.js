let gameScene = {};

const GAME_WIDTH  = 1200;
const GAME_HEIGHT = 900;

let config = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    scene: gameScene
};

gameScene.preload = function() {
    this.load.image('building_layout', 'assets/backgrounds/building_layout.png');
    this.load.image('neutralViolet', 'assets/high_res/neutralViolet.png');
};

gameScene.create = function() {
    this.building_layout = this.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'building_layout').setScale(1.75);
    this.neutralViolet = this.add.sprite((GAME_WIDTH / 2) - 400, GAME_HEIGHT / 2, 'neutralViolet').setScale(0.5);
};

gameScene.update = function() {
    this.neutralViolet.x++;
};

new Phaser.Game(config);
