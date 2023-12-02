// 'use client';

export const dynamic = 'force-dynamic';

import ApolloClient from '@/database/lib/client';
import { queryProducts } from '@/database/queries/product';
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default async function Home() {
  // const { data } = useSuspenseQuery(queryProducts);
  const { data, loading } = await ApolloClient().query({
    query: queryProducts,
  });
  return (
    <div>
      <h1>Hello Simple</h1>
      {loading ? 'Loading...' : JSON.stringify(data, null, 4)}
    </div>
  );
}
