// Created By: Jacob Bonner
// Created On: November 2020
// This program will allow the user to enter a minimum and maximum number and
//   the computer will find a random number in between the specified numbers.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// This function will find a random number between 
//   the values specified by the user.
function rollDie(minValue, maxValue) {
  var randomNumber = Math.floor(Math.random() * ((maxValue - minValue)) 
                     + 1) + minValue;

  // Returning the random number
  return randomNumber;
}

try {
  // Input for the minimum range of the dice
  var minRangeInput = prompt("Enter the minimum range of the dice (integer): ");
  console.log();

  // Input for the maximum range of the dice
  var maxRangeInput = prompt("Enter the maximum range of the dice (integer): ");
  console.log();

  // Ensuring the range variables are integers
  var userMinRange = Number(minRangeInput, 10);
  var userMaxRange = Number(maxRangeInput, 10);

  // Process
  if (isNaN(userMinRange) == true || isNaN(userMaxRange) == true) {
    // Output if errors are detected
    console.log("ERROR: Invalid Input");
  } else {
    var number = rollDie(userMinRange, userMaxRange);
    // Output if no errors detected
    console.log("The random number is", number);
  }
  
} catch (err) {
  console.log("ERROR: Invalid Input");
}
