
 /*
Travis Johnson
Section 00
03/17/15
Day 7 functions
 *///function call print hello before it is defined in our code
 printHello();
 calcArea();
//alert("Testing");

 //basic structure of a function
 // function functionName()(Code to Run)

 //Create a function to console log hello
 function printHello(){

     console.log("Hello");

 }

 //create a function that prints out more text
 function printMore(){
     console.log("Prints more text");
 }

 //function call the print hello function
 //go button functionName();
 printHello();
 printHello();

 //function call print more
 printMore();

 //create the function that finds out the area of a rectangle

 function calcArea(){
     //create variables for width height and area
     var width = 20;
     var height = 30;
     var area = width * height;

     //Print out area
     console.log("The are is " + area);

 }


 //Function call the calc area
 calcArea();