
 /*
Travis Johnson
Section 00
03/07/15
Day 7 loop arrays
 */


//alert("Testing");

 // Tell each member of the scooby gang that they solved a mystery

 // Create an array of gang members
 var names = ["Scooby Doo", "Shaggy", "Velma", "Daphne", "Fred"];

 //Add scrappy to the gang
 names.push("Scrappy");

 // create for loop to cycle through the array
 for(var i = 0; i < names.length; i ++){

     //console.log each person
     console.log("You solved the case " + names[i] + "!");

 }

 //Keep track of our bills and get the total and average
 var bills = [50, 10, 5, 20, 10];

 //create variable for total and average
 var total = 0;
 var average = 0;

 //create variabel to track item total
 var numItems = 0;

 for(var j = 0; j < bills.length; j++){

     // omly add them if they are equal too or over 15 dollars
     if(bills[j]>=15){
         //Add each bill to the total
         total += bills[j];
         numItems ++;
     }



 }
 console.log("The total is " + total);

 //calculate the average
 average = total / numItems;
 console.log("The average is " + average);