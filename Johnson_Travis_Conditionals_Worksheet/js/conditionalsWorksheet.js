
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
 var gasTankPercentLeft = 50
 var gasTankPercentLeftDecimal = gasTankPercentLeft / 100;
 var gallonsLeft = gasTankPercentLeftDecimal * gasTankCapacity;

//setup conditional with output
if(gasTankCapacity * gasTankPercentLeftDecimal * milesPerGallon >= distanceToGo){
    console.log("Yes, you can make it without getting gas.");

} else{console.log("You only have " + gallonsLeft + " gallons left in your gas tank, better get gas while you can!");
}

 //Group2 question

//set given variables
 var userName = "spankiticus";
 var Password = 1234;
 var enterUserName = prompt("Please enter your username");
 var enterPassword = prompt("Please enter your password");

 //setup conditional
 if (enterUserName === userName){

 } else (console.log("User not found"));

 if (parseInt(enterPassword) === Password){


 } else (console.log("Your password does not match our records"));

 if (enterUserName === userName && parseInt(enterPassword) === Password){
     console.log("Welcome Spankiticus")
 }

 //Group3 question
  var tirePressure = [33,31,4,44];

//setup conditional

if(tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
    console.log("The tires passed spec")

} else{
    console.log("Get your tires checked")
}
















