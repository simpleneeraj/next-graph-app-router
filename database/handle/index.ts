import schema from '@/database/schema';
import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';

// @ts-expect-error
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any, {
  context: async (req: NextRequest) => ({ req }),
});

export default handler;
