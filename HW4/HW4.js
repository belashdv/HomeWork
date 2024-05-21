//Task 1
function getSum(a) {
    let sum = 0;
    for (i=0; i<=a; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(100));

//Task 2
function getSumNumbers(a) {
let text = a.toString();
b = text.split("");
let sum = 0;
b.forEach((element) => sum += Number(element));
return sum;
}
console.log(getSumNumbers(2024));
console.log(getSumNumbers(23));
console.log(getSumNumbers(2024123));
console.log(getSumNumbers(1));

//Task 3
function getSum(a, b) {
    if (a==b) {
        return a;
    } else {
        const arr = [];
        for (i=a; i<=b; i++) {
            arr.push(i);
        }
        let sum = 0;
        arr.forEach((element) => sum += element);
        return sum;
}}
console.log(getSum(-1, 3));
console.log(getSum(0, 4));
console.log(getSum(-2, 3));


//Task 4
// first try
function factorial(a) {
    const arr = [];
    for (i=1; i<=a; i++) {
        arr.push(i);
    }
    let sum = 1;
    arr.forEach((element) => sum *= element);
    return sum;
}
console.log(factorial(3));

//second try
function myFunc(a) {
    let sum = 1;
for (i=1; i<=a; i++) {
    sum *= i; 
}
    return sum;
}
console.log(myFunc(3));
console.log(myFunc(4));
console.log(myFunc(5));