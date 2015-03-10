
 /*
Travis Johnson
Section 00
03/07/15
Day 3 Prompts
 */


//alert("Testing");

 // If your GPA is over 2.0 then you can graduate

 //create a variable for gpa
 var gpa = 3.5;

 //Basic conditional
if (gpa > 2.0){
    console.log("You can graduate");

} else{
    console.log("Work harder");
}

 //(condition to test) ? code to run if true : code to run if false

 //create a basic ternary for our GPA
 (gpa > 2.0) ? console.log("You can graduate.") : console.log("Work harder");

 //If a child is under 10 they have to read green eggs and ham if not they have to read the time machine

 //create a variable for child age and for the book they have to read
 var age = 6;
 var book;

 //use a ternary to define the book

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

 console.log("The kid should read " + book + ".");

 //value of book if basic conditional
 var bookBasic;
 if(age<10){
     bookBasic = "Green Eggs and Ham";

 } else{bookBasic = "The Time Machine";
 }

 console.log(bookBasic);