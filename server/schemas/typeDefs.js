const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
    type Room {
    _id: ID
    roomId: String
    rmDesc: String
    itemCount: Int
    createdAt: String
    savedItems: [Item]
    username: String
  }
  
  type Item {
    _id: ID
    itemId: String
    itemDesc: String
    roomId: String
    image: String
    categoryDesc: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    roomCount: Int
    rooms: [Room]
  }

  type Query {
    users: [User]
    user(username: String!): User
    rooms(username: String): [Room]
    room(_id: ID!): Room
  }`;



// export the typeDefs
module.exports = typeDefs;