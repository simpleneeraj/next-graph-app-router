import { IUser } from '@/database/models/user';

interface ResolverContext {}

interface ResolverArgs {
  _id: string;
  input: {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}

interface QueryResolvers {
  user: (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => Promise<IUser | null>;
  users: (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => Promise<IUser[]>;
}

interface MutationResolvers {
  createUser: (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => Promise<IUser>;
  updateUser: (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => Promise<IUser | null>;
  deleteUser: (
    parent: any,
    args: ResolverArgs,
    context: ResolverContext
  ) => Promise<IUser | null>;
}

export interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}
