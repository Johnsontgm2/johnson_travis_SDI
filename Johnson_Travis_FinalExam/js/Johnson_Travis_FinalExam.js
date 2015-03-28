
 /*
Travis Johnson
Section 00
03/28/15
Final Exam
 */


//alert("Testing");
 //prompt user for cost
var costOfItem = prompt("This calculator will give you the price of an Item after discount.\nWhat is the cost of the Item?");
 //validate
 while(costOfItem === "" || isNaN(costOfItem)){
     costOfItem = prompt("Please do not leave blank and only enter a number")

 }
 //prompt for discount
 var discountPercent = prompt("What is the percent of discount. Please only enter a number between 0 and 100.");
 //validate
 while(discountPercent === "" || discountPercent < 0 || discountPercent >100 || isNaN(discountPercent)){
     discountPercent = prompt("Please do not leave blank, only enter a number and remember to make sure its between 0 and 100")
 }
 //create function for cost after discount
 function costAfterDiscount(cost,discount) {
     var discountPercent = (discount / 100) * cost;
     var finalCost = cost - discountPercent;
     return finalCost
 }
 //call function
 var theFinalPrice = costAfterDiscount(costOfItem,discountPercent);
 console.log ("The final cost of an item that costs $" + costOfItem + " with a discount of " + discountPercent + "%" + " is $" +theFinalPrice + "." );

 /*
 Tested all prompts for blanks and cats
 Tested percent prompt for less than 0 and greater than 100 : returned prompts
 Tested price of 100 with discount of 20 returned 80
 Tested with price of 10 with discount of 10% returned 9 dollars
  */