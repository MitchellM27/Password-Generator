// Assignment Code
var generateBtn = document.querySelector("#generate");

// utilizing the generatePassword function associated with the var password found below.
function generatePassword () {


    //getting information from the user through prompts and confirmation boxes.
    var userLength = prompt('How many characters would you like your password to be? Between 8-128 characters.');
    
    //turning the user's password length into an int.
    lengthVal = parseInt(userLength);

    //ensuring that the user inputs a value within the parameters of the password's capabilities.
    if (lengthVal < 8 || lengthVal > 128) {
        confirm('Please try again with a number between 8-128.');
        return null;
    } else if (isNaN (lengthVal) == true) {
        confirm ('Please try again with a number between 8-128.');
        return null;
    }


    var userUpper = confirm ('Would you like upper case letters in the password?');
    var userLower = confirm ('Would you like lower case letters in the password?');
    var userSpecial = confirm ('Would you like special characters in the password?');
    var userNumber = confirm ('Would you like numbers in the password?');


    //creating an empty string for the looped contents to be stored in.    
    let pass = '';

    //creating else if statements based on which parameters the user has chosen.
    if (userUpper == true && userLower == true && userSpecial == true && userNumber == true) {
        
        //validating the user's input.
        confirm ('Your password will contain upper case letters, lower case letters, special characters, and numbers.');
        
        //creating a loop associated with the number of characters the user has chosen.
        for (i=0; i< lengthVal; i++){

            //creating a function to get a random character from allowed types.
            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 74)];    
            }

            //Adding the result to the previously empty string.            
            pass += getRandomItem();
        }

    //repeating the process until all possible outcomes are accounted for.    
    } else if (userUpper == true && userLower == false && userSpecial == true && userNumber == false) {

        confirm ('Your password will contain upper case letters, and special characters');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 38)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == true && userLower == false && userSpecial == false && userNumber == true) {

        confirm ('Your password will contain upper case letters, and numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  
                return characters[Math.floor(Math.random() * 36)];    
            }

            pass += getRandomItem();
        }

    }else if (userUpper == true && userLower == true && userSpecial == true && userNumber == false) {

        confirm ('Your password will contain upper case letters, lower case letters, and special characters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 64)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == true && userLower == true && userSpecial == false && userNumber == true) {

        confirm ('Your password will contain upper case letters, lower case letters, and numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  
                return characters[Math.floor(Math.random() * 62)];    
            }

            pass += getRandomItem();
        }

    }else if (userUpper == true && userLower == true && userSpecial == false && userNumber == false) {

        confirm ('Your password will contain upper case letters, and lower case letters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';  
                return characters[Math.floor(Math.random() * 52)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == true && userLower == false && userSpecial == false && userNumber == false) {

        confirm ('Your password will contain upper case letters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
                return characters[Math.floor(Math.random() * 26)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == true && userSpecial == true && userNumber == true) {

        confirm ('Your password will contain lower case letters, special characters, and numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+0123456789';  
                return characters[Math.floor(Math.random() * 48)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == true && userLower == false && userSpecial == true && userNumber == true) {

        confirm ('Your password will contain upper case letters, numbers, and special characters');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+0123456789';  
                return characters[Math.floor(Math.random() * 48)];    
            }

            pass += getRandomItem();
        }

    }else if (userUpper == false && userLower == true && userSpecial == false && userNumber == true) {

        confirm ('Your password will contain lower case letters, and numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';  
                return characters[Math.floor(Math.random() * 36)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == true && userSpecial == false && userNumber == false) {

        confirm ('Your password will contain lower case letters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyz';  
                return characters[Math.floor(Math.random() * 26)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == true && userSpecial == true && userNumber == false) {

        confirm ('Your password will contain lower case letters, and special characters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 38)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == false && userSpecial == true && userNumber == true) {

        confirm ('Your password will contain special characters, and numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = '0123456789!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 22)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == false && userSpecial == true && userNumber == false) {

        confirm ('Your password will contain special characters.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = '!@#$%^&*()_+';  
                return characters[Math.floor(Math.random() * 12)];    
            }

            pass += getRandomItem();
        }

    } else if (userUpper == false && userLower == false && userSpecial == false && userNumber == true) {

        confirm ('Your password will contain numbers.');
        
        for (i=0; i< lengthVal; i++){

            function getRandomItem() {
                const characters = '0123456789';  
                return characters[Math.floor(Math.random() * 10)];    
            }

            pass += getRandomItem();
        }

    }

    //returning the now filled string to the function so that it can be delivered to the password.    
    return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


