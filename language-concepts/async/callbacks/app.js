const btn = document.querySelector('button');

// setTimeout(function () {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(function () {
//         btn.style.transform = 'translateX(200px)';
//         setTimeout(function () {
//             btn.style.transform = 'translateX(300px)';   
//         }, 1000)
//     }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, callback) => {

//     const bodyBoundary = document.body.clientWidth;
//     const currRight = element.getBoundingClientRect().right;

//     if (currRight + amount > bodyBoundary) {
//         console.log('Can\'t Move Further');
//     } else {

//         const currLeft = element.getBoundingClientRect().left;

//         setTimeout(function () {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             if (callback) callback();
//         }, delay);
//     }

// }

// moveX(btn, 200, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 200, 1000, () => {
//             moveX(btn, 200, 1000, () => {
//                 moveX(btn, 200, 1000);
//             });
//         });
//     });
// });


// const moveX = (element, amount, delay, onSuccess, onFailure) => {

//     setTimeout(function () {
//         const bodyBoundary = document.body.clientWidth;
//         const currRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
//         if (currRight + amount > bodyBoundary) {
//             onFailure();
//         } else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }

//     }, delay);
// }


// moveX(btn, 200, 1000, () => {
//     moveX(btn, 500, 1000, () => {
//         moveX(btn, 500, 1000, () => {
//             console.log("Relly we still have space left");
//         }, () => {
//             console.log('Can\'t Move Further');
//         })
//     }, () => {
//         console.log('Can\'t Move Further');
//     })
// }, () => {
//     console.log('Can\'t Move Further');
// })

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

// moveX(btn, 100, 1000)
//     .then(() => {
//         return moveX(btn, 400, 1000)
//     })
//     .then(() => {
//         return moveX(btn, 900, 1000)
//     })
//     .catch(() => {
//         console.log('Can\'t Move Furhter');
//     })

moveX(btn, 200, 1000)
    .then(() => moveX(btn, 200, 1000))
    .then(() => moveX(btn, 200, 1000))
    .then(() => moveX(btn, 200, 1000))
    .then(() => moveX(btn, 200, 1000))
    .catch(({bodyBoundary, amount, currRight}) => {
        console.log(`Body is ${bodyBoundary}px wide.`);
        console.log(`Element is at ${currRight}px, ${amount}px is too large`);
    });

