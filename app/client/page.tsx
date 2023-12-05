'use client';

export const dynamic = 'force-dynamic';

import { queryProducts } from '@/database/queries/product';
import { useSuspenseQuery } from '@apollo/client';
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function Home() {
  const { data } = useSuspenseQuery(queryProducts);
  return (
    <div>
      <h1>Hello Simple</h1>
      {!data ? 'Loading...' : JSON.stringify(data, null, 4)}
    </div>
  );
}
