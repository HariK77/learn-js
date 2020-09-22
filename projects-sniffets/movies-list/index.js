// console.log('Hi there!');
// Here is your key: c59a0c3b

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c59a0c3b

const leftAutoCompleteRoot = document.querySelector('#left-auto-complete');
const rightAutoCompleteRoot = document.querySelector('#right-auto-complete');

const leftSummaryElement = document.querySelector('#left-summary');
const rightSummaryElement = document.querySelector('#right-summary');

const clearBtn = document.getElementById('clear');

const autoCompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `<img src="${imgSrc}">
            ${movie.Title} (${movie.Year})
        `;
    },
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'c59a0c3b',
                s: searchTerm
                // i: 'tt0848228'
            }
        });
    
        if (response.data.Error) {
            return [];
        }
    
        return response.data.Search;
    }
}

createAutoComplete({
    root: leftAutoCompleteRoot,
    ...autoCompleteConfig,
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, leftSummaryElement, 'left');
    },
});

createAutoComplete({
    root: rightAutoCompleteRoot,
    ...autoCompleteConfig,
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, rightSummaryElement, 'right');
    },
});

let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'c59a0c3b',
            // s: searchTerm
            i: movie.imdbID
        }
    });

    summaryElement.innerHTML = movieTemplate(response.data);

    side === 'left' ? leftMovie = response.data : rightMovie = response.data;

    if (leftMovie && rightMovie) {
        runComparison();
        clearBtn.disabled = false;
    } else {
        clearBtn.disabled = true;
    }
}

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];

        let leftSideValue;
        let rightSideValue;
        if (index === 3) {
            leftSideValue = parseFloat(leftStat.dataset.value);
            rightSideValue = parseFloat(rightStat.dataset.value);
        } else {
            leftSideValue = parseInt(leftStat.dataset.value);
            rightSideValue = parseInt(rightStat.dataset.value);
        }

        if (rightSideValue > leftSideValue) {
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-warning');
        } else {
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-warning');
        }
    })
}


const movieTemplate = movieDetail => {

    const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metascore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));

    // let count = 0;
    // const awards = movieDetail.Awards.split(' ').forEach(value => {
    //     if (isNaN(value)) {
    //         return;
    //     } else {
    //         count += value;
    //     }
    // })

    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);
        if (isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);

    return `
    <article class="media">
        <figure class="media-left">
            <p class="image">
                <img src="${movieDetail.Poster}" alt="">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <h1>${movieDetail.Title}</h1>
                <h4>${movieDetail.Genre}</h4>
                <p>${movieDetail.Plot}</p>
            </div>
        </div>
    </article>
    <article data-value=${awards} class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article data-value=${dollars} class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metascore} class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
    `;
}

// Clear

clearBtn.addEventListener('click', function() {

    leftAutoCompleteRoot.querySelector('input').value = '';
    rightAutoCompleteRoot.querySelector('input').value = '';
    leftSummaryElement.innerHTML = '';
    rightSummaryElement.innerHTML = '';

    leftMovie = '';
    rightMovie = '';

    this.disabled = true;

});