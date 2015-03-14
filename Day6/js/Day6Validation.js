
 /*
Travis Johnson
Section 00
03/07/15
Day 3 Prompts
 */


//alert("Testing");

//ask the user for a number
 var num1 = prompt("Please enter a number");


//validate that the user typed in a number OR didnt leave it blank

 //validate using a while loop
 while(isNaN(num1) || num1 === ""){
     //Reprompt the user
     if(num1 === ""){
         //The user left it blank
         num1 = prompt("Please do not leave blank\nPlease type in a number");

     } else if(isNaN(num1)){
         num1 = prompt("Please only type in numbers\nEnter a number");
     }



 }

 //Ask the user a yes or no question
 var userInput = prompt("Please enter yes or no");
 //convert to lowercase
 userInput = userInput.toLowerCase();

 //validate
 while(userInput != "yes" && userInput != "no" && userInput != "nope"){
     //Re-prompt
     userInput = prompt("Please only enter yes or no\n Please type in yes or no");

 }
