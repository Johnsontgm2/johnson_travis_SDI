
 /*
Travis Johnson
Section 00
03/24/15
Functions Assignment
 */


//alert("Testing");

//Inform the user of the calculators purpose
 alert("This calculator is designed to find the distance of an object (In yards) when given the size of the target in inches and the measurement of the object in Mils.A MIL-DOT SCOPE IS REQUIRED FOR THESE CALCULATIONS.");

 //First make sure the user has a mil dot scope before starting
 var milDotScope = prompt("For this calculator to function properly you must have a MIL-DOT scope.\n Do you have a MIL-DOT scope? (if unsure check user manual)");

 //validate and prompt user if scope not mil-dot
while(milDotScope === ""){
     milDotScope = prompt("Please do not leave blank\n Is your scope MIL-DOT? Please enter yes or no (Remember if your not sure to check your manual)");
}
 while(milDotScope === "no" || milDotScope === "No"){
    milDotScope = alert("You must have a MIL-DOT scope to continue\n If unsure check the user manual of your scope")
 }
 while(milDotScope != "Yes" && milDotScope != "yes" && milDotScope && "No" && milDotScope != "no"){
    prompt("Please only enter yes or no. Do you have a MIL-DOT scope?");
 }


 //Do calculations using Functions
var calculateDistanceMeters = function(inches,constantForMeters,mim){
    var distanceMeters = (inches / constantForMeters) * 1000 / mim;
    return distanceMeters

}



 function calculateDistanceYards(inches1,constant,mim1){
     var distanceYards = (inches1 * constant) / mim1
     return distanceYards

 }



 /*
  TO FIND A DISTANCE IN YARDS: An object of known size IN INCHES x 27.8 divided by the object's size IN MILS equals its distance IN YARDS. Example: you know an object at the target's distance is 12 inches wide; you measure the object's width in your scope's mil scale and find it is 2 mils wide — therefore, 12 x 27.8 divided by 2 equals 166.8 meaning the target is 166.8 yards away. [That "27.8" is simply a constant — don't get wrapped up about why it's 27.8 but DO NOT use this constant for computing a distance using meters! It won't work!]
  */
  /*
  And to find a distance IN METERS: Place your mil-dot reticle on an object whose size is known size in inches. Measure it in mils. Now, Take the object's size IN INCHES and divide by the constant 39.4 and then multiply the result by 1000 and then divide that by the object size IN MILS. Try this example: You see an old tire near your target, and know the tire is 34 inches wide. Measured in your mil reticle, the tire is 1.5 mils wide. So, you divide the 34 inches by the constant of 39.4 to yield 0.86. Multiply that by 1000 to get 860, and divide that by 1.5. Therefore, your target is 573 meters away.
  */