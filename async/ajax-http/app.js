// function reqListener () {
//     console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener('load', function() {
//     const data = JSON.parse(this.responseText);
//     // for (let planet of data.results) {
//     //     console.log(planet.name);
//     // }
//     console.log('first request');
//     const filmURL = data.results[0].films[0];

//     const filmReq = new XMLHttpRequest();

//     filmReq.addEventListener('load', function () {
//         console.log(JSON.parse(this.responseText));
//     });

//     filmReq.addEventListener('error', function (e) {
//         console.log('Unable to fetch Film.', e);
//     });

//     filmReq.open('GET', filmURL);

//     filmReq.send();
// });

// firstReq.addEventListener('error', function(e) {
//     console.log('It Failed', e);
// });

// firstReq.open('GET', 'https://swapi.dev/api/planets/');

// firstReq.send();

// console.log('Request Sent');


// const data = fetch('https://swapi.dev/api/planets/').then((response) => {
//     if (!response.ok) {
//         // console.log('Erros status in not 200', response.status);
//         throw new Error(`Status Code Error : ${response.status}`)
//     } else {
//         response.json().then((data) => {
//             // console.log(data);
//             for (let planet of data.results) {
//                 console.log(planet.name);
//             }
//         })
//     }
// }).catch((err) => {
//     console.log('Someting went wrong !!');
//     console.log(err);
// })


// const data = fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
//     return response.json()
// })
// .then((data) => {
//     console.log('Fetched first 10 planets');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return fetch(data.next);
// })
// .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
//     return response.json()
// })
// .then((data) => {
//     console.log('Fetched next 10 planets');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
// })
// .catch((err) => {
//     console.log('Someting went wrong !!');
//     console.log(err);
// })

// const checkAndParse = (response) => {
//     if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
//     return response.json()
// }

// const printPlanets = (data) => {
//     console.log('Fetched 10 more planets..');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next)
// }

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => fetch(url);

// fetchNextPlanets()
//     .then(checkAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log('Someting went wrong !!');
//         console.log(err);
//     })

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url)
}

const printPlanets = (({data}) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }

    return Promise.resolve(data.next)
})

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(err);
})