// A variable to reference the button id
var generateBtn = document.querySelector("#generate");

// Variable Arrays which contain the contents for the password generator to select from
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
  " ",
  "!",
  "#",
  "%",
  "&",
  "'",
  "(",
  ")",
  ",",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var useUpperCase;
var useLowerCase;
var useNumbers;
var useSpecial;
var passwordLength;

function randomNumberGenerator(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function generatePassword() {
  debugger;
  // where all the options selected move into a seperate array
  var finalPasswordOptions = [];
  var finalPassword = "";

  passwordLength = prompt(
    "How long do you want your password to be? (A minimum of 8 characters and a maximum of 128)"
  );

  //Changing the prompt variable return to number instead of string
  var passwordLengthInt = parseInt(passwordLength);

  // Setting a minimum and maximum required for the criteria
  while (passwordLengthInt > 128 || passwordLengthInt < 8) {
    passwordLengthInt = alert(
      "The password needs to be between 8 & 128 characters! Try again with another number!"
    );
    return;
  }

  // Options for your password
  useUpperCase = confirm("Would you like to use Upper Case characters?");
  useLowerCase = confirm("Would you like to use Lower Case Characters?");
  useNumbers = confirm("Would you like to use Numbers?");
  useSpecial = confirm("Would you like to use Special Characters?");

  //If selected, I want to push these arrays into the final options array
  if (useUpperCase === true) {
    finalPasswordOptions = finalPasswordOptions.concat(upperCaseCharacters);
    var randomNumber = randomNumberGenerator(upperCaseCharacters.length);

    finalPassword += upperCaseCharacters[randomNumber];
  }

  if (useLowerCase === true) {
    finalPasswordOptions = finalPasswordOptions.concat(lowerCaseCharacters);
    var randomNumber = randomNumberGenerator(lowerCaseCharacters.length);

    finalPassword += lowerCaseCharacters[randomNumber];
  }

  if (useNumbers === true) {
    finalPasswordOptions = finalPasswordOptions.concat(numbers);
    var randomNumber = randomNumberGenerator(numbers.length);

    finalPassword += numbers[randomNumber];
  }

  if (useSpecial === true) {
    finalPasswordOptions = finalPasswordOptions.concat(specialCharacters);
    var randomNumber = randomNumberGenerator(specialCharacters.length);

    finalPassword += specialCharacters[randomNumber];
  }

  //create a for loop to choose password characters
  for (var i = finalPasswordOptions.length; i < passwordLengthInt; i++) {
    finalPassword +=
      finalPasswordOptions[
        Math.floor(Math.random() * finalPasswordOptions.length)
      ];
  }
}

//This function displays the output of the return in generatePassword into the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
