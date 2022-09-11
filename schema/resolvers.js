const { UserList, MovieList } = require("../Fake-data");
const _ = require("lodash");

const resolvers = {
    Query: {
        // User resolvers
        users: () => {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) });
            
            return user;
        },
        // Movie  resolvers
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
        console.log('args :', args);
            const name = args.name
            const movie = _.find(MovieList, { name });
            
            return movie;
        },
    }

}

module.exports = { resolvers };