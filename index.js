const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url})=> {
    console.log(`You API is running on ${url}`);
});