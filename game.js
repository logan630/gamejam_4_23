const GAME_WIDTH  = 1000;
const GAME_HEIGHT = 750;
let cloudVelocity = 0.75;



class titleScreen extends Phaser.Scene {
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

        this.stonks.once("pointerup", function(pointer) {
            this.scene.start("mainMap");
        }, this);
    }
    
    update() {
        if((this.clouds.x >= GAME_WIDTH - 400) || (this.clouds.x <= 400))
            cloudVelocity *= -1;
        this.clouds.x += cloudVelocity;
    }
}




class Main extends Phaser.Scene {
    player;
    cursors;

    preload() {
        this.load.image('outline', 'assets/lmao/background.png');
        this.load.image('items', 'assets/lmao/foreground.png');
        this.load.image('character', 'assets/pixel_assets/characters/leftcharacter1.png');
        this.load.image('dot', 'assets/pixel_assets/dot.png');
    }

    create() {
        let div = document.getElementById('gameContainer');
        div.style.backgroundColor = '#222226';

        this.cursors = this.input.keyboard.addKeys(
            {'up':Phaser.Input.Keyboard.KeyCodes.W,
            'down':Phaser.Input.Keyboard.KeyCodes.S,
            'left':Phaser.Input.Keyboard.KeyCodes.A,
            'right':Phaser.Input.Keyboard.KeyCodes.D});
       
       
            const outline = this.add.image(300, 628, 'outline');
            const items = this.add.image(297, 670, 'items');
        
        outline.setScale(3);
        items.setScale(3);
    

        this.player = this.physics.add.sprite(450, 450, 'character');
        this.player.setScale(3);
        this.physics.world.setBounds(-640, -2000, 2000, 2000, true, true, true, false);
        
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

    update() {
        this.player.setVelocity(0);

        if(this.cursors.left.isDown)
            this.player.setVelocityX(-200);
        else if(this.cursors.right.isDown)
            this.player.setVelocityX(200);

        if(this.cursors.up.isDown)
            this.player.setVelocityY(-200);
        else if(this.cursors.down.isDown)
            this.player.setVelocityY(200);
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
    scene: [titleScreen, mainMap]
    canvasStyle: `display: block; width: 100%; height: 100%; align: center; justify-content: center`,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: 'gameContainer',
    transparent: true
};

const game = new Phaser.Game(config);
