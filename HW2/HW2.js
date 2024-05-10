//Task 1
let x = 20;
let y = 58;
let z = 42;
let result = x + y + z;
console.log('Summ =', result);

//Task 2
let secondsPerMinute = minutesPerHour = 60;
let hoursPerDay = 24;
let daysPerYear = 365;
let myAge = 32;
let myAgeInSeconds = myAge * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
console.log('My Age in seconds is', myAgeInSeconds, 'seconds');

//Task 3
let count = 42;
let userName = '42';
//conversion to string
var a = String(count);
var b = count.toString();
console.log(a, b);
//conversion to Number
var a = Number(userName);
var b = parseInt(userName);
console.log(a, b);

//Task 4
var a = 1;
var b = 2;
var c = "polar bears";
console.log(a.toString()+b.toString(), c);

//Task 5
let Num = 56;
let Text = "Happy";
let Bool = true;
console.log("Variable: Num, have type:", typeof Num);
console.log("Variable: Text, have type:", typeof Text);
console.log("Variable: Bool, have type:", typeof Bool);

//Task 6
var a = 'true';
var b = false;
var c = 17;
var d = undefined;
var e = null;
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

//Task 7
let height = 15;
let width = 20;
console.log('The higher number between two variables is',Math.max(height,width));

//Task 8
for (i=1; i<20; i++) {
    if (i%3==0) {
console.log(i);
}   else {
    continue
}
};

//Task 9
let age = 24;
if (age<16) {
console.log("Drink a Coke") 
} else if ( age>=16 && age<18) {
console.log("You can smoke a cigarette, just don't tell your mother.")
} else {
console.log("Have a beer.")
};

//Task 10
let text;
let direction = prompt("Which side of the world you want to visit? (south, north, west, east)");
switch(direction) {
    case "north":
        text = 'you will find a lot of money going north';
    break;
    case "south":
        text = 'you will go to the south and find happiness'
    break;
    case "west":
        text = 'you will go to the west, you will find a faithful friend';
    break;
    case "east":
        text = 'you will go to the east and become a developer';
    default:
        text = 'You write incorrect data, try any of this option: south, north, west, east';
};