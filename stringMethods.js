let name = 'hari';

let capitalizedName = nameL.toUpperCase();

console.log(capitalizedName);

let firstName = '  Hari Krishna  ';

console.log(firstName.trim());

let fullName = 'Hari Krishna Velpula';

console.log(fullName.indexOf('Kr'));

console.log(fullName.indexOf('kr'));

console.log(fullName.slice(fullName.indexOf('K'), fullName.indexOf('K') + 8));


console.log(fullName.replace(fullName.slice(fullName.indexOf('K'), fullName.indexOf('K') + 8), 'Krishh '));


// String Escape

console.log('\nHari'); // new line

console.log('Hari\'s Card'); // single quote

console.log("Hari's Card\"s"); // double quote

console.log('Hey \\\\\\ There');


// String Template Literals

let greet = 'Hi There !!';
let intro = 'My name is Hari Krishna';
let age = 25;

message = `${greet}. ${intro}. I am learning Javascript. And I'm ${age} years old.`;

console.log(message);


// parseInt and parseFloat

console.log(parseInt('77'));

console.log(parseFloat('23.23'));


console.log(parseInt('55assd'));

console.log(parseFloat('32.32asdasd'));

console.log(parseInt('asasd 55 assd'));