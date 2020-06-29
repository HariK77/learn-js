let pi = Math.PI;

console.log(pi);

console.log(Math.round(4.9));
console.log(Math.round(4.4));

console.log(Math.floor(4.9));
console.log(Math.ceil(4.4));


console.log(Math.pow(5,2));

console.log(Math.abs(-4.9));

console.log('Random Numbers Start\n');

// Random Number
for (let i = 0; i <= 20; i++) {
    // let step1 = Math.random();
    // let step2 = step1 * 6;
    // let step3 = Math.floor(step2);
    // let randomNumber = step3 + 1;
    // console.log(randomNumber);
    
    console.log(Math.floor(Math.random() * 6) + 1);
}

console.log('\nRandom Numbers  End');