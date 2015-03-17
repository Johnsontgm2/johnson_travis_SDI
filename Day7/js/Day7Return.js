
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

