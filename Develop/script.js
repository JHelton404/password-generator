// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters =[];
var password = document.getElementById("password")

// Created arrays for letters, capital letters, numbers, and symbols
var LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var CAPITALS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var SYMBOLS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ',', '.', '?']

// Need way to select number of characters, whether or not to include capital letters, numbers, and symbols each.
// Solution, create prompts for each user input when button is clicked.

// Write password to the #password input
function writePassword(length, inclLet, inclNum, inclCap, inclSym) {
  characters = [];
  var length = (prompt("How many characters will your password be? Enter a value between 8-128 \n(tip: use the highest allowed character limit for maximum protection)"))
  var inclLet = confirm("Would you like to include Lowercase Letters? \npress okay for yes")
  if (inclLet === true) characters = characters.concat(LETTERS)
  var inclNum = confirm("Would you like to include numbers? \npress okay for yes")
  if (inclNum === true) characters = characters.concat(NUMBERS)
  var inclCap = confirm("Would you like to include Capital Letters? \npress okay for yes")
  if (inclCap === true) characters = characters.concat(CAPITALS)
  var inclSym = confirm("Would you like to include symbols? \npress okay for yes")
  if (inclSym === true) characters = characters.concat(SYMBOLS)
  if (inclLet != true && inclCap != true && inclNum != true && inclSym != true) alert("You must select some type of character")

  let possibleCharacters = []
  if (length >= 8 && length <= 128)
  for (let i = 0; i < length; i++) {
    // get a random # between 0 and the # of allowed characters
    const random = Math.floor(Math.random() * characters.length)
    possibleCharacters += (characters[random])
  } else {
    alert("Password must be between 8 and 128 characters")
  }
  console.log(possibleCharacters)
  password.innerText = possibleCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
