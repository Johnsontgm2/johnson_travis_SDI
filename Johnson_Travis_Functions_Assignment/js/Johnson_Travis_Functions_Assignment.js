
 /*
Travis Johnson
Section 00
03/24/15
Functions Assignment
 */


//alert("Testing");

//Inform the user of the calculators purpose
 alert("This calculator is designed to find the distance of an object (In yards) when given the size of the target in inches and the measurement of the object in Mils.A MIL-DOT SCOPE IS REQUIRED FOR THESE CALCULATIONS.");

 //First make sure the user has a mil dot scope before starting
 var milDotScope = prompt("For this calculator to function properly you must have a MIL-DOT scope.\n Do you have a MIL-DOT scope? (if unsure check user manual)");

 //validate and prompt user if scope not mil-dot
while(milDotScope === ""){
     milDotScope = prompt("Please do not leave blank\n Is your scope MIL-DOT? Please enter yes or no (Remember if your not sure to check your manual)");
}
 while(milDotScope === "no" || milDotScope === "No"){
    milDotScope = alert("You must have a MIL-DOT scope to continue\n If unsure check the user manual of your scope")
 }
 while(milDotScope != "Yes" && milDotScope != "yes" && milDotScope && "No" && milDotScope != "no"){
    prompt("Please only enter yes or no. Do you have a MIL-DOT scope?");
 }