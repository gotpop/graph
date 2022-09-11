# GQL

query ExampleQuery {
  users {
    name
    id
    username
    friends {
      age
      name
    }
  }
}


query GetUser($userId: ID!) {
  user(id: $userId) {
    name
  }
}

query GetAllMovies {
  movies {
    name
  }
}


query GetMovie($name: String!) {
  movie(name: $name) {
    name
  }
}