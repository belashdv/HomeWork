//Task 1
const BMW120d = {
    engine: 2.0,
    fuel: "diesel",
    year: 2009,
    transmission: "manual",
    color: "black"
};

    console.log("color" in BMW120d);

//Task2
//first method
const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for (let key in student) {
    console.log(key);
}
for (let key in student) {
    console.log(student[key]);
}

//second method
console.log(Object.keys(student));
console.log(Object.values(student));

//Task 3
const colors = {
    'ru pum pu ru rum': {
        red: 'red',
        green: 'green',
        blue: 'blue'
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//Task 4
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexandra: 199
};
let numberOfPeople = Object.values(salaries).length; //4
let sum = 0;
Object.values(salaries).forEach((el) => sum += el); 
let averageSalary = sum / numberOfPeople;
console.log(averageSalary);