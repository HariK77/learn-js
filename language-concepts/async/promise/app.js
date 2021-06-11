// const willGetYouDog = new Promise((resolve, reject) => {
//     const rand = Math.random();

//     rand < 0.5 ? resolve() : reject();
// });

// willGetYouDog.then(() => {
//     console.log('YAY !! We got a dog');
// });

// willGetYouDog.catch(() => {
//     console.log(':( No Dog');
// })


// const willGetYouDog = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const rand = Math.random();
//         rand < 0.5 ? resolve() : reject();
//     },5000)
// });

// willGetYouDog.then(() => {
//     console.log('YAY !! We got a dog');
// });

// willGetYouDog.catch(() => {
//     console.log(':( No Dog');
// });


// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const rand = Math.random();
//             rand < 0.5 ? resolve() : reject();
//         },5000)
//     });
// }

// makeDogPromise().then(() => {
//     console.log('YAY !! We got a dog');
// }).catch(() => {
//     console.log(':( No Dog');
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const pages = {
//                 '/users' : [
//                     {id: 1, name: 'Hari'},
//                     {id: 2, name: 'Krishna'}
//                 ],
//                 '/about' : 'This is about page'
//             }
//             const data = pages[url];

//             if (data) {
//                 resolve({status: 200, data: data})
//             } else {
//                 reject({status: 404});
//             } 
//         },1000)
//     });
// }

// fakeRequest('/users').then((res) => {
//     console.log(res.status);
//     console.log(res.data);
// }).catch((res) => {
//     console.log(res.status);
//     console.log('Request Failed');
// })

// fakeRequest('/dogs').then((res) => {
//     console.log(res.status);
//     console.log(res.data);
// }).catch((res) => {
//     console.log(res.status);
//     console.log('Request Failed');
// })


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const pages = {
                '/users': [
                    { id: 1, name: 'Hari' },
                    { id: 5, name: 'Krishna' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'HariK',
                    upvotes: 360,
                    city: 'Anantapur',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'KrisH',
                    upvotes: 777,
                    city: 'Anantapur',
                    topPostId: 454545
                },
                '/posts/454321': {
                    id: 454321,
                    title: 'Hi There & Here'
                },
                '/about': 'This is about page'
            }
            const data = pages[url];

            if (data) {
                resolve({ status: 200, data: data })
            } else {
                reject({ status: 404 });
            }
        }, 1000)
    });
}

// fakeRequest('/user').then((res) => {
//     const id = res.data[0].id;
//     fakeRequest('/users/' + id).then((res) => {
//         const postId = res.data.topPostId;
//         fakeRequest(`/posts/${postId}`).then((res) => {
//             console.log(res);
//         })
//     })
// }).catch((err) => {
//     console.log('Ohh Noo !', err);
// })


fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest('/users/' + id)
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`)
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('Ohh Noo !', err);
    })
