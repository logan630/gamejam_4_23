import { VIOLET_X, VIOLET_Y, VIOLET_R } from "./data/constants.js";
import { walls } from "./data/mainPlatforms.js"
import { interactionPoints } from "./data/interactionPoints.js";
import { movementSpeeds } from "./data/movementSpeeds.js";

let info = document.getElementById('info-container');
let timer = document.getElementById('timer');
let stock = document.getElementById('stock');

export class mainMap extends Phaser.Scene {
    constructor() {
        super({key: "mainMap"});

        this.stats = {
            inCutScene: false,
            time: 55,
            stock: 15,
            dayOver: false
        };
    }
    
    preload() {
        this.load.baseURL = 'assets/';
        this.load.image('outline', 'lmao/background.png');
        this.load.image('items', 'lmao/foreground.png');
        this.load.image('dot', 'pixel_assets/dot.png');
        this.load.spritesheet("ANIMATION", "pixel_assets/characters/character.png", { frameWidth: 15, frameHeight: 24 })

        // interaction indicator
        this.load.image('indicator', 'pixel_assets/items/indicator.png');

        this.load.image('violet_sprite', 'pixel_assets/characters/leftviolet1.png');

        this.load.audio("song", "../assets/song.wav");
    }

    create() {
        let div = document.getElementById('gameContainer');
        div.style.backgroundColor = '#222226';

        info.style.display = 'block';

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

        this.song = this.sound.add("song");
        this.song.play();
    
        this.violet = this.physics.add.sprite(VIOLET_X, VIOLET_Y, 'violet_sprite');
        this.violet.setScale(3);

        //character sprite
        this.player = this.physics.add.sprite(450, 390, 'ANIMATION');
        this.player.setScale(3);
        this.physics.world.setBounds(-640, -2000, 2000, 2000, true, true, true, false);
       
       
        this.anims.create({
            key: 'left-walk',
            frameRate: 5,
            frames: this.anims.generateFrameNumbers('ANIMATION', {frames: [1,2,3,0]}),
            repeat: 0,
        })

        this.anims.create({
            key: 'right-walk',
            frameRate: 5,
            frames: this.anims.generateFrameNumbers('ANIMATION', {frames: [5, 6, 7, 4]}),
            repeat: 0,
        })

        this.anims.create({
            key: 'left-run',
            frameRate: 10,
            frames: this.anims.generateFrameNumbers('ANIMATION', {frames: [1,2,3,0]}),
            repeat: 0,
        })

        this.anims.create({
            key: 'right-run',
            frameRate: 10,
            frames: this.anims.generateFrameNumbers('ANIMATION', {frames: [5, 6, 7, 4]}),
            repeat: 0,
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

        walls.forEach((p) => {
            platforms.create(p.x, p.y, 'dot').setSize(p.xSize, p.ySize)
        });

        this.physics.add.collider(this.player, platforms);

        this.input.keyboard.on('keydown_SPACE', () => {
            // Interaction loop
            interactionPoints.forEach((p) => {
                let x_new = this.player.x;
                let y_new = this.player.y;
                if( // checks if the player is within bounds of the point
                    x_new >= p.x - p.r &&
                    x_new <= p.x + p.r &&
                    y_new >= p.y - p.r &&
                    y_new <= p.y + p.r
                ) { // runs the action if they are
                    this.stats = p.action(this.stats);
                }
            })
        }, this);
    }

    update() {
        this.player.setVelocity(0);

        timer.innerText = !this.stats.dayOver ? `Time: 0:${this.stats.time}` : "Day is over!";
        stock.innerText = `Stock Price: \$${this.stats.stock}`;

        let xSpeed = movementSpeeds.walkX;
        let ySpeed = movementSpeeds.walkY;

        if(this.cursors.left.isDown) {
            let walkLeft = "left-walk";
            if(this.cursors.shift.isDown) {
                walkLeft = "left-run";
                xSpeed = movementSpeeds.runX;
            }
            this.player.setVelocityX(-xSpeed);
            this.player.anims.play(walkLeft, true);
        }
        if(this.cursors.right.isDown) {
            let walkRight = "right-walk";
            if(this.cursors.shift.isDown) {
                walkRight = "right-run";
                xSpeed = movementSpeeds.runX;
            }
            this.player.setVelocityX(xSpeed);
            this.player.anims.play(walkRight, true);
        
        }
        if(this.cursors.up.isDown) {
            if(this.cursors.shift.isDown) {
                ySpeed = movementSpeeds.runY;
            }
            this.player.setVelocityY(-ySpeed);
        }
        if(this.cursors.down.isDown) {
            if(this.cursors.shift.isDown) {
                ySpeed = movementSpeeds.runY;
            }
            this.player.setVelocityY(ySpeed);
        }
        if(this.cursors.left.isUp || this.cursors.right.isUp) {
            this.player.anims.pause();
        }


        // Interaction potential indicator
        for(let p of interactionPoints) {
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

        if( // checks if the player is too far away from Violet for her dialogue textbox to show
            !(
                this.player.x >= VIOLET_X - VIOLET_R &&
                this.player.x <= VIOLET_X + VIOLET_R &&
                this.player.y >= VIOLET_Y - VIOLET_R &&
                this.player.y <= VIOLET_Y + VIOLET_R
            )
        ) {
            document.getElementById('textbox').style.visibility = 'hidden';
            this.stats.inCutScene = false;
        }
    }
}
