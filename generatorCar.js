var brandCar = [ "VW", "VAZ", "Opel", "Nissan"];
var transmissionCar = [ "механической" , "автоматической"];
var typeCar = ["автобус", "седан", "минивен", "пикап"];

// Конструктор объекта Car
function constructCar(brandCar, transmissionCar, typeCar, quantyCar) {
	this.brandCar = brandCar;
	this.transmissionCar = transmissionCar;
	this.typeCar = typeCar;
	this.quantyCar = quantyCar;
}
// функция содания машины
function makeCar() {
	var randBrand = brandCar[Math.floor(Math.random()*brandCar.length)];
	var randTransmission = transmissionCar[Math.floor(Math.random()*transmissionCar.length)];
	var randType = typeCar[Math.floor(Math.random()*typeCar.length)];
	var randQuanty = Math.floor(Math.random()* 20000) + 10000;
	newCar = new constructCar(randBrand, randTransmission, randType, randQuanty);
	
} 
function sellCar() {
	console.log('Сегодня мы продаем шикарный ' + newCar.typeCar + ' марки ' + newCar.brandCar);
	console.log('С ' + newCar.transmissionCar + ' коробкой передач! По цене, всего каких то = ' + newCar.quantyCar + '$');
} 

makeCar();
console.log(newCar);
sellCar(); 
