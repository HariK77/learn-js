const btn = document.querySelector('#clicker');

// btn.onclick = function () {
//     console.log('You Clciked Me');
// };

// btn.ondblclick = function () {
//     console.log('You Clciked Me Double');
// }

btn.addEventListener('click', function() {
    console.log('You Clciked Me');
});

btn.addEventListener('click', () => {
    console.log('Second Thing');
});

btn.addEventListener('mouseover', () => {
    btn.innerText = "Stop Touching Me"
});

btn.addEventListener('mouseout', () => {
    btn.innerText = "Clicker"
});

window.addEventListener('scroll', () => {
    console.log('Stop Scrolling !!!');
});