class Main extends Phaser.Scene
{
    player;
    cursors;

    preload ()
    {
        this.load.image('oMap', 'assets/pixel_assets/mapOutline.png');
        this.load.image('character', 'assets/pixel_assets/characters/leftcharacter1.png');
        this.load.image('dot', 'assets/pixel_assets/dot.png');
        this.load.image('outline', 'assets/pixel_assets/walls_and_floors/outline.png');
        this.load.image('bathroom wall', 'assets/pixel_assets/walls_and_floors/bathroom_wall.png');
        this.load.image('skyline', 'assets/pixel_assets/walls_and_floors/skyline.png');
        this.load.image('meeting room wall', 'assets/pixel_assets/walls_and_floors/meeting_room_wall.png')
    }

    create ()
    {
        let div = document.getElementById('gameContainer');
        div.style.backgroundColor = '#222226';

        this.cursors = this.input.keyboard.addKeys(
            {'up':Phaser.Input.Keyboard.KeyCodes.W,
            'down':Phaser.Input.Keyboard.KeyCodes.S,
            'left':Phaser.Input.Keyboard.KeyCodes.A,
            'right':Phaser.Input.Keyboard.KeyCodes.D});
        const omap = this.add.image(300, 700, 'oMap');
        const skyline = this.add.image(792, 40, 'skyline');

        const bathroomWallR = this.add.image(168, 76, 'bathroom wall');
        const bathroomWallL = this.add.image(-48, 76, 'bathroom wall');
        const meetingRoomWall = this.add.image(768, 724, 'meeting room wall'); 
        const outline = this.add.image(300, 628, 'outline');
        
        omap.setScale(3);
        outline.setScale(3);
        skyline.setScale(3);
        meetingRoomWall.setScale(3);
        bathroomWallR.setScale(3);
        bathroomWallL.setScale(3);
    
        this.player = this.physics.add.sprite(450, 450, 'character');
        this.player.setScale(3);
        //this.cameras.main.setBounds(0, 0, 5000, 5000);
        this.physics.world.setBounds(-640,-2000,2000,2000,true,true,true,false);
        
        this.player.setCollideWorldBounds(true);

        // zooms in the camera to focus on the player
        this.cameras.main.zoom = 1.6;

        // this.cameras.main.setSize(1200, 900);
        this.cameras.main.setSize(
            this.sys.game.canvas.width,
            this.sys.game.canvas.height
        )

        this.cameras.main.startFollow(this.player);

        const platforms = this.physics.add.staticGroup();
        
        //Between right bathroom and main room
        platforms.create(270, 120, 'dot').setSize(140, 200);
        //Between bathrooms
        platforms.create(54, 120, 'dot').setSize(22, 200);
        //Between left bathroom and break room
        platforms.create(-282, 120, 'dot').setSize(142, 200);
        //top
        platforms.create(-572, 88, 'dot').setSize(1754, 20);
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
        platforms.create(580, 750, 'dot').setSize(384, 20);
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
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    canvasStyle: `display: block; width: 100%; height: 100%; align: center; justify-content: center`,
    scene: Main,
    width: 1000,
    height: 750,
    parent: 'gameContainer',
    transparent: true
};

const game = new Phaser.Game(config)
