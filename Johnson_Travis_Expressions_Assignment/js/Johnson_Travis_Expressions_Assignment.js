/*
Travis Johnson
Section00
03/07/15
Expressions Assignment
 */
//alert("Testing");

//Calculator that tells you the average amount of Madden games you play per week

//Tell the user whats going on
alert("Hello, this Madden addiction calculator is designed to tell you the average number of Madden games you play per week. This calculator will also give you a recommended amount of games you should play the next week, hopefully it will help curb the addiction. Play responsibly. ");

//Ask user for input
var maddenMonday = prompt("How many games of Madden did you play on Monday?");
var maddenTuesday = prompt("How many games of Madden did you play on Tuesday?");
var maddenWednesday = prompt("How many games of Madden did you play on Wednesday?");
var maddenThursday = prompt("How many games of Madden did you play on Thursday?");
var maddenFriday = prompt("How many games of Madden did you play on Friday?");
var maddenSaturday = prompt("How many games of Madden did you play on Saturday?");
var maddenSunday = prompt("How many games of Madden did you play on Sunday");
var maddenTimesPlayedPerDay = [0];

//took data from prompts and entered it into an array
maddenTimesPlayedPerDay[0]=parseInt(maddenMonday);
maddenTimesPlayedPerDay[1]=parseInt(maddenTuesday);
maddenTimesPlayedPerDay[2]=parseInt(maddenWednesday);
maddenTimesPlayedPerDay[3]=parseInt(maddenThursday);
maddenTimesPlayedPerDay[4]=parseInt(maddenFriday);
maddenTimesPlayedPerDay[5]=parseInt(maddenSaturday);
maddenTimesPlayedPerDay[6]=parseInt(maddenSunday);

console.log("Monday you played " + maddenMonday + " games of Madden. " + " \n Tuesday you played " + maddenTuesday + " games of Madden." + "\n Wednesday you played" + maddenWednesday + " games of Madden." + "\n Thursday you played " + maddenThursday + "games of Madden." + "\n Friday you played " + maddenFriday + " games of Madden. " + "\n Saturday you played " + maddenSaturday + " games of Madden. " + "\n Sunday you played " + maddenSunday + " games of Madden. ");


//Found the average of the information in the array
var totalGamesPlayed = maddenTimesPlayedPerDay[0] + maddenTimesPlayedPerDay[1] + maddenTimesPlayedPerDay[2] + maddenTimesPlayedPerDay[3] + maddenTimesPlayedPerDay[4] + maddenTimesPlayedPerDay[5] + maddenTimesPlayedPerDay[6];
console.log("Your total Madden games played per week is " + totalGamesPlayed);

var averageGamesPlayed = totalGamesPlayed /=7;
console.log("Your average games played per week is " + averageGamesPlayed);


//Subtract two of the days total of games to give the recommended total for the next week.
var totalGamesForRecommendation = maddenTimesPlayedPerDay[0] + maddenTimesPlayedPerDay[1] + maddenTimesPlayedPerDay[2] + maddenTimesPlayedPerDay[3] + maddenTimesPlayedPerDay[4] + maddenTimesPlayedPerDay[5] + maddenTimesPlayedPerDay[6];

var recommendedGamesToPlay = totalGamesForRecommendation - maddenFriday - maddenSunday;
console.log("The calculator recommends you reduce your total games played next week to " + recommendedGamesToPlay + " to help curb your addiction ");

/*
Entered a Value of 1 for all days of the week
returned 1 for each day of the week
returned a 7 for total
returned an average of 1
returned a recommended game play of 5
Entered a value of 2 for all days
 returned 2 for each day
 returned 14 for a total
 returned an average of 2
 returned a recommended game play of 10
 */

