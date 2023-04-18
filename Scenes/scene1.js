
// You can write more code here

/* START OF COMPILED CODE */

export default class Scene1 extends Phaser.Scene {

	constructor() {
		super("Scene1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// floor_plan
		this.add.image(400, 320, "floor_plan");

		// borders
		const borders = this.add.image(108, 128, "borders");
		borders.setOrigin(0, 0);

		// outline
		this.add.image(400, 296, "outline");

		// skyline
		this.add.image(563, 100, "skyline");

		// office_window
		this.add.image(468, 104, "office_window");

		// office_window_1
		this.add.image(532, 104, "office_window");

		// office_window_2
		this.add.image(596, 104, "office_window");

		// office_window_3
		this.add.image(660, 104, "office_window");

		// bathroom_wall
		this.add.image(284, 112, "bathroom_wall");

		// bathroom_wall_1
		this.add.image(356, 112, "bathroom_wall");

		// break_room_wall
		this.add.image(156, 104, "break_room_wall");

		// meeting_room_wall
		this.add.image(556, 328, "meeting_room_wall");

		// hallway
		this.add.image(320, 176, "hallway");

		// toilet
		this.add.image(260, 127, "toilet");

		// toilet_1
		this.add.image(332, 128, "toilet");

		// sink
		this.add.image(296, 126, "sink");

		// sink_1
		this.add.image(368, 126, "sink");

		// desk
		const desk = this.add.image(502, 147, "desk");
		desk.setOrigin(0, 0);

		// vending_machine
		const vending_machine = this.add.image(214, 171, "vending_machine");
		vending_machine.setOrigin(0, 0);

		// table_long
		this.add.image(192, 144, "table_long");

		// coffee_machine
		const coffee_machine = this.add.image(185, 113, "coffee_machine");
		coffee_machine.setOrigin(0, 0);

		// coffee_cup
		const coffee_cup = this.add.image(187, 148, "coffee_cup");
		coffee_cup.setOrigin(0, 0);

		// kitchen
		const kitchen = this.add.image(108, 108, "kitchen");
		kitchen.setOrigin(0, 0);

		// rug
		const rug = this.add.image(133, 149, "rug");
		rug.angle = 90;

		// water
		this.add.image(161, 127, "water");

		// water_1
		this.add.image(171, 127, "water");

		// tv
		const tv = this.add.image(108, 213, "tv");
		tv.setOrigin(0, 0);

		// couch_side
		const couch_side = this.add.image(158, 215, "couch_side");
		couch_side.setOrigin(0, 0);

		// office_plant
		const office_plant = this.add.image(191, 231, "office_plant");
		office_plant.setOrigin(0, 0);

		// meeting_table
		this.add.image(556, 424, "meeting_table");

		// office_cactus
		this.add.image(501, 349, "office_cactus");

		// table_wide
		const table_wide = this.add.image(492, 488, "table_wide");
		table_wide.setOrigin(0, 0);

		// tissue_box
		const tissue_box = this.add.image(539, 486, "tissue_box");
		tissue_box.setOrigin(0, 0);

		// paper_stack
		const paper_stack = this.add.image(497, 486, "paper_stack");
		paper_stack.setOrigin(0, 0);

		// water_cooler
		const water_cooler = this.add.image(437, 161, "water_cooler");
		water_cooler.setOrigin(0, 0);

		// office_plant_1
		const office_plant_1 = this.add.image(439, 111, "office_plant");
		office_plant_1.setOrigin(0, 0);

		// recycling_bin
		const recycling_bin = this.add.image(503, 238, "recycling_bin");
		recycling_bin.setOrigin(0, 0);

		// table_wide_1
		const table_wide_1 = this.add.image(436, 232, "table_wide");
		table_wide_1.setOrigin(0, 0);

		// paper_stack_1
		const paper_stack_1 = this.add.image(481, 230, "paper_stack");
		paper_stack_1.setOrigin(0, 0);

		// fax_machine
		const fax_machine = this.add.image(458, 230, "fax_machine");
		fax_machine.setOrigin(0, 0);

		// printer
		const printer = this.add.image(440, 231, "printer");
		printer.setOrigin(0, 0);

		// filing_cabinet
		const filing_cabinet = this.add.image(639, 107, "filing_cabinet");
		filing_cabinet.setOrigin(0, 0);

		// filing_cabinet_1
		const filing_cabinet_1 = this.add.image(665, 107, "filing_cabinet");
		filing_cabinet_1.setOrigin(0, 0);

		// coffee_cup_1
		const coffee_cup_1 = this.add.image(544, 407, "coffee_cup");
		coffee_cup_1.setOrigin(0, 0);

		// coffee_cup_2
		const coffee_cup_2 = this.add.image(668, 105, "coffee_cup");
		coffee_cup_2.setOrigin(0, 0);

		// recycling_bin_1
		const recycling_bin_1 = this.add.image(603, 494, "recycling_bin");
		recycling_bin_1.setOrigin(0, 0);

		// arcadesprite_1
		const arcadesprite_1 = this.physics.add.sprite(252, 203, "recycling_bin");
		arcadesprite_1.body.setSize(14, 16, false);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
