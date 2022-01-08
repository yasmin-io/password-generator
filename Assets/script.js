// A variable to reference the button id
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Variable Arrays which contain the contents for the password generator to select from
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  // where all the options selected move into a seperate array
  var finalPasswordOptionsArray = [];

  // Then create a loop that loops from selected characters in finalPassOtioArray to finalpw
  //loop 0-length requested each time add a random character from final options to a string
  var finalPw = "";

  // Criteria questions for the user to choose from
  var passwordLength = prompt(
    "How long do you want your password to be? (A minimum of 8 characters and a maximum of 128)"
  );
  //Changing the prompt variable return to number instead of string
  var passwordLengthInt = parseInt(passwordLength);

  // Setting a minimum and maximum required for the criteria
  while (passwordLengthInt > 128) {
    alert("The amount entered exceeds 128 characters!");
    return;
  }
  while (passwordLengthInt < 8) {
    alert(
      "The amount entered is below the required character amount expected!"
    );
    return;
  }

  var useUpperCase = confirm("Would you like to use Upper Case characters?");
  var useLowerCase = confirm("Would you like to use Lower Case Characters?");
  var useNumbers = confirm("Would you like to use Numbers?");
  var useSpecial = confirm("Would you like to use Special Characters?");

  // Adding the selected criteria into the password generator

  if (useUpperCase === true) {
    //add to final options array
    finalPasswordOptionsArray.push(upperCaseCharacters);
  }

  if (useLowerCase === true) {
    //add to final options array
    finalPasswordOptionsArray.push(lowerCaseCharacters);
  }

  if (useNumbers === true) {
    // if use numbers is true
    // I want to put the Nums array into finalpassoptions
    finalPasswordOptionsArray.push(nums);
  }

  if (useSpecial === true) {
    //add to final options array
    finalPasswordOptionsArray.push(specialCharacters);
  }

  //create a for loop to choose password characters
  for (var i = 0; i <= passwordLengthInt; i++) {
    finalPw =
      finalPw +
      finalPasswordOptionsArray.values(
        Math.floor(
          Math.random() *
            Math.floor(finalPasswordOptionsArray.passwordLengthInt - 1)
        )
      );
  }

  //Stating the result of the function after running it
  return finalPw;
}

//This function displays the output of the return in generatePassword into the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("hello!");
