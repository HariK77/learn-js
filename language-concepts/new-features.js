// Function default parameters

const multiply = (x, y = 1) => {
    return x * y;
}

console.log(multiply(4, 4));


const greet = (name, greet = 'Hello') => `${greet}, ${name}`;

console.log(greet('Hari', 'Hi'));

console.log(greet('Hari'));


// Spread operator
// function calls

const nums = [3, 7, 9, 24, 21, 36, 47, 55, 66, 79];

let max = Math.max(3, 7, 9, 24, 21, 36, 47, 55, 66, 79);

console.log(max);

console.log(Math.max(...nums));

const giveMeFour = (a, b, c, d) => {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

console.log(giveMeFour(...['blue', 'green', 'orange', 'white']));
console.log(giveMeFour(...'Hari'));

// Array Literals

const colorPalleteOne = ['blue', 'green', 'orange', 'white'];
const colorPalleteTwo = ['black', 'pink', 'brown'];

const allColors = ['violet', ...colorPalleteOne, ...colorPalleteTwo];

console.log(allColors);

const details = {
    name: 'Hari',
    age: 26,
    favColor: 'blue'
}

const education = {
    grad: 'B.Tech'
}

const allDetails = {...details, ...education, test: 'test', ...colorPalleteTwo};

console.log(allDetails);


// REST

// function sum() {
//     const argsArr = [...arguments];
//     return argsArr.reduce((total, val) => total + val)
// }

function sum(...nums) {
    return nums.reduce((total, val) => total + val)
}

console.log(sum(3, 6, 8, 3, 5));

function fullName(first, last, ...titles) {
    console.log(first);
    console.log(last);
    console.log(titles);
}

console.log(fullName('hari', 'krishna', 'Mr.', 'Dr.'));

const multiplyTwo = (...nums) => nums.reduce((total, val) => total * val);

console.log(multiplyTwo(1, 2, 3, 4));


const namesArray = ['Hari', 'Mahesh', 'Venkata', 'Ashok', 'Maxx'];

// const hari = namesArray[0];
// const mahesh = namesArray[1];
// const venkata = namesArray[2];

const [hari, mahesh, venkata] = namesArray;

const [first, , third] = namesArray;

console.log(mahesh);
console.log(first);
console.log(third);


const [firstP, , ...others] = namesArray;

console.log(firstP, others);


const me = {
    firstName: 'Hari',
    lastName: 'Krishna',
    country: 'India',
    title: 'Mr. No Feelings'
};

const {firstName, lastName} = me;

console.log(firstName, lastName);


const {country: nation, title: nickName} = me;

console.log(nation, nickName);

const meTwo = {
    testOne: 'Hari',
    testTwo: 'Krishna',
    testThree: 'India',
    testFour: 'Mr. No Feelings'
};

const {testOne, testTwo, ...othersToo} = meTwo;

console.log(testOne, testTwo, othersToo);

const results = [
    {
        first: 'Hari',
        last: 'Krishna',
        country: 'West Indies'
    },
    {
        first: 'Mahesh',
        last: 'Boorugula',
        country: 'Jamica'
    },
    {
        first: 'Venkata',
        last: 'Swamy',
        country: 'Kenya'
    },
];

let [, {country: desham}] = results;

console.log(desham);


const runner = {
    first: 'Hari',
    last: 'Krishna',
    country: 'India',
    title: 'Mr. No Feelings'
};

function print({first, last}) {
    console.log(first, last);
}

print(runner);


const response = [
    'HTTP/2.2',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, status, type]) {
    console.log(protocol);
    console.log(status);
    console.log(type);
}

parseResponse(response);