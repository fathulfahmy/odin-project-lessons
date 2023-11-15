// SCOPE
function outerFunction() {
  var outerVar = 1;
  const outerConst = 2;

  function innerFunction() {
    var innerVar = 3;
    const innerConst = 4;
  }

  console.log(outerVar);
  console.log(outerConst);
  // both returns variable

  console.log(innerVar);
  console.log(innerConst);
  // innerVar returns value since it lives in outerFunction
  // innerConst returns error since it lives inside its block {} only
}

// CLOSURE
function addNum() {
  const num1 = 2;
  const num2 = 5;

  function calcSum() {
    // can access outer function from inner function
    console.log(num1 + num2);
  }
  return calcSum;
}

const add25 = addNum();
add25();

// FACTORY FUNCTION
function createAdder(num1) {
  // store first num

  return function (num2) {
    // after store first num, ready to accept second num

    return num1 + num2;
    // after accept num2, return calculation
  };
}

// create 2 different functions
const add5 = createAdder(5);
const add10 = createAdder(10);

console.log(add5(2));
console.log(add10(2));
