
 /*
Travis Johnson
Section 00
03/10/15
Conditionals Worksheet
 */


//alert("Testing");

 //Group1 question
 //set the given variables
 var milesPerGallon = 15;
 var distanceToGo = 200;
 var gasTankCapacity = 22;
 var gasTankPercentLeft = 25;
 var gasTankPercentLeftDecimal = gasTankPercentLeft / 100;
 var gallonsLeft = gasTankPercentLeftDecimal * gasTankCapacity;

//setup conditional with output
if(gasTankCapacity * gasTankPercentLeftDecimal * milesPerGallon >= distanceToGo){
    console.log("Yes, you can make it without getting gas.");

} else{console.log("You only have " + gallonsLeft + " in your gas tank, better get gas while you can!");
}

 //




