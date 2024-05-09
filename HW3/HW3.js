//Task 1
// let FirstName = prompt("What's your first name?", "John");
// let LastName = prompt("What's your last name?", "Doe");
// alert("Hello", FirstName, LastName);

//Task 2
let str = "I'm learning typescript!";
if (str.includes("I'm learning")) {
    console.log(str.indexOf("I'm learning"));
} else {
    console.log("There is no given substring");
};

//Task 3
let text = "An arbitrary string is given.";
if (text.endsWith(".")) {
    console.log("This sentence is finished");
} else {
    console.log("There is a missing dot at the end of the sentence");
};

//Task 4
console.log(str.substring(0, 12));
console.log(str.slice(13));

//Task 5
console.log(str.split(' '));

//Task 6
let str2 = "                I'm learning typescript!                ";
console.log(str2.trim());

//Task 7
let num = 5;
let power = 4;
console.log(Math.pow(num, power));

//Task 8 
let range = 100;
console.log(Math.random()*range);

//Task 9
const date = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(`Current date: ${month[date.getMonth()]}/${date.getFullYear()}/${date.getDate()}. The current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);