
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
 var temp = 75;

 //Set water temp
 var waterTemp = 78;

 if(temp >= 80){
     console.log("Lets go to the beach");

     if(waterTemp > 75){
         console.log("Lets go swimming");
         var knowSwim = "yes";
         if(knowSwim = "yes"){
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
 var kids = "no"
 //test if we have kids
 if(kids === "no"){
     console.log("Lets see 50 shades of gray")

 }else{
     console.log("Lets go see spongebob")
 }