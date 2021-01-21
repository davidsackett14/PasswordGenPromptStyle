// Assignment Code
var generateBtn = document.querySelector("#generate");
var capLetters = "QWERTYUIOOPASDFGJJKLZXCVBNM"
var lowerLetters = capLetters.toLowerCase()
var numb = "1234567890"
var spcChar = "!@#$%^&*"
var result = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var characterCount = prompt("how many characters would you like? MUST be between 8-128 characters")
  
//if user response is outside of range re-submit prompt until user provides acceptable response
  var useLower = prompt("would you like to include lower case letters? If 'no' selected upper case letters will be used by default.")
if ( useLower === "yes"){
// if no must contain upper case letters and no prompt provided for upper case letters
// if yes allow user to select if they would also like upper case letters
  var useUpper = prompt("would you like to include upper case letters?")}
else if (useLower === "no"){
  var useUpper = "yes"
}
  var useNumb = prompt("would you like to include numeric values? If 'no' selected special characters will be used by default.")
if ( useNumb === "yes"){
  var useSpec = prompt("would you like to include special characters?")
}
else {useSpec = "yes"}
// if no must contain special character  and no prompt special character and alert provided indicating special characters will be used 
// if yes allow user to select if they would also like upper case letters


if (useLower === "yes" && useNumb === "yes" && useSpec === "yes" && useUpper === "yes"){
  result = capLetters + lowerLetters + numb + spcChar 
  var resultArray = result.split("")
  var passwordResult = ""
  for (var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "yes" && useUpper === "no" && useSpec === "yes" && useNumb === "yes"){
  result = lowerLetters + numb + spcChar
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "yes" && useUpper === "yes" && useSpec === "no" && useNumb === "yes"){
  result = lowerLetters + numb + capLetters
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "yes" && useUpper === "yes" && useSpec === "yes" && useNumb === "no"){
  result = lowerLetters + capLetters + spcChar
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "yes" && useUpper === "no" && useSpec === "no" && useNumb === "yes"){
  result = lowerLetters + numb 
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "yes" && useUpper === "no" && useSpec === "yes" && useNumb === "no"){
  result = lowerLetters + spcChar
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "no" && useUpper === "yes" && useSpec === "yes" && useNumb === "yes"){
  result = capLetters + numb + spcChar
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "no" && useUpper === "yes" && useSpec === "no" && useNumb === "yes"){
  result = capLetters + numb 
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

if (useLower === "no" && useUpper === "yes" && useSpec === "yes" && useNumb === "no"){
  result = lowerLetters + capLetters + spcChar
  var resultArray = result.split("")
  var passwordResult = ""
  for ( var i = 0; i<characterCount; i++){
    var randomIndex = Math.floor(Math.random()*resultArray.length)
    passwordResult += resultArray[randomIndex]
  }
}

//when all criteria have been met and and prompts answered then generate a a password

//create alert to display password
alert("your new password is " + passwordResult)

}
//create prompt for password criteria

//password must be limited from 8 to 128 characters create a function

//password must include lowercase, uppercase, numeric, and/or special characters

//at least 1 character type must be used
