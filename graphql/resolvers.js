import { getMovies } from "./db"
 
// movie.js 용
const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating)
    }
}

export default resolvers;