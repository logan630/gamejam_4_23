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

        [   // Solid objects (platforms)
            {    // Between right bathroom and main room
                x: 270, y: 120, xSize: 140, ySize: 200
            }, { // Between bathrooms
                x: 54, y: 120, xSize: 22, ySize: 200
            }, { // Between left bathroom and break room
                x: -282, y: 120, xSize: 142, ySize: 200
            }, { // top
                x: -572, y: 88, xSize: 1754, ySize: 20
            }, { // left side
                x: -582, y: 108, xSize: 10, ySize: 404
            }, { // bottom of break room
                x: -572, y: 512, xSize: 288, ySize: 20
            }, { // right side of break room under left hallway
                x: -284, y: 416, xSize: 20, ySize: 100
            }, { // bottom of left hallway
                x: -284, y: 416, xSize: 695, ySize: 20
            }, { // left side of main room under left hallway
                x: 392, y: 416, xSize: 20, ySize: 96
            }, { // bottom of main room
                x: 412, y: 512, xSize: 576, ySize: 20
            }, { // right of main room
                x: 1182, y: 108, xSize: 20, ySize: 406
            }, { // bottom of main room and right of right hallway
                x: 1084, y: 512, xSize: 100, ySize: 576
            }, { // left of right hallway and top right side of meeting room
                x: 964, y: 512, xSize: 24, ySize: 480
            }, { // bottom of right hallway and bottom right side of meeting room
                x: 964, y: 1088, xSize: 150, ySize: 200
            }, { // top side of meeting room
                x: 580, y: 750, xSize: 384, ySize: 20
            }, { // right side of meeting room
                x: 560, y: 780, xSize: 20, ySize: 500
            }, { // bottom side of meeting room
                x: 560, y: 1280, xSize: 404, ySize: 20
            }
        ].forEach((p) => {
            platforms.create(p.x, p.y, 'dot').setSize(p.xSize, p.ySize)
        });

        this.physics.add.collider(this.player, platforms);

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
