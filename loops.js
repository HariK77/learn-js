for (let i=1; i<=5; i++) {
    console.log('Hi There:', i);
}

const fruits = ['Pomogranate', 'Guava', 'Apple'];

let length = fruits.length;

for (let h = 0; h < length; h++) {
    console.log(`${h} : ${fruits[h]}`)
}

const gods = [
    {
        name: 'Hari',
        weapon: 'Chakram'
    },
    {
        name: 'Shiva',
        weapon: 'Threeshoolam'
    },
    {
        name: 'Brahma',
        weapon: 'Brahmasthram'
    }
];

lt = gods.length - 1;

for (k = 0; k <= lt; k++) {
    console.log(`Lord ${gods[k].name}'s weapon is ${gods[k].weapon}.`);
}


//  While Loops

let num = 10;

while (num >= 1) {
    console.log(num)
    num--
}

for (k = 0; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log(k)
}

for (let fruit of fruits) {
    console.log(fruit);
}


// 
const movieReviews = {
    Kabali: 7,
    Shivaji: 10,
    'Robo 2': 9,
    Robo: 10
}

for (let movie of Object.keys(movieReviews)) {
    console.log(`${movie} : ${movieReviews[movie]}`);
}

for (let key in movieReviews) {
    console.log(`${key} : ${movieReviews[key]}`);
}