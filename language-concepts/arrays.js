let fruits = ['Custard Apple', 'Pomogranate', 'Guava', 'Apple', 'Banana'];

let costs = [50, 60, 70, 90, 40];

console.log(fruits);
console.log(costs);

let randomArray = ['Hi There', 77, 'good', 23, -54, 'food'];

console.log(randomArray);

// let len = randomArray.length;

// for (let i = len - 1; i >= 0 ; i--) {
//     console.log(randomArray[i]);
// }

console.log(randomArray[3]);
console.log(randomArray[randomArray.length - 1]);

// Updating 

randomArray[3] = 43;

randomArray[randomArray.length - 1] = 'work';


console.log(randomArray);

randomArray[randomArray.length] = 'New Item';

randomArray[randomArray.length] = 'New Item Two';

console.log(randomArray);


// push and pop

randomArray.push('New Item Three', 'New Item Four');

console.log(randomArray);

randomArray.pop();
randomArray.pop();

console.log(randomArray);

// Shift and Unshift

randomArray.shift();

console.log(randomArray);
randomArray.unshift('Hi Here', 'Hi Everywhere');

console.log(randomArray);

let concatenatedArray = fruits.concat(costs);

console.log(concatenatedArray);

console.log(concatenatedArray.includes('Apple', 0));

console.log(concatenatedArray.includes('Apples', 0));

console.log(concatenatedArray.indexOf('Apple', 0));

console.log(concatenatedArray.indexOf('Apples', 0));


// Join and Reverse

let fullNameArray = ['i', 'r', 'a', 'H'];

console.log(fullNameArray);


fullNameArray.reverse();

console.log(fullNameArray.join(''));

// Slice

let slAndSpArray = ['hi', 'bye', 'go', 'come', 'stay', 'good'];

console.log(slAndSpArray);

let slicedArray = slAndSpArray.slice(0, 2);

console.log(slicedArray);


// Splice

slAndSpArray.splice(1, 1, 'Coming in');

console.log(slAndSpArray);

// Nested Arrays

const nestedArray= [
    ['werw', 'werwer'],
    ['wewew', 'sdasdasd'],
    [
        ['asdasd', 'asda']
    ]
];

console.log(nestedArray);

console.log(nestedArray[0][1]);

console.log(nestedArray[2][0][1]);


