var vaz2102 = {
	color: "blue",
	yearStart: 2001,
	passenger: 4,
	transmission: "manual"
};

var vaz2106 = {
	color: "red",
	yearStart: 2004,
	passenger: 4,
	transmission: "auto"
};

function buyOrNotbuy (argument) {
	if (argument.yearStart > 2000 && argument.transmission == "manual") {
		return true;
	}
	else {
		return false;
	}
}

buyOrNotbuy(vaz2106) ? console.log('Покупаем') : console.log('не покупаем');
