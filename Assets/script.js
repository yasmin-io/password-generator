// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  //create all our variables to pluck characters from

  var nums = ["1", "2", "3", "4", "5"];

  var finalPasswordOptionsArray = [];
  // Then make a loop to randomly select ^ to finalPw
  var finalPw = "";
  var passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );
  var passwordLengthint = parseInt(passwordLength);
  var useUpperCase = confirm("Would you like to use Upper Case characters?");
  var useNumbers = confirm("Would you like to use Numbers ?");

  //we need to add whatever they have said yes too to an array to generate final pw from

  if (useNumbers === true) {
    //add to final options array & find out how to take these selections to
    //finalPasswordOptionsArray & do this for each of password options
  }
  if (useUpperCase === true) {
    //add to final options array
  }

  //loop 0-length requested each time add a random character from final options to a string
  return finalPw;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
