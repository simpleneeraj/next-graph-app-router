import gql from 'graphql-tag';

const product = gql`
  type ProductVariant {
    metal: [MetalVariant!]!
    color: [ColorVariant!]!
    size: [SizeVariant!]!
    discount: Discount
  }

  type MetalVariant {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  type ColorVariant {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  type SizeVariant {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  type Discount {
    percentage: Float!
    start_date: String!
    end_date: String!
  }

  type Review {
    user: String!
    rating: Float!
    comment: String!
  }

  type Product {
    name: String!
    sku: String!
    slug: String
    properties: ProductProperties!
    variants: [ProductVariant!]!
    price: Float!
    length: Int!
    chain: String!
    clasp: String!
    description: String!
    manufacturer: String!
    images: [String!]!
    type: String!
    style: String!
    gemstone: String!
    certification: String!
    packaging: String!
    availability: Boolean!
    rating: Float!
    reviews: [Review!]!
  }

  type ProductProperties {
    metal: String!
    purity: String!
    tarnishResistance: String!
    hypoallergenic: Boolean!
    weight: Float!
  }

  type Query {
    getProduct(slug: String!): Product
    getAllProducts: [Product!]!
  }

  input CreateProductInput {
    name: String!
    sku: String!
    slug: String!
    properties: ProductPropertiesInput!
    variants: [ProductVariantInput!]!
    price: Float!
    length: Int!
    chain: String!
    clasp: String!
    description: String!
    manufacturer: String!
    images: [String!]!
    type: String!
    style: String!
    gemstone: String!
    certification: String!
    packaging: String!
    availability: Boolean!
    rating: Float!
    reviews: [ReviewInput!]!
  }

  input ProductPropertiesInput {
    metal: String!
    purity: String!
    tarnishResistance: String!
    hypoallergenic: Boolean!
    weight: Float!
  }

  input ProductVariantInput {
    metal: [MetalVariantInput!]!
    color: [ColorVariantInput!]!
    size: [SizeVariantInput!]!
    discount: DiscountInput
  }

  input MetalVariantInput {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  input ColorVariantInput {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  input SizeVariantInput {
    value: String!
    price: Float!
    image: [String!]!
    stock: Int!
  }

  input DiscountInput {
    percentage: Float!
    start_date: String!
    end_date: String!
  }

  input ReviewInput {
    user: String!
    rating: Float!
    comment: String!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(slug: String!, input: UpdateProductInput!): Product
    deleteProduct(slug: String!): Product
  }

  input UpdateProductInput {
    name: String
    properties: ProductPropertiesInput
    variants: [ProductVariantInput]
    price: Float
    length: Int
    chain: String
    clasp: String
    description: String
    manufacturer: String
    images: [String]
    type: String
    style: String
    gemstone: String
    certification: String
    packaging: String
    availability: Boolean
    rating: Float
    reviews: [ReviewInput]
  }
`;

export default product;
