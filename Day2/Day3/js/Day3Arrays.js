/*
Travis Johnson
03/07/15
Section 00
Day 3 Arrays
 */
//alert("Testing to make sure it is linked");

//Create a basic array
var avengersNames=["Thor", "Hulk", "Iron Man", "Capt. America" ];

//Print out whole array
console.log(avengersNames);

//Print out one specific item in the array. ARRAY STARTS AT index number 0!!!!****
console.log(avengersNames[2]);

//Swap items in our away
avengersNames[1]="Black Widow";

console.log(avengersNames);

//Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//Length property = How many items are in the array
//dot syntax = fancy for use a period
console.log(avengersNames.length);

//Add an item to an array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length] = "Wolverine";

console.log(avengersNames);


//Picking oranges
var orangesPicked=[13,350,1000];

//How many oranges did we pick in total
var totalOranges=orangesPicked[0] + orangesPicked[1] + orangesPicked[2];
console.log("The total number of orange picked is "+totalOranges+".");
//can use orangesPicked.length instead of 3 but it has to be fixed up ^^ there ^^
var averageOranges=totalOranges/3;
console.log("The average numbers of oranges picked per day is " + averageOranges +".");




