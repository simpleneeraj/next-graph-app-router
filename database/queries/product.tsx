import gql from 'graphql-tag';

export const queryProducts = gql`
  query GetAllProducts {
    getAllProducts {
      name
      sku
      slug
      price
      properties {
        metal
        purity
        tarnishResistance
        hypoallergenic
        weight
      }
      variants {
        metal {
          value
          price
          image
          stock
        }
        color {
          value
          price
          image
          stock
        }
        size {
          value
          price
          image
          stock
        }
        discount {
          percentage
          start_date
          end_date
        }
      }
    }
  }
`;
