const age = prompt("Please enter your age");
if (age >= 18)
    console.log("You are an adult");
if (age < 18)
    console.log("You are NOT an adult");



const number = prompt("Enter a number: ");
if (number > 0) {

    console.log("The number is positive");
}




const hours = 8;
if (hours < 12)
    console.log("Good Morning!");
else
    console.log("Good Afternoon");




var one = prompt("Enter the first number");

var two = prompt("Enter the second number");

one = parseInt(one);
two = parseInt(two);

if (one == two)
    console.log(one + " is equal to " + two + ".");


else if (one < two)
    console.log(one + " is less than " + two + ".");

else
    console.log(one + " is greater than " + two + ".");





var book = prompt("Enter Book Name");
if (book == "history") {
    console.log("History Book");
} else if (book == "maths") {
    console.log("Maths Book");
} else if (book == "economics") {
    console.log("Economics Book");
} else {
    console.log("Unknown Book");
}