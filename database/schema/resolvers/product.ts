import { connectToDatabase } from '@/database/mongo';
import { ProductInput, Product, Resolvers } from '@/database/types/products';

const db = await connectToDatabase();
const collection = db?.collection<Product>('products') || null;

const resolvers: Resolvers = {
  Query: {
    getProduct: async (_parent, { slug }) => {
      try {
        const product = await collection?.findOne({ slug });
        return product || null;
      } catch (error) {
        console.error('Error fetching product:', error);
        return null;
      }
    },
    getAllProducts: async () => {
      try {
        const products = await collection?.find().toArray();
        return products || null;
      } catch (error) {
        console.error('Error fetching all products:', error);
        return null;
      }
    },
  },
  Mutation: {
    createProduct: async (_parent, { input }: { input: ProductInput }) => {
      try {
        const result = await collection?.insertOne(input);
        const insertedProductId = result?.insertedId;
        const insertedProduct = await collection?.findOne({
          _id: insertedProductId,
        });
        return insertedProduct || null;
      } catch (error) {
        console.error('Error creating product:', error);
        return null;
      }
    },
  },
};

export default resolvers;
