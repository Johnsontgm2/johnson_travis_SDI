
 /*
Travis Johnson
Section 00
03/10/15
Day 3 Prompts
 */


//alert("Testing");

 //basic conditional, if we have enough money to buy a car

 //create a few variables
 var budget = 15000;
 var carPrice = 23000;
 var paycheck = 1600;

 if(budget >= carPrice){
     console.log("You can afford the car.");

 } else{
     console.log("You are broke, try taking the bus");
 }

 //We can buy the car if our budget is greater than or equal to the car price OR our pay check is more than 1500

 if(budget >= carPrice || paycheck > 1500){
     console.log("You can buy the car");
 } else{
     console.log("You don't make enough money and your budget is too low");
 }

 /*
 Truth table for || "Or"
 t || t = t
 t || f = t
 f || t = t
 f || f = f
  */
 /*
 Truth table for && "And"
 t && t = t
 t && f = f
 f && t = f
 f && f = f
  */

 //You can buy a car if the budget is greater than or equal to the car price AND your paycheck is over 1500


 if(budget >= carPrice && paycheck > 1500){
     console.log("You can buy the car");

 } else{
     console.log("Find a better car or a cheaper job");
 }