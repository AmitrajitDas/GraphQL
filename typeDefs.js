const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    quote: String!
    age: Int!
    isCool: Boolean!
    price: Float!
    assets: [String!]!
  }
`

module.exports = { typeDefs }
