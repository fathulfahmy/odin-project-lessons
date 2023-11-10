const playerOne = {
	name: 'John',
	age: 18,
};
const playerTwo = {
	name: 'Jack',
	age: 20,
};

// can be written as
function Player(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function () {
		console.log(this.name);
	};
}

const player1 = new Player('John', 18);
const player2 = new Player('Jack', 20);
player1.sayName();

// player constructor can be edited
Player.prototype.sayAge = function () {
	console.log(this.age);
};
player2.sayAge();

console.log(Player.prototype === player1.__proto__);
// returns true however .proto and [[Prototype]] are deprecated

function Defender(name) {
	this.name = name;
}
Defender.prototype.saySide = function () {
	console.log('Defending!');
};

Object.setPrototypeOf(Player.prototype, Defender.prototype);
// player inherit defender
console.log(player1.saySide());
console.log(Object.getPrototypeOf(Player.prototype));
