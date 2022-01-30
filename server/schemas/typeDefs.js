//NEEDS TO BE UPDATED and Tested

const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Room {
        _id: ID
        roomName: [String]
        description: String
        roomId: String
        itemId: String
        itemImage: String
        itemPrice: String
        itemDesc: String
    }
    type User {
        _id: ID
        username: String
        email: String
       roomCount: Int
        savedRooms: [Room]        
    }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    input SavedRoomInput {
        roomName: [String]
        description: String
        roomId: String
        itemId: String
        itemImage: String
        itemPrice: String
        itemQty: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveRoom(room: SavedRoomInput): User
         removeRoom(roomId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;