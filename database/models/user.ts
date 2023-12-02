import { Schema, model, models } from 'mongoose';

export type IUser = {
  _id: string;
  email: string;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
} & Document;

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', userSchema);

export default User;
