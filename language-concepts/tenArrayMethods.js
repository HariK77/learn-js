/**
 * forEach
 */
const numArray = [11, 34, 89, 56, 26, 47, 66, 79, 94];

// With method
numArray.forEach(loopingThrough)

function loopingThrough(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

console.log('\n');

// onliner
numArray.forEach(num => console.log(num));
console.log('\n');

/**
 * filter
 */

const filteredArray = numArray.filter(num => num > 50);

console.log(filteredArray);

