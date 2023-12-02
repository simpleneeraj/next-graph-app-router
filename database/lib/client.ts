// Import necessary modules and components from Apollo and Next.js
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

// Function to create and configure the Apollo Client
function ApolloClient() {
  // Create an HTTP link with the GraphQL API endpoint
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
  });

  // Check if the code is running on the server or in the browser
  const isServer = typeof window === 'undefined';

  // Create an array of Apollo Links for the client
  const linkArray = [
    new SSRMultipartLink({
      stripDefer: true,
    }),
    httpLink,
  ];

  // Create an Apollo Link chain based on the environment
  const link = isServer ? ApolloLink.from(linkArray) : httpLink;

  // Create and return the Apollo Client
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link,
  });
}

export default ApolloClient;
