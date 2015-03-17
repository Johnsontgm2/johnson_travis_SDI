
 /*
Travis Johnson
Section 00
03/07/15
Day 3 Prompts
 */


//alert("Testing");

 //Code the song 99 bottles of beer on the wall



 //basic structure of for loop
 //for(var i = 0; condition to test; increment of change){}


 for(var i= 99; i>0; i--) {

     if(i===1){
         console.log(" 1 bottle of beer on the wall. 1 bottle of beer. Take it down and pass it around. No more beer.")

     } else{
         console.log(i + " bottles of beer on the wall." + i + " bottles of beer. Take one down and pass it around " + (i - 1) + " bottles of beer on the wall");
     }

 }

