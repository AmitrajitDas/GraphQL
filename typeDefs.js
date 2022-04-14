const { gql } = require('apollo-server')

const typeDefs = gql`
  type Product {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
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
