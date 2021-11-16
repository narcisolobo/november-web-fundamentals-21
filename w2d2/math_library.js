// JavaScript Library
// The Math library is built in - no need to import.

var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor); // --> 1
console.log(ceiling); // --> 4
console.log(random); // --> between 0 and 1 (exclusive)

// Math.random() returns a decimal point number between 0 and 1 (exclusive).

// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return an integer between 1 through 6 at random.

function d6() {
  var roll = Math.random();
  // your code here
  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

// Write a function that returns a random answer from the lifesAnswers array.
