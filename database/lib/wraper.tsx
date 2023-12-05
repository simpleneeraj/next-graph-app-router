'use client';

import { ApolloProvider } from '@apollo/client';
// import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import IApolloClient from './client';

// Wrapper component to provide the Apollo Client to the Next.js app
// Use ApolloNextAppProvider to provide the Apollo Client to the app
function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={IApolloClient()}>{children}</ApolloProvider>;
}
export default ApolloWrapper;
