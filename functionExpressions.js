function addEx(x, y) {
    return x + y;
}

const sumEx = function (x, y) {
    return x + y;
}

// const sum = function plus(x, y) {
//     return x + y;
// }

console.log(addEx(5, 7));

console.log(sumEx(77, 55));


// Functions in an array

const add = function (x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide]

for (let func of operations) {
    console.log(func(30, 5));
}

const thing = {
    doSomething: multiply
}

console.log(thing.doSomething(5, 7));

function callThreeTimes(f) {
    f();
    f();
    f();
}

function name() {
    console.log('My Name is Hari Krishna');
}

function age() {
    console.log('And I\'m 27 years old');
}

callThreeTimes(name);

console.log('\n');

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action()
    }
}
repeatNTimes(name, 5);

console.log('\n');

function pickOne(f1, f2) {
    
    Math.random() > 0.5 ? f1() : f2()
}

pickOne(name, age)

function multiplyBy(num) {
    return function (x) {
        return x * num
    }
}

const triple = multiplyBy(3)
const double = multiplyBy(2)

console.log(triple(4));

console.log(double(3));


function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(1, 17);

const isNinties = makeBetweenFunc(1990, 1999)

console.log(isChild(19));

console.log(isNinties(1994));