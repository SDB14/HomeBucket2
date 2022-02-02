const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 
    type Room {
    _id: ID
    roomId: String
    rmDesc: String
    itemCount: Int
    createdAt: String
    items: [Item]
    username: String
  }
  
  type Item {
    _id: ID
    itemDesc: String
    image: String
    categoryDesc: String
    createdAt: String
    price: Float
    qty: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    roomCount: Int
    rooms: [Room]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRoom(username: String!, roomDesc: String!): Room
    addItem(rooms: ID!): Item
    
  }`;
 // addRoom(roomDesc: String!, username: String, items: [Item]): Room
   
 // addItem(roomId: ID!): Item
// export the typeDefs
module.exports = typeDefs;