// 6. CLEAN CODE

// good example of naming functions
function getPlayerScore() {}
function getPlayerName() {}
function getPlayerAge() {}

// good example of naming variables
let playerScore;
let playerName;
let playerAge;

// bad example of naming functions
function playerScore() {}
function fetchPlayerName() {}

// bad example of naming variables
let getScore;
let x;

// good naming is comment itself
const MILISECOND_PER_HOUR = 60 * 60 * 1000;
setTimeout(stopTimer, 3600000);
setTimeout(stopTimer, MILISECOND_PER_HOUR);
