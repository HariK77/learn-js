if (true) {
    var name = 'Hari';
}
console.log(name);

// Block scopes
if (true) {
    let hi = 'Hi There';
    const hello = 'Hi Hello'
}
// console.log(hi);
// console.log(hello);

// Lexical Scopes

function outer() {
    let movie = 'Khalejaa';

    function inner() {
        console.log(`${movie} is one my favourite movie`);
    }

    inner();
}
outer();


function outerTwo() {
    let movie = 'Khalejaa';

    function innerTwo() {
        let movie = 'Robo'
        console.log(`${movie} is one my favourite movie`);
    }

    innerTwo();
}
outerTwo();



