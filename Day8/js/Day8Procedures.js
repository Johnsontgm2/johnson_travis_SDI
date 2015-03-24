
 /*
Travis Johnson
Section 00
03//15
Day 8 Procedures
 */


//alert("Testing");

 //This is a basic function
 function calcAreaF(w,h){
     var area = w * h;
     return area;

 }

 //Function call
 var area = calcAreaF(6,8);
 console.log("The area of the rectangle is " + area);

 //This is a procedure
 //A list of steps to do

 function calcAreaP(w,h){
     var area = w * h;

     //We do not return this value
     console.log("Inside the procedure the area is " + area)

 }


 //Function call for procedure
 //just the function name no variable to catch, there is nothing to catch
 calcAreaP(12,16);


