import {
  HttpLink,
  InMemoryCache,
  ApolloClient as Client,
} from '@apollo/client';

function ApolloClient() {
  // Create an HTTP link with the GraphQL API endpoint
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
  });

  // Create and return the Apollo Client
  return new Client({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export default ApolloClient;
