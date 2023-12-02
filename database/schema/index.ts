import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDefs from '@/database/schema/typeDefs/user';
import userResolver from '@/database/schema/resolvers/user';
import productTypeDefs from '@/database/schema/typeDefs/product';
import productResolver from '@/database/schema/resolvers/product';

const schema = {
  typeDefs: mergeTypeDefs([userTypeDefs, productTypeDefs]),
  resolvers: mergeResolvers([userResolver, productResolver]),
};

export default schema;
