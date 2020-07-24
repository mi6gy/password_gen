
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var symbol = "!#$%&*+<=>?@/[]^_`|~".split("");

var charCount = prompt("How many characters would you like your password to be? Your password must be at least 8 characters but not longer than 128");
var upperLetters = confirm("Please press OK if you want uppercase letters included in your password.");
var lowerLetters = confirm("Please press OK if you want lowercase letters included in your password.");
var userNumbers = confirm("Please press OK if you want numbers included in your password.");
var userSpecialChar = confirm("Please press OK if you want special characters included in your password.");

function generatePassword(howManyChar, upLet, lowLet, numb, char) {
  var myArray = [];
  var finalPassword = [];

  if (upLet === false && lowLet === false && numb === false && char === false) {
    alert("Please select at least one character type for your password.");
    return location.reload();
  }
  
    if (howManyChar <= "7" && howManyChar >= "129") {
      
        alert("Your password must be between 8-128 characters. Please try again.");
        return location.reload();
      }      
     if (upLet === true) {
        for (var i = 0; i < upperCase.length; i++) {
          myArray.push(upperCase[i]);
          console.log("User set Upper case letters to True");
        }
      } 
     if (lowLet === true) {
        for (var i = 0; i < lowerCase.length; i++) {
        myArray.push(lowerCase[i]);
        console.log("User set Upper case letters to True");
          }
        } 
     if (numb === true) {  
        for (var i = 0; i < numbers.length; i++) {
        myArray.push(numbers[i]);
        console.log("User set Upper case letters to True");
          }
        } 
     if (char === true) {  
        for (var i = 0; i < symbol.length; i++) {
        myArray.push(symbol[i]);
        console.log("User set Upper case letters to True");
          }
        } 
    for (var i = 0; i < howManyChar; i++) {
      var randomNum = Math.floor(Math.random() * myArray.length);
      console.log(randomNum);
      finalPassword.push(myArray[randomNum]);
    }  
  return finalPassword.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(charCount, upperLetters, lowerLetters, userNumbers, userSpecialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);