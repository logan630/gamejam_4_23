
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('neutralViolet', 'assets/high_res/neutralViolet.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'neutralViolet');
}

function update ()
{
}
