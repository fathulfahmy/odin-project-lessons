// declaring obejct with {} literal
let hobby = prompt("What is your hobby?");
let user = {
  name: "John",
  age: 18,
  ["hobby"]: true,
};

// declaring object with constructor
let player = new Object();
player.name = "Jack";
player.age = 20;

function createRobot(name, age) {
  return {
    name,
    age,
  };
}
let robot = createRobot("Anthony", "2");

// accessing object property
let key = prompt("What do you want to know about the user?");

console.log(user.key);
// will returns undefined, dot notation cannot be used with string e.g. user."string"
console.log(user[key]);

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
