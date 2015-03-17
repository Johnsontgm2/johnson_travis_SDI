
 /*
Travis Johnson
Section 00
03/17/15
Functions Worksheet
 */


//alert("Testing");

 //create function to calculate the circumference of a circle
var radius = 2;

function calcCircleCircumference(r){
    //calc circumference
    var circumference = 2 * Math.PI * r;
    //Return the circumference
    return circumference


}
 //create variable to catch returned circumference
 var circleCircumf = calcCircleCircumference(2);

 //Show circumference of a circle

 console.log("The circumference of the circle is " + circleCircumf + ".");


 //create a function to find how many bee stings can kill
 var weight = 225;

 function deathByBees(w){
     //Calculate the number of bee stings until death
     var death = w * 8.7;
     //Return death
     return death
 }
 //create variable to catch stings till death
 var beeStingsTillDeath =  deathByBees(weight);

 //Show how many stings
 console.log("It takes " + beeStingsTillDeath + " to kill this animal");



