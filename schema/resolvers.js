const { UserList } = require("../Fake-data");

const resolvers = {
    Query: {
        users() {
            return UserList
        }
    }

}

module.exports = { resolvers };