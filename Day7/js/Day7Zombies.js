
 /*
Travis Johnson
Section 00
03/17/15
Day 7 Zombies
 */


//alert("Testing");

 // Zombie ATTACK!!
 // We have accidently created a zombie at FullSail.
 // A Zombie can bite four people a day and turn them intoZombies the next day.
 // the CDC wants to know how many zombies there will be in 8 days

 // Givens that we know

 //How many zombies do we have

 var numZombies = 1;

 //How many bites per zombie per day

 var numBites = 4;

 // Number of days that the CDC wants
 var Days = 8;

 //create for loop to calculate zombie number
 /*for(var i = 1; i <= days; i++ ){


 }
*/

 //How long will it take to get a million zombies

 var numDays = 1;

 while(numZombies <= 1000000){
     //How many new zombies get made every day
     var newZombies = numZombies * numBites;

     //add the new zombies to our existing horde.
     numZombies += newZombies;

     //console.log the results
     console.log("There are " + numZombies + " number of zombies on day # " + numDays + "!");

     numDays++;

 }

 console.log("It will take " + (numDays - 1) + " days to reach a million zombies.");
