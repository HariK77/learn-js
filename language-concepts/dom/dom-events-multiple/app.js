const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const container = document.querySelector('#boxes');

const changeColor = function(evt) {
    console.log(evt);
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.append(box);
    box.addEventListener('click', changeColor)
}

document.body.addEventListener('keypress', function(e) {
    console.log(e);
});