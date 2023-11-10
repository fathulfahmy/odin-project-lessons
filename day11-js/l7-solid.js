// SINGLE RESPONSIBILITY
// variables and functions are related to only one responsibility
function isGameOver() {
	if (score >= 100) {
		return true;
	} else {
		return false;
	}
}

// OPEN TO EXTEND CLOSE TO MODIFICATION
class Vehicle {
	constructor(fuelCapacity, fuelEfficiency) {
		this.fuelCapacity = fuelCapacity;
		this.fuelEfficiency = fuelEfficiency;
	}
	getRange() {
		return this.fuelCapacity * this.fuelEfficiency;
	}
}

// subclass overwrite superclass method instead of rewriting superclass method
class ElectricVehicle extends Vehicle {
	constructor(fuelCapacity, fuelEfficiency, electricCapacity) {
		super(fuelCapacity, fuelEfficiency);
		this.electricCapacity = electricCapacity;
	}
	getRange() {
		return (this.fuelCapacity + this.electricCapacity) * this.fuelEfficiency;
	}
}

// LISKOV SUBSTITUTION
class Shape {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super(width, height);
	}

	setHeight(newHeight) {
		this.height = newHeight;
	}
}

class Square extends Shape {
	// square should be extended from shape instead of rectangular
	constructor(width, height) {
		super(width, height);
	}

	setHeight(newHeight) {
		this.height = newHeight;
		this.width = newHeight;
	}
}

// INTERFACE SEGREGATION
class Bird {}
class Penguin {}
const fly = function fly() {
	console.log('I am flying');
};

Object.assign(Bird.prototype, fly);
// penguin should not own fly interface

// DEPENDENCY INJECTION
class PurchaseHandler {
	processPayment() {
		const paymentSuccess = PaymentHandler.processPayment();

		if (paymentSuccess) {
			console.log('Transaction approved');
		} else {
			console.log('Transaction denied');
		}
	}
}

class PaymentHandler {
	processPayment() {}
}
