
 /*
Travis Johnson
Section 00
03/24/15
Day 8 Random
 */


//alert("Testing");

 //Create a function that will give us a random integer between two values

 //Create variables for min and max values
 var min = prompt("Lets find a random number between two values \n Please Enter your min value");

 //Validate min value
 while(isNaN(min) || min === ""){
     //Reprompt the user
     max = prompt("Please do not leave blank and only use numbers\n what is the min value");

 }

 var max = prompt("Please enter your max value");

 //validate max
 while(isNaN(max) || max === "" || parseInt(max) <= parseInt(min)){

     if(isNaN(max)){
         max = prompt("Please do not leave blank and only use numbers\n what is the max value")

     } else if(max === ""){
         max = prompt("Please do not leave blank ")
     } else if(max<=min){
         max = prompt("Please enter a higher value than your minimum number of " + min + "what is the max value")
     }



 }

 //Function call
 var randomNum = getRandom(min, max);
 console.log("Your random number between " + min+ " and " + max + " is " + randomNum )

 //create our functiion
 function getRandom(min, max){

     //Generate a random integer
     var randomNumber = Math.round(Math.random()*(max-min)+parseInt(min));
     return randomNumber;

 }

 //15 random number - console.log them out
 for (var i=0; i<15; i++){
     //This will give the same number 15 times
     console.log(getRandom(min, max));

 }
