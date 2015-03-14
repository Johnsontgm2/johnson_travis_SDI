
 /*
Travis Johnson
Section 00
03/013/15
Conditionals Assignment
 */


//alert("Testing");
 /*
 This calculator is designed to help the user first decide if they should go to the range based on the weather. Then the user will be prompted to input the weight in grains of the bullet and the
 velocity in FPS. The calculator will then give the user the kinetic pounds of force that bullet will have.



  Formula used:
  Energy = .5 * weight * velocity^2 / 7000 / 32.175

  Where weight is in grains, and velocity is in feet/second.

  7000 is grains per pound, and 32.175 is acceleration due to gravity.

  It can be re-written:
  Energy = weight * velocity^2 / 450450

  Power = weight * velocity / 1000

  */

 //Let the user know what the calculator is for
 prompt("This calculator is designed to help you decide if you should go to the range based on temperature and wind. and find the kinetic energy in ft lbs of a bullet. For the calculator to do its calculation you need to enter the weight of the bullet(in grains) and the velocity(in FPS) of the ammunition you are using. This information can be found on the box of ammunition itself or by visiting the manufacturers website.");

 //Setup prompt, validate prompt and variables to decide if the user should go to the range or not that day.
var temperature = prompt("Please enter the temperature in fahrenheit");
 if(parseInt(temperature) === "" || isNaN(temperature)){
     console.log("Please only enter numbers and do not leave blank\nPlease enter the temperature in fahrenheit")
 }
 var windSpeed = prompt("What is the wind speed in mph");
 if(parseInt(windSpeed) === "" || isNaN(windSpeed)){
     console.log("Please only enter number and do not leave blank\nPlease enter the wind speed")
 }
 var windGusts = prompt("Please enter yes or no for wind gusts");
 if(windGusts != "Yes" && windGusts !="yes" && windGusts != "no" && "No"){
     console.log("please only enter yes or no and do not leave blank\nPlease enter yes or no for wind gusts");
 }

 //calculate
 (temperature > 93) ? console.log("Today's temperature is high and could affect accuracy") : console.log("Temperature is great for shooting");

 if(windSpeed > 20 && windGusts === "yes" || windGusts === "Yes"){
     console.log("Today is too windy for long range shooting.")

 } else if(windSpeed >= 25){
     console.log("Today is too windy for long range shooting.")

 }else(console.log("Today's wind is good for long range shooting"));

 //setup variables with prompts and validate
 var bulletWeightGrains = prompt("Enter the bullet weight in Grains");
 //show the user what was entered
 console.log(parseInt(bulletWeightGrains) + " Grains");

 //validate what was entered
 if(bulletWeightGrains === "" || isNaN(bulletWeightGrains)) {
     console.log("Please do not leave blank and only use numbers\nPlease Enter the bullet weight in grains")
 }
 var velocityFPS = prompt("Enter the velocity of the ammunition in feet per second");
 //Show user what was entered
 console.log(parseInt(velocityFPS) + " FPS");

 //validate what was entered
 if(velocityFPS === "" || isNaN(velocityFPS)){
     console.log("Please do not leave blank and only use numbers\nPlease Enter the velocity in feet per second");
 }

 // Do calculation
 var kineticEnergy = .5 * parseInt(bulletWeightGrains) * parseInt(velocityFPS) * velocityFPS;
 kineticEnergy /= 7000;
 kineticEnergy /= 32.175;



 //display output
 console.log("With the bullet weight and velocity that was entered the total kinetic energy of the round is " + kineticEnergy +"ft lbs of force.");


 /*
 For temperature I entered 90 it returned Temp is ok
 For temperature I entered 96 it returned Temp too high
 for windSpeed I entered 20 and gusts no it returned wind is ok
 for windSpeed I entered 26 and gusts no it returned wind is too high
 for windSpeed i entered 30 and gusts yes it returned wind is too high
 for bullet weight it grains i entered 230 for velocity i entered 850 it returned 368.9 ft pounds which is correct

  */



