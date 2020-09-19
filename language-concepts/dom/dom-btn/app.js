const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    // console.log("You Hovered Me !!");
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.top = `${height}px`;
    btn.style.left = `${width}px`;
});


btn.addEventListener('click', function () {
    btn.innerText = 'You Got Me !!';
    document.body.style.backgroundColor = 'green';
});