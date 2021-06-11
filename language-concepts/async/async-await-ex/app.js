// async function get3Pokes() {
//     // Sequential
//     // const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     // const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     // const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');

//     // Parallel
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

//     console.log(prom1);
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom2;

//     console.log(prom1);
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

async function get3Pokes() {

    // Parallel
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const results = await Promise.all([prom1, prom2, prom3])

    printPokemons(results);

}

get3Pokes().catch((err) => {
    console.log("One error failed !!!", err);
});

function printPokemons(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

// function changeBodyColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// // changeBodyColor('teal', 2000);

// async function lightShow() {
//     await changeBodyColor('teal', 1000);
//     await changeBodyColor('blue', 1000);
//     await changeBodyColor('violet', 1000);
//     await changeBodyColor('pink', 1000);
// }

// async function lightShow() {
//     const light1 = changeBodyColor('teal', 1000);
//     const light2 = changeBodyColor('blue', 1000);
//     const light3 = changeBodyColor('violet', 1000);
//     const light4 = changeBodyColor('pink', 1000);

//     await light1;
//     await light2;
//     await light3;
//     await light4;
// }

// lightShow();