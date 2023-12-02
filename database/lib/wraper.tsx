'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import ApolloClient from './client';

// Wrapper component to provide the Apollo Client to the Next.js app
// Use ApolloNextAppProvider to provide the Apollo Client to the app
function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={ApolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
export default ApolloWrapper;
