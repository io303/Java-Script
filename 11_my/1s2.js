const prompt = require("prompt-sync")();

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10: "));
  attempts++;

  if (guess > secretNumber) {
    console.log("Too high! Try again.");
  } else if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log(`🎉 Correct! The number was ${secretNumber}. You took ${attempts} tries.`);
  }

} while (guess !== secretNumber);


