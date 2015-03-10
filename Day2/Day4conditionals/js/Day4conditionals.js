/**
 Travis Johnson
 Section 00
 03/10/15
 Day 4 credentials

 */
//alert("test");

//basic conditional
/*
if(condition to test){
    code to run if the condition is true
}
 */

//create boolean variable
var oldEnough = false;

//if the kid is old enough he can ride the ride
if (oldEnough){
    //code to run is the kid is old enough
    console.log("The kid is old enough to ride the coaster.");

} else {
    //Code to run if the kid is not old enough
    console.log("Sorry you are too young.");
}

//relational operators

//If the kid is over 48 inches tall he can ride the coaster
var kidHeight = 47;

//create variable for minimum height requirements
var minHeight = 48;

//create a variable for sneaker lifts
var sneakerLifts = 2;

//Test the kids height
if(kidHeight > minHeight ){
    console.log("The Kid is tall enough to ride the coaster");

} else if(kidHeight + sneakerLifts > minHeight){
    console.log("If you use enough napkins you can ride the ride")

} else {
    console.log("Sorry you are too short! ");
} 