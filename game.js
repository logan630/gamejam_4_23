import Phaser from 'phaser'
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', './assets/sky.png');
    this.load.image('violet-neutral', './assets/violet-neutral.png');
}

function create ()
{
   this.add.image(400,300,'violet-neutral');
   this.add.image(400, 300, 'sky');
}

function update ()
{
}