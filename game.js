class Example extends Phaser.Scene
{
    player;
    cursors;

    preload ()
    {
        this.load.image('oMap', 'assets/pixel_assets/mapOutline.png');
        this.load.image('neutralViolet', 'assets/high_res/neutralViolet.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
        const omap = this.add.image(300, 700, 'oMap');
        omap.setScale(3);
    
        this.player = this.physics.add.sprite(400, 400, 'neutralViolet');
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.cameras.main.setSize(1200, 900);

        this.cameras.main.startFollow(this.player);

        //this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);

        //this.cameras.main.startFollow(this.player);

        //this.player.setCollideWorldBounds(true);
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(200);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config)
