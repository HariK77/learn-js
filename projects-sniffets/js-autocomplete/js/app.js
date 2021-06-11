const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    let matches = [];

    if (searchText.length !== 0) {

        matches = states.filter(state => {
            const regex = new RegExp(`^${searchText}`, 'gi');
            return state.name.match(regex) || state.abbr.match(regex);
        });

    } else {
        return matchList.innerHTML = '';
    }
    
    showSearchResults(matches);
}

// Show results in html
const showSearchResults = matches => {
    const htmlArray = matches.map(match => `
    <div class="card card-body mb-1">
        <h4>${match.name} (${match.abbr})
            <span class="text-primary">
                ${match.capital}
            </span>
        </h4>
        <small>Last: ${match.lat} / Long: ${match.long}</small>
    </div>
    `);

    if (htmlArray.length !== 0) {
        matchList.innerHTML = htmlArray.join('');
    } else {
        matchList.innerHTML = `<div class="card card-body mb-1">
            <h6>No Results found</h6>
        </div>`;
    }
}

search.addEventListener('input', () => searchStates(search.value));

