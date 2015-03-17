
 /*
Travis Johnson
Section 00
03/15/15
Loops Worksheet
 */


//alert("Testing")

 // Set variable with prompt and validate
 var raffleTickets = prompt("Please enter the last raffle ticket number given");
 if(raffleTickets === "" || raffleTickets > 74){
     prompt("Please do not leave blank. Number can not be higher then 75(last ticket) Please enter the number of raffle tickets given ")

 } else if(isNaN(raffleTickets)){
     prompt("Please only enter numbers. Please enter the number of the last raffle ticket given")
 }

 raffleTickets ++;
 //give remaining tickets with while loop
 while(raffleTickets <= 75){
     console.log("ticket number " + raffleTickets + " is still available");

     raffleTickets ++

 }
/*
Tested all prompts
Entered ticket 73
Returned 74 and 75 still available
Entered 76
Returned prompt to reenter
 */

 //Declare variables validate prompts
 var lastJerseyIssued = prompt("Please enter the number of the last jersey available. Remember to distribute in order!");

 if(lastJerseyIssued === "" || lastJerseyIssued > 98){
     prompt("Please do not leave blank and use only numbers. Please enter the number of the last jersey available")

 }else if(isNaN(lastJerseyIssued)){
     prompt("Please only enter in numbers. What is the number of the last jersey available")


 }
//do while loop to give jersey numbers still available
 do{
     console.log("The jersey number " + lastJerseyIssued   + "  is still available");

     lastJerseyIssued ++



 } while(lastJerseyIssued < 100);

 /*
Tested prompts for blank, number greater than 98, and NaN all returned prompts to reenter
Entered 97
Returned 97 98 99 still available
  */

//declare variables validate prompts
var partyYesOrNo = prompt("Is the party happening?");
//change to lowercase
 partyYesOrNo.toLowerCase();

 if(partyYesOrNo === ""){
     prompt("Please do not leave blank. Please enter yes or no")

 }else if(partyYesOrNo != "yes" && partyYesOrNo != "no" ){
     prompt("Please only enter yes or no")

 } if(partyYesOrNo === "no"){
     console.log("You should have a party");

//for loop to tell people what to bring to the party

 }else if(partyYesOrNo === "yes"){

     for( var peopleComingToParty = 0;peopleComingToParty<=3;peopleComingToParty ++) {
         if (peopleComingToParty === 0) {
             console.log("Host setup the party!")

         } else if (peopleComingToParty === 1) {
             console.log("Person one should bring drinks")

         } else if (peopleComingToParty === 2) {
             console.log("Person 2 should bring a snacks")

         } else if (peopleComingToParty === 3) {
             console.log("Person 3 should bring music")


         }
     }
 }

 /*
Tested no
Returns you should have a party
Tested yes
Returns what the host and 3 guests should bring
  */