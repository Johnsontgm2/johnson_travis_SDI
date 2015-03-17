
 /*
Travis Johnson
Section 00
03/017/15
Day 7 Scope
 */


//alert("Testing");

 //variable scope
 //variables inside and outisde of a function

 //Try not to use the same variable names, but in big files its impossible and doesnt make sense

 //Create a variable for width in our MAIN CODE
 //scoped outside of the function - "Main code"
 var width =5;

 //create a function that cal the perimmeter of a rectangle
 function calcPeri(){

     //create a variable called width inside the function
     //this is scoped to the function calcPeri
     var width =10;

     //create variable for height and perimeter
     var height = 20;
     var perimeter = width *2 + height*2;

     console.log("Inside of the function, the perimeter is " + perimeter);

     //varaibles created inside of a function can not be accessed outside of the functioon
     //variables created outside the function can be accessed but usually will not be


 }

 console.log("Before the function call, width equals " + width);

 //function call calcPeri
 calcPeri();
 console.log("After the function call, width equals " + width);

 //Console.log the answer
 //This does not work Vegas what stays in function
 //console.log("Outside of the function the perimeter is " + perimeter);