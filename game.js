class Example extends Phaser.Scene
{
    player;
    cursors;

    preload ()
    {
        this.load.image('oMap', 'assets/pixel_assets/mapOutline.png');
        this.load.image('neutralViolet', 'assets/high_res/neutralViolet.png');
        this.load.image('dot', 'assets/pixel_assets/dot.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.addKeys(
            {'up':Phaser.Input.Keyboard.KeyCodes.W,
            'down':Phaser.Input.Keyboard.KeyCodes.S,
            'left':Phaser.Input.Keyboard.KeyCodes.A,
            'right':Phaser.Input.Keyboard.KeyCodes.D});
        const omap = this.add.image(300, 700, 'oMap');
        omap.setScale(3);
    
        this.player = this.physics.add.sprite(450, 450, 'neutralViolet');
        this.player.setScale(0.05);
        //this.cameras.main.setBounds(0, 0, 5000, 5000);
        this.physics.world.setBounds(-640,-2000,2000,2000,true,true,true,false);
        
        this.player.setCollideWorldBounds(true);

        this.cameras.main.setSize(1200, 900);

        this.cameras.main.startFollow(this.player);

        const platforms = this.physics.add.staticGroup();
        
        //Between right bathroom and main room
        platforms.create(270, 120, 'dot').setSize(140, 200);
        //Between bathrooms
        platforms.create(54, 120, 'dot').setSize(22, 200);
        //Between left bathroom and break room
        platforms.create(-282, 120, 'dot').setSize(142, 200);
        //top
        platforms.create(-572, 108, 'dot').setSize(1754, 20);
        //left side
        platforms.create(-582, 108, 'dot').setSize(10, 404);
        //bottom of break room
        platforms.create(-572, 512, 'dot').setSize(288, 20);
        //right side of break room under left hallway
        platforms.create(-284, 416, 'dot').setSize(20, 100);
        //bottom of left hallway
        platforms.create(-284, 416, 'dot').setSize(695, 20);
        //left side of main room under left hallway
        platforms.create(392, 416, 'dot').setSize(20, 96);
        //bottom of main room
        platforms.create(412, 512, 'dot').setSize(576, 20);
        //right of main room
        platforms.create(1182, 108, 'dot').setSize(20, 406);
        //bottom of main room and right of right hallway
        platforms.create(1084, 512, 'dot').setSize(100, 576);
        //left of right hallway and top right side of meeting room 
        platforms.create(964, 512, 'dot').setSize(24, 480);
        //bottom of right hallway and bottom right side of meeting room
        platforms.create(964, 1088, 'dot').setSize(150, 200);
        //top side of meeting room
        platforms.create(580, 780, 'dot').setSize(384, 20);
        //right side of meeting room
        platforms.create(560, 780, 'dot').setSize(20, 500);
        //bottom side of meeting room
        platforms.create(560, 1280, 'dot').setSize(404, 20);



        



        



        this.physics.add.collider(this.player, platforms);

        

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
