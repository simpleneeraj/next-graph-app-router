import gql from 'graphql-tag';

const product = gql`
  type Product {
    name: String!
    sku: String!
    slug: String!
    price: Float!
  }

  input CreateProductInput {
    name: String!
    sku: String!
    slug: String!
    price: Float!
  }

  type Query {
    getProduct(slug: String!): Product
    getAllProducts: [Product!]!
  }
  type Mutation {
    createProduct(input: CreateProductInput!): Product
  }
`;

export default product;
