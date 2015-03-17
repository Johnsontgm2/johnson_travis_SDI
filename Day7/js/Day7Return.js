
 /*
Travis Johnson
Section 00
03/17/15
Day 7 returns
 */


//alert("Testing");


 //Return a value from our function to our main code

 //create a function calculate the area of a rectangle
 function calcArea(w,h){
     //calc area
     var area = w * h;
     console.log("Inside the function the area is " + area)
     //Return the area to the main code
     return area;


 }

 //call function
 //create a variable to catch the returned value
 var rectArea = calcArea(10,20);

 //console log the area
 //console.log(area);
 console.log(rectArea);


 //Create a function to calculate the area of a circle
 function circleArea (r){
     //calc area Pi * r * r
     var area = Math.PI * r * r;
     //Return the value
     return area;


 }

 //function call this circle area
 //create a variable to catch the returned area
 var circArea = circleArea(6);

 //console.log the results
 console.log("The are of the circle is " + circArea);

 // What is twice the circle are of a six inch circle
 var resultsTwice = circArea * 2;
 console.log("Twice the area is " + resultsTwice);