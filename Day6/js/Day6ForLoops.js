
 /*
Travis Johnson
Section 00
03/14/15
Day 6 for loops
 */


//alert("Testing");

 // for(initialization; condition; increment of change) {}
 // we use i a lot for loops because it means iteration - iteration means times around

 for(var i = 0; i<20; i ++){
     console.log("the value of i is " + i )

 }
 console.log(i);

 //Break in a loop

 for(var j = 0; j < 5; j++){
     //conditional to test if we should break the loop
     //if the value of j is three then console.log something different and stop the loop

     if(j===3){
         //stop the loop but first console log out something
         console.log("J is 3");
         break;

     }
     console.log("The value of j is " + j );
 }

 //specific cases for each value
 for(var k =0; k<3; k++){
     if(k===0){
         console.log("The value is zero.");

     } else if(k===1){
         console.log("Value is one");

     } else if(k===2){
         console.log("The value is two");
     }

 }