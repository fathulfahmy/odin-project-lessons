// declare array
const cars = ["proton", "perodua", "toyota"];
const bikes = new Array("suzuki", "kawasaki", "yamaha");

// change value of an element
cars[0] = "honda";

// convert array to strings
console.log(cars.toString());

// acccess array elements
for (let i = 0; i < cars.length; i++) {
	const brandName = cars[i];
	console.log(brandName);
}

cars.forEach((brandName) => {
	console.log(brandName);
});

const firstCar = cars[0];
const lastCar = cars[cars.length - 1];

// add elements to array
cars.push("nissan");
cars[cars.length] = "accura";

// check data type is array
Array.isArray(cars);
cars instanceof Array;
