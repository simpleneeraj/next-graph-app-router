import { Resolvers } from '@/database/types/user';
import UserModel, { IUser } from '@/database/models/user';
import { connectToDatabase } from '@/database/mongo';

await connectToDatabase();

const user: Resolvers = {
  Query: {
    user: async (_, { _id }): Promise<IUser | null> => {
      try {
        const user = await UserModel.findById(_id);
        return user || null;
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    },
    users: async (): Promise<IUser[]> => {
      try {
        const users = await UserModel.find({});
        return users;
      } catch (error) {
        console.error('Error fetching all users:', error);
        return [];
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }): Promise<IUser> => {
      try {
        const newUser = await UserModel.create({
          email: input.email,
          username: input.username,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        return newUser;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },
    updateUser: async (_, { _id, input }): Promise<IUser | null> => {
      try {
        const updatedUser = await UserModel.findByIdAndUpdate(
          _id,
          {
            email: input.email,
            username: input.username,
            password: input.password,
            firstName: input.firstName,
            lastName: input.lastName,
            updatedAt: new Date(),
          },
          { new: true }
        );
        return updatedUser || null;
      } catch (error) {
        console.error('Error updating user:', error);
        return null;
      }
    },
    deleteUser: async (_, { _id }): Promise<IUser | null> => {
      try {
        const deletedUser = await UserModel.findByIdAndDelete(_id);
        return deletedUser as any;
      } catch (error) {
        console.error('Error deleting user:', error);
        return null;
      }
    },
  },
};

export default user;
