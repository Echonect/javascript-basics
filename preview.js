var name = prompt("What is your name?");
alert(`Hi, ${name}. Want to see something cool?`);
document.querySelector('html').innerHTML = `
    <h1>Welcome to ${name}'s site<h1>
    <img src="GrinchGif.webp">
`;

let fname = "Stephen";
console.log(fname);

// Variables:
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (e.g., 1name)
// Cannot contain a space or hyphen (-)
// Are case sensitive

let firstName; // Different compared to:
let FirstName; // This variable

// To declare multiple variables:

let surName, lastName; // You can optionally initalise both, niether, or one.

// Best practice is to declare each variable separately

// This is a constant variable in Javascript
const interestRate = 0.3;
console.log(interestRate);

let myName = "John"; // String literal
let age = "30"; // Number literal
let isApproved = true; // Boolean literal
let selectedColour = undefined;
let nullMyName = null;

// Javascript is dynamically typed (the type of variable can change during runtime)

// Objects

let personName = "Jane"
let height = "180"

let person = {
    name: "Eloise",
    weight: "160"
};

// Dot notation
person.name = "Johnathon";

// Bracket notation
person["name"] = "Mike"

console.log(person.name);

// Array

