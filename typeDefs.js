const { gql } = require('apollo-server')

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
    onSale: Boolean!
  }

  type Query {
    quote: String!
    age: Int!
    isCool: Boolean!
    price: Float!
    assets: [String!]!
    products: [Product!]!
  }
`

module.exports = { typeDefs }
