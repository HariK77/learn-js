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

const li = document.querySelector('li');

console.log(getComputedStyle(li));

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo.classList.toggle('done');

const newh2 = document.createElement('h2');
newh2.innerHTML = '<b> Hi THere</b>';
newh2.classList.add('special');


const section = document.querySelector('section');

section.appendChild(newh2);

const imgTag = document.createElement('img');

// https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80

imgTag.src = 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80';

imgTag.width = 300;
imgTag.height = 500;

section.appendChild(imgTag);


const parentUl = document.querySelector('#todos');

const newLi = document.createElement('li');

newLi.innerText = 'I\'m added newly !!!';

newLi.classList.add('todo');


// parentUl.appendChild(newLi);

firstLiTodo = document.querySelector('li.todo');

parentUl.insertBefore(newLi, firstLiTodo);

const i = document.createElement('i');
i.innerText = 'I\'M ITALICS';

p.insertAdjacentElement('beforeend', i)


// 

p.append(i, newLi);
p.prepend(i, newLi);

// remove, removeChild

const spUl = document.querySelector('section ul');
console.log(spUl);

const spLi = spUl.querySelector('.special');

spUl.removeChild(spLi);

 h1.remove();