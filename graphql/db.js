import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    console.log("limit : " + limit + ", rating : " + rating);
    let REQ_URL = API_URL;
    if (limit > 0) {
        REQ_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQ_URL += `&minimum_rating=${rating}`;
    }
    console.log(REQ_URL)
    return fetch(REQ_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}
    // fetch(`${API_URL}`)
    //     .then(res => res.json())
    //     .then(json => json.data.movies);
