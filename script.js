// function generatePassword() {

//     var length = 10;
//     var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYYZ1234567890!@#$%&?";
//     var password = "";

//     for (var i = 0; n = char.length, i < length; i++) {
//         password += char.charAt(Math.floor(Math.random() * n));
//     }
//     return password;
// }

// console.log(generatePassword())

var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#yourPassword");
var numBox = document.querySelector("#nums");
var symBox = document.querySelector("#sym");

// generateBtn.addEventListener("click", function generatePassword() {

//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?<>_+=-*&^%$#@!";
//     var password = ""
//     for (var i = 0, n = charset.length; i < 10; ++i) {
//         password += charset.charAt(Math.floor(Math.random() * n));
//         passwordEl.textContent = password;
        
//     }

// })

var char = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwyz";
var num = "1234567890";
var symbol = "!@#$%^&*_-+=[]{}?";

generateBtn.addEventListener("click", function generatePassword() {

    var password = ""
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += symbol : '';
    for (var i = 0, n = characters.length; i < 10; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
        passwordEl.textContent = password;
        
    }
})
