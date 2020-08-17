const p = document.getElementById('main');

console.log(p);
console.dir(p);


const inputs = document.getElementsByTagName('input');

console.log(inputs);
console.dir(inputs);

console.log(inputs[0]);

for (let input of inputs) {
    console.log(input);
}

const classes = document.getElementsByClassName('special');

console.log(classes);


// Getting elements within known elements

const ul = document.getElementsByTagName('ul')[0];

const specialClinUl = ul.getElementsByClassName('special');

console.log(specialClinUl);


// you can't search with getElementById in within results of already got elements.

// ul.getElementById('special');

// querySelector returns first match
// querySelectorAll returns all elements

const queryh1 = document.querySelector('h1');

console.log(queryh1);

const queryp = document.querySelector('p');

console.log(queryp);

const querypAll = document.querySelectorAll('p');

console.log(querypAll);

const bearPhoto = document.querySelector('#bear-photo');

console.dir(bearPhoto);

const queryClass = document.querySelector('li.special');

console.log(queryClass);

const queryClassAll = document.querySelectorAll('.special');

console.log(queryClassAll);

const specificSelect = document.querySelector('section li.special');

console.log(specificSelect);

const password = document.querySelector('input[type="password"]');

console.log(password);