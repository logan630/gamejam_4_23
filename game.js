const GAME_WIDTH  = 1200;
const GAME_HEIGHT = 900;
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
        this.load.image('oMap', 'assets/pixel_assets/mapOutline.png');
        this.load.image('character', 'assets/pixel_assets/characters/leftcharacter1.png');
        this.load.image('dot', 'assets/pixel_assets/dot.png');
        this.load.image('outline', 'assets/pixel_assets/walls_and_floors/outline.png');
        this.load.image('bathroom wall', 'assets/pixel_assets/walls_and_floors/bathroom_wall.png');
        this.load.image('skyline', 'assets/pixel_assets/walls_and_floors/skyline.png');
        this.load.image('meeting room wall', 'assets/pixel_assets/walls_and_floors/meeting_room_wall.png')
        
    }

    create() {
        this.cursors = this.input.keyboard.addKeys({
            'up':Phaser.Input.Keyboard.KeyCodes.W,
            'down':Phaser.Input.Keyboard.KeyCodes.S,
            'left':Phaser.Input.Keyboard.KeyCodes.A,
            'right':Phaser.Input.Keyboard.KeyCodes.D
        });
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
        this.physics.world.setBounds(-640, -2000, 2000, 2000, true, true, true, false);
        
        this.player.setCollideWorldBounds(true);

        this.cameras.main.setSize(1200, 900);

        this.cameras.main.startFollow(this.player);

        //this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);

        //this.cameras.main.startFollow(this.player);

        //this.player.setCollideWorldBounds(true);
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
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [titleScreen, mainMap]
};

const game = new Phaser.Game(config)
