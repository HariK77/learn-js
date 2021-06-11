function greet() {
    console.log('Hi There !!');
}

// setTimeout(greet, 3000);

setTimeout(function () {
    console.log('Hi There !!');
}, 2000);

let btn = document.querySelector('button');

// console.log(btn);

// btn.addEventListener('click', greet);

// function greet() {
//     alert('Hello There !!')
// }

btn.addEventListener('click', function() {
    alert('Hello There !!')
});