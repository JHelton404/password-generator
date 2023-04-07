// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created arrays for letters, capital letters, numbers, and symbols
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var CAPITALS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var SYMBOLS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ',', '.', '?']

// Need way to select number of characters, whether or not to include capital letters, numbers, and symbols each.
// Solution, create prompts for each user input when button is clicked.

// Write password to the #password input
function writePassword(length, inclNum, inclCap, inclSym) {
  let characters = LETTERS
  var length = (prompt("How many characters will your password be? Enter a value between 1-50 (tip: use the highest allowed character limit for maximum protection)"))
  var inclNum = prompt("Would you like to include numbers? yes/no")
  if (inclNum === "yes") characters = characters.concat(NUMBERS)
  var inclCap = prompt("Would you like to include Capital Letters? yes/no")
  if (inclCap === "yes") characters = characters.concat(CAPITALS)
  var inclSym = prompt("Would you like to include symbols? yes/no")
  if (inclSym === "yes") characters = characters.concat(SYMBOLS)

  let passwordCharacters = ""
  for (let i = 0; i < length; i++) {
    // get a random # between 0 and the # of allowed characters
    const random = Math.floor(Math.random() * ( ( characters.lenght-1) - 0 + 1) + 0)
    passwordCharacters += characters[random]
  }
  console.log(passwordCharacters)
  return passwordCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
