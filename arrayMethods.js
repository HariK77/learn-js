const numbers = [20, 21, 22, 23, 24, 25]

// Foreach
numbers.forEach(function (num, idx) {
    console.log(idx, num * 2);
});

function triple(n) {
    console.log(n * 3);
}
console.log('\n');
numbers.forEach(triple);

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
];

books.forEach(function (book) {
    console.log(book.title.toUpperCase());
});

for (let book of books) {
    console.log(book.title.toUpperCase());
}

for (let i = 0; i < books.length; i++) {
    console.log(books[i].title.toUpperCase());
}

// Map

const doubles = numbers.map(function (num) {
    return num * 2;
});

const verified = numbers.map(function (num) {
    return {
        value: num,
        isEven: num % 2 === 0
    };
});

console.log(doubles);

console.log(verified);

const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrieviated = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
});

console.log(abbrieviated);

// Arrow Functions

// const square = (x) => {
//     return x * x;
// };


const square = x => x * x;

console.log(square(7));

const multiply = (x, y) => x * y;

console.log(multiply(2, 3));

const greet = () => 'Hello World';

console.log(greet());


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubles1 = nums.map(num => num * 2);

console.log(doubles1);

// const parityList = nums.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// });

// const parityList = nums.map(n => {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// });

const parityList = nums.map(n => n % 2 === 0 ? 'even' : 'odd');

console.log(parityList);


// Find --- returns first match

const movies = ['Khalejaa', 'Robo', 'Gundamma Katha', 'Mr. and Mrs. Smith', 'Robo 2'];

let movie = movies.find(movie => movie.includes('Robo'));

console.log(movie);

// FIlter

const evens = nums.filter(n => n % 2 === 0);

console.log(evens);


const readingBooks = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
];

const ratings = readingBooks.filter(book => book.rating > 4.3);

console.log(ratings);


// every

const woords = ['dog', 'dig', 'log', 'bag', 'wag4'];

const all3LetteredWords = woords.every(word => word.length === 3);

console.log(all3LetteredWords);

const anyFourLetteredWord = woords.some(word => word.length === 4);

console.log(anyFourLetteredWord);

// Sort

const numberss = [20.50, 11.77, 57.45, 110.0, 7000.00, 4500.55, 34.0];

console.log(numberss.sort());

const ascSort = numberss.slice().sort((a,b) => a - b);
const descSort = numberss.slice().sort((a,b) => b - a);

console.log(ascSort);
console.log(descSort);


// Reduce

const sum = numberss.reduce((total, currentValue) => total + currentValue);

console.log(sum);

const grades = [87, 34, 69, 44, 72, 92, 47, 99, 82, 90, 57];

const maxGrade = grades.reduce((max, curVal) => {
    // if (curVal > max) return curVal
    // return max
    return Math.max(max, curVal);
})

const minGrade = grades.reduce((max, curVal) => Math.min(max, curVal))

console.log(maxGrade);
console.log(minGrade);

const votes = ['y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'y'];

const results = votes.reduce((tally, val) => {
    // tally[val] ? tally[val]++ : tally[val] = 1;
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

console.log(results);

const bookList = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 2.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 5.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 5.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 6.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
];


const groupedBooks = bookList.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {});

console.log(groupedBooks);