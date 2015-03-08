/*
Travis Johnson
Section00
03/07/15
Expressions Assignment
 */
//alert("Testing");

//Calculator that tells you the average amount of Madden games you play per week

//Tell the user whats going on
alert("Hello, this calculator is designed to tell you the average number of Madden games you play per week. Play responsibly.");

var maddenMonday = prompt("How many games of Madden did you play on Monday?");
var maddenTuesday = prompt("How many games of Madden did you play on Tuesday?");
var maddenWednesday = prompt("How many games of Madden did you play on Wednesday?");
var maddenThursday = prompt("How many games of Madden did you play on Thursday?");
var maddenFriday = prompt("How many games of Madden did you play on Friday?");
var maddenSaturday = prompt("How many games of Madden did you play on Saturday?");
var maddenSunday = prompt("How many games of Madden did you play on Sunday");
var maddenTimesPlayedPerDay = [0];


maddenTimesPlayedPerDay[0]=parseInt(maddenMonday);
maddenTimesPlayedPerDay[1]=parseInt(maddenTuesday);
maddenTimesPlayedPerDay[2]=parseInt(maddenWednesday);
maddenTimesPlayedPerDay[3]=parseInt(maddenThursday);
maddenTimesPlayedPerDay[4]=parseInt(maddenFriday);
maddenTimesPlayedPerDay[5]=parseInt(maddenSaturday);
maddenTimesPlayedPerDay[6]=parseInt(maddenSunday);


var totalGamesPlayed = maddenTimesPlayedPerDay[0] + maddenTimesPlayedPerDay[1] + maddenTimesPlayedPerDay[2] + maddenTimesPlayedPerDay[3] + maddenTimesPlayedPerDay[4] + maddenTimesPlayedPerDay[5] + maddenTimesPlayedPerDay[6];

var averageGamesPlayed = totalGamesPlayed /=7;

console.log(averageGamesPlayed);