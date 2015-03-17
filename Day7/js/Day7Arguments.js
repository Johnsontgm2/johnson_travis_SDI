
 /*
Travis Johnson
Section 00
03/17/15
Day 7 arguments
 */


//alert("Testing");

 //Arguments - Goes into the functions - part of the function call
 //Parameters - catch the argument and are in the function definition

 //Create a function that calculates the area of a rectangle again!
 //Add in parameters

 function calcArea(width,height){

     //var width = 10;
     //var height = 20;
     var area = width*height;
     console.log("The area is " + area);
 }

 //Call our function
 //Add arguments to the function call
 calcArea(10,20);
 calcArea(20,40);

 //prompt the user for width and height
 var width = prompt("Enter a width");

 //Enter validation
 var height = prompt("Enter a height");
 calcArea(width, height);

 //dog years
 function dogYears(humanAge){

     //Dog years = human years *7

     var dogAge = humanAge * 7;
     console.log("Your age in dog years is " + dogAge);



 }
 //Call the dog function
 dogYears(4);

 //prompt user for human age
 var userInput = prompt("Please enter your human age");

 //call the dog function
 dogYears(userInput);