const movies = require('./data/movies.json');
const fetchWithTimeout = require('./services');

export const fetchMovies = () => {

    const resolveFunction = () => movies;
    fetchWithTimeout(1000)
        .then(resolveFunction())

}

const moviePromise = fetchMovies();

moviePromise.then(results => console.log(results));