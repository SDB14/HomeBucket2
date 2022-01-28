const { gql } = require('apollo-server');

const typeDefs=gql`
type Category{
    id: ID
    categoryid: String
    category_type: String
}

type Query{
getCats: [Category]
}`;

// export the typeDefs
module.exports = typeDefs;