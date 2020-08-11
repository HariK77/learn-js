const h1 = document.querySelector('h1');

console.log(h1.innerText);

h1.innerText = 'Changed H1 Text';

console.log(h1.textContent);

h1.textContent = 'Changed twice';

const p = document.querySelector('#main');

console.log(p.innerText);

console.log(p.textContent);

const form = document.querySelector('form');

console.log(form.innerHTML);
console.log(p.innerHTML);

h1.innerHTML += ' <b> !!! </b>';

const inputs = document.querySelectorAll('input');

console.log(inputs);

console.log(inputs[0].value);
console.log(inputs[1].value);
console.log(inputs[2].checked);

const img = document.querySelector('img');

console.log(img.src);

const range = document.querySelector('input[type="range"]');

console.log(range.getAttribute('max'));

range.setAttribute('min', '-500');

const firstLi = document.querySelector('li');

console.log(firstLi.parentElement.parentElement.parentElement);

console.log(firstLi.nextElementSibling);

const thirdLi = firstLi.nextElementSibling.nextElementSibling;

console.log(thirdLi.previousElementSibling.previousElementSibling);

const ul = document.querySelector('ul');

console.log(ul.childElementCount);

const pTag = document.querySelector('p');

pTag.style.backgroundColor = 'black';
pTag.style.color = 'white';