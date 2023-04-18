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






class mainMap extends Phaser.Scene {
    constructor() {
        super({key: "mainMap"});
    }
    
    preload() {
        this.load.baseURL = 'assets/';
        this.load.image('outline', 'lmao/background.png');
        this.load.image('items', 'lmao/foreground.png');
        this.load.image('character', 'pixel_assets/characters/leftcharacter1.png');
        this.load.image('dot', 'pixel_assets/dot.png');
        this.load.atlas('charAnimated', 'pixel_assets/characters/character.png', 'pixel_assets/characters/character.json')
        this.load.spritesheet("ANIMATION", "pixel_assets/characters/character.png", { frameWidth: 15, frameHeight: 24 })

        // interaction indicator
        this.load.image('indicator', 'pixel_assets/items/indicator.png');
    }

    create() {
        let div = document.getElementById('gameContainer');
        div.style.backgroundColor = '#222226';

        this.cursors = this.input.keyboard.addKeys(
            {'up':Phaser.Input.Keyboard.KeyCodes.W,
            'down':Phaser.Input.Keyboard.KeyCodes.S,
            'left':Phaser.Input.Keyboard.KeyCodes.A,
            'right':Phaser.Input.Keyboard.KeyCodes.D,
            'space':Phaser.Input.Keyboard.KeyCodes.SPACE,
            'shift':Phaser.Input.Keyboard.KeyCodes.SHIFT});
       
       
            const outline = this.add.image(300, 628, 'outline');
            const items = this.add.image(297, 670, 'items');
        
        outline.setScale(3);
        items.setScale(3);
    

        //character sprite
        this.player = this.physics.add.sprite(450, 390, 'ANIMATION');
        this.player.setScale(3);
        this.physics.world.setBounds(-640, -2000, 2000, 2000, true, true, true, false);
       
       
        this.anims.create({
            key: 'left',
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('ANIMATION', {start: 0, end: 3}),
            repeat: -1,
        })

        this.anims.create({
            key: 'right',
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('ANIMATION', {start: 4, end: 7}),
            repeat: -1,
        })

       
                    

     



        // sprite for the interaction indicator
        this.indicator = this.physics.add.sprite(this.player.x, this.player.y, 'indicator');
        this.indicator.setScale(2);
        this.indicator.visible = false;
        
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
            //bathroom hallway
            {    // Between right bathroom and main room
                x: 270, y: 120, xSize: 139, ySize: 158
            }, { // Between bathrooms
                x: 55, y: 120, xSize: 18, ySize: 158
            }, { // Between bathrooms wall
                x: -17, y: 200, xSize: 162, ySize: 78
            }, { // right of bathrooms wall
                x: 199, y: 200, xSize: 100, ySize: 78
            }, { // Between left bathroom and break room
                x: -281, y: 120, xSize: 138, ySize: 158
            }, { // Between left bathroom and break room wall
                x: -281, y: 200, xSize: 210, ySize: 78
            }, { // vending machine
                x: -251, y: 212, xSize: 45, ySize: 78
            }, { // bottom of left hallway
                x: -281, y: 416, xSize: 690, ySize: 20


            }, { // top
                x: -572, y: 70, xSize: 1754, ySize: 16


            //break room
            }, { // left side
                x: -582, y: 108, xSize: 7, ySize: 404
            }, { // top of break room
                x: -572, y: 70, xSize: 300, ySize: 40
            }, { // bottom of break room
                x: -572, y: 512, xSize: 288, ySize: 20
            }, { // right side of break room under left hallway
                x: -281, y: 416, xSize: 20, ySize: 100
            }, { // couch
                x: -320, y: 440, xSize: 42, ySize: 60
            }, { // plant
                x: -419, y: 389, xSize: 42, ySize: 100
            }, { // tv
                x: -572, y: 383, xSize: 42, ySize: 100
            }, { // kithcen
                x: -572, y: 87, xSize: 27, ySize: 100
            }, { // kithcen table
                x: -353, y: 87, xSize: 70, ySize: 123

            
            //main room
            }, { // bottom of main room
                x: 412, y: 512, xSize: 576, ySize: 20
            }, { // right of main room
                x: 1183, y: 108, xSize: 20, ySize: 406
            }, { // water cooler
                    x: 400, y: 227, xSize: 50, ySize: 51
            }, { // plant
                    x: 400, y: 60, xSize: 50, ySize: 51
            }, { // filing cabinets
                    x: 1020, y: 60, xSize: 160, ySize: 51
            }, { // bottom of main room and right of right hallway
                x: 1087, y: 512, xSize: 100, ySize: 576
            }, { // main room desk
                x: 400, y: 434, xSize: 202, ySize: 20
            }, { // main room recycle bin
                x: 600, y: 452, xSize: 56, ySize: 30
            
            }, { // desks
                x: 613, y: 217, xSize: 414, ySize: 73
            }, { // desk wall -1
                x: 650, y: 217, xSize: 37, ySize: 100
            }, { // desk wall 0
                x: 676, y: 186, xSize: 76, ySize: 100
            }, { // desk wall 1
                x: 745, y: 217, xSize: 87, ySize: 100
            }, { // desk wall 2
                x: 820, y: 186, xSize: 76, ySize: 100
            }, { // desk wall 3
                x: 890, y: 217, xSize: 65, ySize: 100
            }, { // desk wall 4
                x: 950, y: 186, xSize: 38, ySize: 100

            
            //meeting room
            }, { // left of right hallway and top right side of meeting room
                x: 967, y: 512, xSize: 18, ySize: 438
            }, { // bottom of right hallway and bottom right side of meeting room
                x: 967, y: 1088, xSize: 150, ySize: 200
            }, { // top side of meeting room
                x: 580, y: 738, xSize: 384, ySize: 20
            }, { // left side of meeting room
                x: 557, y: 780, xSize: 20, ySize: 500
            }, { // bottom side of meeting room
                x: 560, y: 1280, xSize: 404, ySize: 20
            }, { // table
                x: 560, y: 1200, xSize: 209, ySize: 60
            }, { // plant
                x: 580, y: 720, xSize: 50, ySize: 60
            }, { // desk
                x: 724, y: 920, xSize: 96, ySize: 155
            }, { // chair
                x: 754, y: 902, xSize: 39, ySize: 180
            }, { // desk side
                x: 700, y: 940, xSize: 144, ySize: 120
            }
        ].forEach((p) => {
            platforms.create(p.x, p.y, 'dot').setSize(p.xSize, p.ySize)
        });

        this.physics.add.collider(this.player, platforms);
    }



    // An array of JS objects that define player-environment interactions
    // Fields:
    // name: string - the name of the point; for debugging purposes
    // x: number (integer) - the x coordinate of the point
    // y: number (integer) - the y coordinate of the point
    // r: number (integer) - the distance the player can be from the point to trigger it
    // action: () -> () - a void function w/ no parameters that modifies stats and the environment
    static interactionPoints = [
        {
            name: 'something', x: 420, y: 420, r: 75,
            action: () => {
                let div = document.getElementById('gameContainer');
                div.style.backgroundColor = '#b00b69';
            }
        },
        {
            name: 'something else', x: 800, y: 420, r: 75,
            action: () => {
                let div = document.getElementById('gameContainer');
                div.style.backgroundColor = '#420690';
            }
        }
    ];

    // for testing; to be removed
    static makeBlack() {
        let div = document.getElementById('gameContainer');
        div.style.backgroundColor = '#222226';
    }


    static movementSpeeds = {
        walkX: 200,
        walkY: 200,
        runX: 325,
        runY: 325
    }


    update() {
        this.player.setVelocity(0);

        let xSpeed = mainMap.movementSpeeds.walkX;
        let ySpeed = mainMap.movementSpeeds.walkY

        if(this.cursors.left.isDown) {
            this.player.anims.play("left");
            if(this.cursors.shift.isDown) {
                xSpeed = mainMap.movementSpeeds.runX;
            }
            this.player.setVelocityX(-xSpeed);
        
        }
        if(this.cursors.right.isDown) {
            this.player.anims.play("right");
            if(this.cursors.shift.isDown) {
                xSpeed = mainMap.movementSpeeds.runX;
            }
            this.player.setVelocityX(xSpeed);
        
        }
        if(this.cursors.up.isDown) {
            if(this.cursors.shift.isDown) {
                ySpeed = mainMap.movementSpeeds.runY;
            }
            this.player.setVelocityY(-ySpeed);
        }
        if(this.cursors.down.isDown) {
            if(this.cursors.shift.isDown) {
                ySpeed = mainMap.movementSpeeds.runY;
            }
            this.player.setVelocityY(ySpeed);
        }

        // Interaction potential indicator
        for(let p of mainMap.interactionPoints) {
            let x_new = this.player.x;
            let y_new = this.player.y;
            if( // checks if the player is within bounds of the point
                x_new >= p.x - p.r &&
                x_new <= p.x + p.r &&
                y_new >= p.y - p.r &&
                y_new <= p.y + p.r
            ) {
                // displays ! above their head
                this.indicator.x = x_new;
                this.indicator.y = y_new - 50;
                this.indicator.visible = true;
                break;
            } else {
                // out of range; remove the indicator
                this.indicator.visible = false;
            }
        }

        if(this.cursors.space.isDown) {
            mainMap.makeBlack(); // for testing; to be removed

            // Interaction loop
            mainMap.interactionPoints.forEach((p) => {
                let x_new = this.player.x;
                let y_new = this.player.y;
                if( // checks if the player is within bounds of the point
                    x_new >= p.x - p.r &&
                    x_new <= p.x + p.r &&
                    y_new >= p.y - p.r &&
                    y_new <= p.y + p.r
                ) { // runs the action if they are
                    p.action();
                }
            })
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
    scene: [titleScreen, mainMap],
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: 'gameContainer',
    transparent: true
};

const game = new Phaser.Game(config);
