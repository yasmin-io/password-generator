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

// A function to generate a random number to use later in the code
function randomNumberGenerator(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

//Main section of Code
function generatePassword() {
  debugger;
  // Empty Variables for all the characters selected
  var finalPasswordOptions = [];
  var finalPassword = "";

  passwordLength = prompt(
    "How long do you want your password to be? (A minimum of 8 characters and a maximum of 128)"
  );

  //Changing the passwordLength prompt return to : number instead of : string
  var passwordLengthInt = parseInt(passwordLength);

  // Setting a minimum and maximum number input required for the user to proceed
  while (passwordLengthInt > 128 || passwordLengthInt < 8) {
    passwordLengthInt = alert(
      "The password needs to be between 8 & 128 characters! Try again with another number!"
    );
    return;
  }

  // Confirm Popups that display options for the user to choose to have implemented into their password
  useUpperCase = confirm("Would you like to use Upper Case characters?");
  useLowerCase = confirm("Would you like to use Lower Case Characters?");
  useNumbers = confirm("Would you like to use Numbers?");
  useSpecial = confirm("Would you like to use Special Characters?");

  //The user has to select one of the options or will get an alert popup
  if (!useUpperCase && !useLowerCase && !useSpecial && !useNumbers) {
    alert("Please pick at least one of the options");
    return null;
  }
  //If selected, to push these arrays into the 'final options' array
  //While using a 'randomNumberGenerator' function to pluck a single digit or letter
  //This is to ensure that, despite being random, we have atleast 1 of each character
  //from the selected criteria generatred in the password
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

  //Create a for loop to choose password characters
  // I am using finalPassword.length instead of 0 because the necessary characters added from above
  //already move the value of i from 0. Using this allows the user to recieve the the correct length
  for (var i = finalPassword.length; i < passwordLengthInt; i++) {
    finalPassword +=
      finalPasswordOptions[
        Math.floor(Math.random() * finalPasswordOptions.length)
      ];
  }
  // The return of the entire function will be the value of finalPassword
  return finalPassword;
}

//This function displays the output of the return in generatePassword into the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button so that when the code is run when the user clicks the
//'generate password' button
generateBtn.addEventListener("click", writePassword);
