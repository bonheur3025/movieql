export let movies = [
    {
    id: 0,
    title: "Star Wars - The new one",
    score: 1
}, {
    id: 1,
    title: "Avengers - The new one",
    score: 8
}, {
    id: 2,
    title: "The Gotfater",
    score: 99
}, {
    id: 3,
    title: "Logan",
    score: 3
}];


export const getMovies = () => movies;

export const getById = id => {
    const filterdMovies = movies.filter(movie => movie.id === id);
    return filterdMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (title, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        title,
        score
    };
    movies.push(newMovie);
    return newMovie;
}