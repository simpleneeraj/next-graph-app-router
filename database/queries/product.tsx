import gql from 'graphql-tag';

export const queryProducts = gql`
  query GetAllProducts {
    getAllProducts {
      name
      price
      sku
      slug
    }
  }
`;
