
 /*
Travis Johnson
Section 00
03/07/15
Day 3 Prompts
 */


//alert("Testing");

//Casting variables means treating one data type like another... if possilbe

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

//Number() - treats whatever is inside like a number if possible.
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

//Cast numbers to be a text string
//String() - treat whatever is inside as a text string
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")"+ prefix + "-"+ lineNumber);

//Parsing Integers
//parseInt() - looks through a text string and returns and integer
//Only the first number in the string is returned
//If the first character in the text string can NOT be converted into a number, then it returns NaN

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 years old");
 console.log(b);

 var c = parseInt("He was 40");
 console.log(c);

//Prompts ONLY return text strings.
var tshirtsOwned = prompt("How many tshirts do you currently own");

//Ask the use how many they bought
 var tshirtsBought = prompt("How many tshirts did you buy today");

//Calculate total number of t shirts
var totalShirts = parseInt(tshirtsOwned) + Number(tshirtsBought);

console.log("You currently own " + totalShirts+ " shirts.");