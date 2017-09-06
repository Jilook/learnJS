var vaz2102 = {
	color: "blue",
	yearStart: 2001,
	passenger: 4,
	transmission: "manual",
	engineStatus: false,
	fuel: 0,
	
	start: function () {
		if (this.fuel > 0) {
		this.engineStatus = true;
		console.log('Двигатель завден в баке: ' + this.fuel + " литров бензина");
	 	} else {
	 		console.log('Залейте бензин');
	 	}
	},

	stop: function () {
		this.engineStatus = false;
		console.log('Двигатель заглушен');
	},

	drive: function () {
		if (this.engineStatus) {
			console.log('Полегче шумахер, не картошку везешь');
			this.fuel = this.fuel - 1;
			if (this.fuel == 0) {
				console.log('Бензин закончен');
				this.stop();
			} else {
				console.log('После поездки бензина в баке: ' + this.fuel + ' литров');
			}
			
		} else {
			console.log('Друже, ну заводи уже и погнали');
		} 
	},

	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
		/* body... */
	}
};

vaz2102.addFuel(2);
vaz2102.start();
vaz2102.drive();
vaz2102.stop();
vaz2102.start();
vaz2102.drive();
vaz2102.addFuel(1);
vaz2102.drive();
