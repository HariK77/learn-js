function hiThere() {
    console.log('How are you ??');
}

hiThere();

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);

}

// rollDie();

function throwDice(times) {
    
    for (let i = 0; i < times; i++) {
        rollDie(); 
    }

}

throwDice(2);

function greet(name) {
    console.log(`Hi ${name}`);
}

greet('HariK');

function avg(x, y) {
    console.log(`Avg : ${(x+y%2)}`);
}

avg(4, 4);

function add(x, y) {
    return x + y;
}

let sum = add(7,5);

console.log(sum);

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple') {
            return true;
        }
    }
    return false;
}

colorsArray = ['blue', 'orange', 'green']

console.log(containsPurple(colorsArray));

// password validation

function isValidPassword(password, username) {
    // if (password.length < 8) {
    //     return 'Password must be atleast 8 characters long';
    // } else if(password.includes(' ')) {
    //     return 'Password must cannot contain spaces';
    // } else if (password.includes(username)) {
    //     return 'Password must cannot contain username';
    // } else {
    //     return true;
    // }
    // if (password.length < 8) {
    //     return 'Password must be atleast 8 characters long';
    // }
    // if(password.indexOf(' ') !== -1) {
    //     return 'Password must cannot contain spaces';
    // }
    // if (password.indexOf(username) !== -1) {
    //     return 'Password must cannot contain username';
    // }
    // return 'Password is valid';
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;

    if (tooShort || hasSpace || tooSimilar) return false;

    return true;
}

let result = isValidPassword('harik  8asda', 'hsarik');

console.log(result);


// Average

function avgNumber(arr) {
    let sum = 0;
    for (let elem of arr ) {
        sum += elem
    }
    return sum/arr.length
}

console.log(avgNumber([2, 5, 7, 9, 24, 54, 98]));


// Pangram

function isPangram(sentence) {

    let alphabets = 'abcdefghijklmnopqrstuvwxyz';

    let mod_sentence = sentence.toLowerCase()

    for (let i = 0; i < 26; i++) {
        if (mod_sentence.indexOf(alphabets[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));

console.log(isPangram('The five boxing wizards jump quick'));


// cards

function pick(arr) {
    
    const idx = Math.floor(Math.random() * arr.length);

    return arr[idx];
}

function getCard() {

    const cardValues = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'
    ]

    const cardTypes = ['clubs', 'spades', 'hearts', 'diamonds'];

    return {value: pick(cardValues), suit: pick(cardTypes)}
    
}

console.log(getCard());