
 /*
Travis Johnson
Section 00
03/10/15
Day 5 Nesting Ifs
 */


//alert("Testing");

//Some decisions affect other decisions

 //If it is warm lets go to the beach if it is not lets go to the movies

 //Get the temperature
 var temp = prompt("We are going to figure out what you should do today \nWhat is the current temperature outside ?");

 //validate that the user typed in something - did they leave it blank?
 if(temp === ""){
     //this code will run if the user types in nothing
     //reprompt the user
     temp = prompt("please do not leave this blank, it is required\nWhat is the current temperature outside");


 }

//validate that the user typed in a number
 //isNaN() - is it not a number - returns a boolean
 //literally say it out loud is monkey not a number?

 console.log(isNaN(7)); //Gives us false
 console.log(isNaN("monkey")); //gives us true


 if (isNaN(temp)){
     //this code will run when temp is not a number
     // reprompt the  user for the information
     //give the user a second chance
     temp = prompt("Please only type in numbers\nEnter the temperature outside");

 }



 if(temp >= 80){
     console.log("Lets go to the beach");
     //Set water temp
     var waterTemp = prompt("What is the current water temperature");

     //validate the water temp
     if(waterTemp === "" || isNaN(waterTemp)){
         //this code will run if the variable is blank or not a number
         //we are going to reprompt the user
         waterTemp = prompt("Please do not leave blank and only use numbers\nWhat is the water temp");

     }

     if(waterTemp > 75){
         console.log("Lets go swimming");
         var knowSwim = prompt("Do you know how to swim?");

         //convert the text string to lowercase
         //toLowerCase - dot syntax - use a period
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);

         //validate the no swim variable

         if(knowSwim != "yes" && knowSwim !="Yes" && knowSwim !="no" && knowSwim !=  "No"){
            //Reprompt the user
             knowSwim = prompt("Only type in yes or no\ncan you swim?")
             knowSwim = knowSwim.toLowerCase
         }

         if(knowSwim == "yes"){
             console.log("no floaties needed");
         } else{
             console.log("get floaties");
         }

     } else{
         console.log("Lets get a tan");
     }

 } else {
     console.log("Lets go to the movies");
 }

/*
 //If the water temperature is above 75 lets go swimming if not lets get a tan

 if(waterTemp > 75){
     console.log("Lets go swimming");

 } else{
     console.log("Lets get a tan");
 }
    */

 // do  we have any kids in the group
 var kids = prompt("Are you bringing kids");
 //validate
 //convert to lowercase
 kids = kids.toLowerCase();

 if(kids != "yes" && kids != "no"){
     //reprompt
     kids = prompt("Please enter only yes or no\nAre you bringing kids?");
     //convert to lower case again
     kids = kids.toLowerCase()

 }


 //test if we have kids
 if(kids === "no"){
     console.log("Lets see 50 shades of gray");

 } else{
     console.log("Lets go see spongebob")
 }