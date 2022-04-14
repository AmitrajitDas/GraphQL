const resolvers = {
  Query: {
    quote: () => 'FFFFFF',
    age: () => 21,
    isCool: () => true,
    price: () => 69.25,
  },
}

module.exports = { resolvers }
