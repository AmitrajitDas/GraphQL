const { products } = require('../data/products')

const resolvers = {
  Query: {
    quote: () => 'FFFFFF',
    age: () => 21,
    isCool: () => true,
    price: () => 69.25,
    assets: () => ['asset1', 'asset2'],
    products: () => products,
  },
}

module.exports = { resolvers }
