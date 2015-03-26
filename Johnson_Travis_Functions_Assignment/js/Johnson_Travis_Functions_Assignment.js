
 /*
Travis Johnson
Section 00
03/24/15
Functions Assignment
 */

 //DO THE to.lowercase for prompt

//alert("Testing");

//Inform the user of the calculators purpose
 alert("This calculator is designed to find the distance of an object in yards or meters when given the size of the target in inches and the measurement of the object in Mils.A MIL-DOT SCOPE IS REQUIRED FOR THESE CALCULATIONS.");

 //Warn the user that this calculator only works with MIL-DOT scopes
 alert("This calculator REQUIRES a MIL-DOT scope.");

 //Find out if user wants distance in yards or meters then assign functions and do calculations
 //ask for measurement wanted
 var pickDistanceOfMeasurement = prompt("Please enter the unit of measurement you would like to use. Please enter either yards or meters");
 //convert to lowercase
 pickDistanceOfMeasurement.toLowerCase();

 //validate
 while(pickDistanceOfMeasurement === "" || pickDistanceOfMeasurement != "meters" && pickDistanceOfMeasurement != "yards"){
     pickDistanceOfMeasurement = prompt("Please do not leave blank and only enter yards or meters")
 }
 /*
  And to find a distance IN METERS: Place your mil-dot reticle on an object whose size is known size in inches. Measure it in mils. Now, Take the object's size IN INCHES and divide by the constant 39.4 and then multiply the result by 1000 and then divide that by the object size IN MILS. Try this example: You see an old tire near your target, and know the tire is 34 inches wide. Measured in your mil reticle, the tire is 1.5 mils wide. So, you divide the 34 inches by the constant of 39.4 to yield 0.86. Multiply that by 1000 to get 860, and divide that by 1.5. Therefore, your target is 573 meters away.
  */

//Do calculation if meters is picked
 if(pickDistanceOfMeasurement === "meters" || pickDistanceOfMeasurement === "m"){
     //Get user prompt for inches and validate
     var inchesUser = prompt("What is the size of the target is inches. Please only enter a number.");
     while(isNaN(inchesUser) || inchesUser === ""){
         inchesUser = prompt("Please only enter a number and do not leave blank. Please enter the size of the target in inches")
     }
     //get user input for mils and validate
     var mimUserMeters = prompt("What is the size of the object in MILS");
     while(isNaN(mimUserMeters) || mimUserMeters === ""){
         mimUserMeters = prompt("Please only enter a number and do not leave blank. Please enter the size of the object in MILS");
     }
    //insert anon. function
     var calculateDistanceMeters = function(inches,constantForMeters,mim){
         var distanceMeters = (inches / constantForMeters) * 1000;
         distanceMeters /= mim;
         return distanceMeters
     };
     //cal function and give user output
     var anonMeters = calculateDistanceMeters(inchesUser,39.4,mimUserMeters);
     console.log("The distance to the target is " + anonMeters + " meters.");

  /*
      TO FIND A DISTANCE IN YARDS: An object of known size IN INCHES x 27.8 divided by the object's size IN MILS equals its distance IN YARDS. Example: you know an object at the target's distance is 12 inches wide; you measure the object's width in your scope's mil scale and find it is 2 mils wide — therefore, 12 x 27.8 divided by 2 equals 166.8 meaning the target is 166.8 yards away. [That "27.8" is simply a constant — don't get wrapped up about why it's 27.8 but DO NOT use this constant for computing a distance using meters! It won't work!]
  */

  //else if for if user enters yards
 } else if(pickDistanceOfMeasurement === "yards" || pickDistanceOfMeasurement === "yds" ){
     //get prompts and validate
     var inches2 = prompt("What is the size of the target is inches?");

     while(isNaN(inches2) || inches2 === ""){
         inches2 = prompt("Please only enter a number and do not leave blank. Please enter the size of the target in inches")
     }
     var mimUserYards = prompt("What is the size of the target MILS");
     while(isNaN(mimUserYards) || mimUserYards === ""){
         mimUserYards = prompt("Please only enter a number and do not leave blank. Please enter the size of the object in MILS");
     }
     //function
     function calculateDistanceYards(inches1,constant,mim1) {
         var distanceYards = (inches1 * constant) / mim1;
         return distanceYards
     }
     //call function and give user output
     var distanceInYards = calculateDistanceYards(inches2,27.8,mimUserYards);
     console.log("The distance to the target is " + distanceInYards + " yards.")

 }

/*
First I went through and made sure the responses validated
For the question of yards or meters I Entered nothing : validation prompt
For the question of yards or meters I Entered monkey : validation prompt
Responded meters : moved to next prompt of inches
For inches I Entered empty text string : validation prompt
for inches I Entered cat : validation prompt
For inches I Entered 34 like in the example : went to MILS prompt
For MILS I Entered empty text string : validation prompt
For MILS I Entered banana : validation prompt
For MILS I Entered 1.5 : command prompt The distance to the target is 575.2961082910322 meters.
The number is different from the example I decided not to round I wanted the calculator to be as accurate as possible
Responded yards
 For inches I Entered empty text string : validation prompt
 for inches I Entered cat : validation prompt
 For inches I Entered 12 like in the example : went to MILS prompt
 For MILS I Entered empty text string : validation prompt
 For MILS I Entered banana : validation prompt
 For MILS I Entered 2 : command prompt The distance to the target is 166.8 yards.
 */








