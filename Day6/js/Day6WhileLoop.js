
 /*
Travis Johnson
Section 00
03/14/15
Day 6 while loops Prompts
 */


//alert("Testing");

 //Basic while loop

 //Start a counter variable
 var counter = 0;

 //Start the while loop
 //condition to test goes inside ()
 while(counter < 200){
     console.log("Some things never end");
     console.log(counter);

     //Make a change to the counting variable
     counter += 50 ;

 }

 //Do while loop
 //This loop will run the code first then check the condition

 /*
 do{

 //code to run

 }//while(condition to test);
  */

 //declare a counting variable
 var i = 20;

 do{
     console.log("The number is " + i);

     //change the counting variable
     i++
 } while(i < 10);