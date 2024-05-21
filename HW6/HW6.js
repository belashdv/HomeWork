//Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2
const animals = ['monkey', 'dog', 'cat'];
const indexOfLast = animals.length - 1;
console.log(animals[indexOfLast]);

//Task 3
const students = ['Polina', 'Dasha', 'Masha'];
console.log(students);
students.pop();
console.log(students);
students.push('Borya');
console.log(students);
students.shift();
console.log(students);
students.unshift('Andrey');
console.log(students);

//Task 4
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i=0; i<cats.length; i++) {
    console.log(cats[i]);
}
for (const iterator of cats) {
    console.log(iterator);
}

//Task 5
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const arr = evenNumbers.concat(oddNumbers);
console.log(arr.indexOf(8));

//Task 6
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((el) => console.log(el));

//Task 7
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
function myFunc (user, index) {
    console.log(`member ${index+1}: ${user}`);
}
const newArr = users.map(myFunc);

//Task 8
const numbers = [7, -4, 32, -90, 54, 32, -21];
const newNumbers = numbers.filter((el) => {return el > 0});
console.log(newNumbers);

//Task 9
const sumOfFibonacci = fibonacci.reduce((el, sum) => {return sum += el})
console.log(sumOfFibonacci);

//Task 10
const numurs = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumur = numurs.find((el) => {return el%2==0});
console.log(evenNumur);

//Task 11
console.log(numurs.some((el) => {return el%3==0 && el%5==0}));