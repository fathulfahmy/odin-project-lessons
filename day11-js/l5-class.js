// basic class creation
class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHi() {
		console.log(`Hello I am ${this.name}`);
	}
}
const user = new User("John", 18);

// since class is a function, func expression or named func expression is possible
let Player = class {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
};

// dynamic class creation by wrapping class in a function
function createEnemy() {
	return class {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		sayHi() {
			console.log(`Greetings I am ${this.name}`);
		}
	};
}

const Enemy = createEnemy();
new Enemy("Demon", 180).sayHi();
