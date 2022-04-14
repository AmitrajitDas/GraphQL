const resolvers = {
  Query: {
    quote: () => 'FFFFFF',
    age: () => 21,
    isCool: () => true,
    price: () => 69.25,
    assets: () => ['asset1', 'asset2'],
    products: () => [
      {
        name: 'prod1',
        description: 'desc1',
        price: 28.63,
        quantity: 12,
        onSale: false,
      },
    ],
  },
}

module.exports = { resolvers }
