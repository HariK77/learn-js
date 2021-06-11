function getData() {
    const data = axios.get('https://swapi.dev/api/planets/');
    console.log(data);
}

// getData();

function greet() {
    console.log("Hello World");
}

async function greetAsync() {
    return 'Helo World !!!';
}

greetAsync()
.then((val) => {
    console.log("promise recolved !!!", val);
})

// async function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw 'X and Y must be numbers!!';
//     }
//     return x * y;
// }

function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject('X and Y must be numbers!!');
        }
        resolve(x * y);  
    })
}

add('e', 'r')
.then((val) => {
    console.log("promise recolved !!!", val);
})
.catch((err) => {
    console.log("promise rejected !!!", err);
})


function getPlanets() {
    return axios.get('https://swapi.dev/api/planets/');
}

getPlanets().then((res) => {

    console.log(res.data);
});

async function getAwait() {
    console.log('await example');
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
}

getAwait()
.catch((err) => {
    console.log('error catched', err);
})

async function getAwaitTryCatch() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data);
    } catch(err) {
        console.log('error catched', err);
    }
}

getAwaitTryCatch();

// Previous example writing with async and await

const moveX = (element, amount, delay) => {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const bodyBoundary = document.body.clientWidth;
            const currRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (currRight + amount > bodyBoundary) {
                reject({bodyBoundary, currRight, amount});
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }

        }, delay);
    });

}

// moveX(btn, 200, 1000)
//     .then(() => moveX(btn, 200, 1000))
//     .then(() => moveX(btn, 200, 1000))
//     .then(() => moveX(btn, 200, 1000))
//     .then(() => moveX(btn, 200, 1000))
//     .catch(({bodyBoundary, amount, currRight}) => {
//         console.log(`Body is ${bodyBoundary}px wide.`);
//         console.log(`Element is at ${currRight}px, ${amount}px is too large`);
//     });

const btn = document.querySelector('button');

async function animateRight(el) {
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
}

animateRight(btn).catch((err) => {
    console.log('All Done');
})