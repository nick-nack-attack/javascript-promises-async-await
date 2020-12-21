export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function fetchMovies() {
    return fetch("./data/movies.json")
        .then(res => res.json())
        .then(movies => movies)
        .catch(err => console.log(err))
}

export function fetchBooks() {
    return fetch("./data/books.json")
        .then(res => res.json())
        .then(books => books)
        .catch(err => console.log(err))
}