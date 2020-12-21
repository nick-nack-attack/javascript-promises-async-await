import {
    fetchBooks,
    fetchMovies
} from "./services";

function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies ]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(err => console.log("Error waiting for the promise race", err))
}

const getBooksAndMoviesPromise = getBooksAndMovies();
const getBooksOrMoviesPromise = getBooksOrMovies();

getBooksAndMoviesPromise
    .then(results => console.log(
        'getBooksAndMoviesPromise',
        results
    ))

getBooksOrMoviesPromise
    .then(results => console.log(
        'getBooksOrMoviesPromise',
        results
    ))

/*

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then(results => {
    console.log(results);
});

*/