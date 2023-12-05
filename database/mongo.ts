import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME as string;
let isConnected = false as boolean;

export const connectToDatabase = async () => {
  // Early return if already connected
  if (isConnected) {
    console.log(
      'Database connection already active, skipping connection attempt.'
    );
    return;
  }

  try {
    const client = new MongoClient(MONGO_URI! as string);
    await client.connect();
    console.log('Connection to MONGO::DB established successfully.');
    isConnected = true;
    await mongoose.connect(MONGO_URI! as string);
    const database = client.db(MONGO_DB_NAME);
    return database;
  } catch (error) {
    console.error('There was a problem connecting to the database.', error);
    throw error; // Re-throw the error for proper handling
  }
};
