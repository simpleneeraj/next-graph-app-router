import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    password: String
    firstName: String
    lastName: String
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    email: String!
    username: String!
    password: String
    firstName: String
    lastName: String
  }

  type Query {
    user(_id: ID!): User
    users: [User]!
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(_id: ID!, input: UserInput!): User
    deleteUser(_id: ID!): User
  }
`;

export default typeDefs;
