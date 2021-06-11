axios.get('https://swapi.dev/api/planets/')
.then(({data}) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }

    return axios.get(data.next)
})
.then(({data}) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }
})
.catch((err) => {
    console.log(err);
})