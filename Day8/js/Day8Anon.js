
 /*
Travis Johnson
Section 00
03/24/15
Day 8 Anon
 */


//alert("Testing");


 //Basic Function
 /*
 Function functionName () {
 }
  */

 //Anonymous Function
 /*
 var functionName = function(){
 }
  */

 // Anon Function are extremely popular in js and jquery
 // Highly used in object oriented programming
 // Quick and Easy
 // You can use a basic or an Anon function - *For Now*

 //Function calls above the defintion

 //basic function call
 var basicArea2 = triangleArea(2,9);
 console.log("The area for the basic funvtion before the defintion is " + basicArea2);

 /*
 //Anon function call
 var anonArea2 = triangleAreaAnon(3,4)
 console.log("The are for the anon function before the definition is " +
 THIS DOES NOT WORK! DO NOT PUT IT ABOVE THE DEFINITION
 */


 // Build a bsic function for area of a triangle then convert to anon
 function triangleArea(b, h){
     //Calc area
     var area = .5 * b * h;
     return area;

 }

 //Anon function
 var triangleAreaAnon = function(b,h){
     var area = .5 * b * h;
     return area;

 }

 //Function call to basic function
 var basicArea = triangleArea(5,6);
 console.log("The are from the basic function is " + basicArea);


 //function call to the anon
 var anonArea = triangleAreaAnon(4,5);
 console.log("The area for the anon function is " + anonArea)

