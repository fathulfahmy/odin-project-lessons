// basic class creation
class User {
  #race;
  constructor(name, age, race) {
    this.name = name;
    this.age = age;
    this.#race = race;
  }
  sayHi() {
    console.log(`Hello I am ${this.name}`);
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name cannnot be less than 4 characters");
      return;
    }
    this._name = value;
    // create new variable _name
  }

  get name() {
    return this._name;
  }

  ["say" + "Age"]() {
    // computed function name sayAge()
    console.log(`I am ${this.age} years old`);
  }

  click() {
    alert(`${this.age}`);
  }
  // this will refer to calling object

  click = () => {
    alert(`${this.age}`);
  };
  // this will refer to User.age
}

const user = new User("Joey", 18, "Malay");
setTimeout(User.click(), 1000);

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
