function firstAction() {
  console.log("I am first");
}

function secondAction(message) {
  console.log(message);
}

setTimeout(firstAction(), 1000);
// function call immediately executed

setTimeout(firstAction, 1000);
// callback function executed after 1000ms

setTimeout(secondAction("I am second"), 1000);
// function call immediately executed

setTimeout(() => secondAction("I am second"), 1000);
// callback function with argument executed after 1000ms

// set timeout pseudocode
function setTimeout(callbackFunction, setTime) {
  waitForThisLong(setTime);
  callbackFunction();
}
