import type { Collection, ObjectId } from 'mongodb';

export type Variant = {
  value: string;
  price: number;
  image: string[];
  stock: number;
};

export type Discount = {
  percentage: number;
  start_date: string;
  end_date: string;
};

export type Review = {
  user: string;
  rating: number;
  comment: string;
};

export type ProductProperties = {
  metal: string;
  purity: string;
  tarnishResistance: string;
  hypoallergenic: boolean;
  weight: number;
};

export type ProductVariant = {
  metal: Variant[];
  color: Variant[];
  size: Variant[];
  discount: Discount;
};

export type MetalVariantInput = {
  value: string;
  price: number;
  image: string[];
  stock: number;
};

export type ColorVariantInput = {
  value: string;
  price: number;
  image: string[];
  stock: number;
};

export type SizeVariantInput = {
  value: string;
  price: number;
  image: string[];
  stock: number;
};

export type DiscountInput = {
  percentage: number;
  start_date: string;
  end_date: string;
};

export type ReviewInput = {
  user: string;
  rating: number;
  comment: string;
};

export type ProductPropertiesInput = {
  metal: string;
  purity: string;
  tarnishResistance: string;
  hypoallergenic: boolean;
  weight: number;
};

export type ProductVariantInput = {
  metal: MetalVariantInput[];
  color: ColorVariantInput[];
  size: SizeVariantInput[];
  discount: DiscountInput;
};

export type ProductInput = {
  name: string;
  sku: string;
  properties: ProductPropertiesInput;
  variants: ProductVariantInput[];
  price: number;
  length: number;
  chain: string;
  clasp: string;
  description: string;
  manufacturer: string;
  images: string[];
  type: string;
  style: string;
  gemstone: string;
  certification: string;
  packaging: string;
  availability: boolean;
  rating: number;
  reviews: ReviewInput[];
};

export type Product = {
  name: string;
  sku: string;
  properties: ProductProperties;
  variants: ProductVariant[];
  price: number;
  length: number;
  chain: string;
  clasp: string;
  description: string;
  manufacturer: string;
  images: string[];
  type: string;
  style: string;
  gemstone: string;
  certification: string;
  packaging: string;
  availability: boolean;
  rating: number;
  reviews: Review[];
};

// resolvers/types.ts

export type ResolverContext = {
  // Define your context here if needed
};

export type Resolvers = {
  Query: {
    getProduct: (
      parent: any,
      args: { slug: string },
      context: ResolverContext
    ) => Promise<Product | null>;
    getAllProducts: (
      parent: any,
      args: {},
      context: ResolverContext
    ) => Promise<Product[] | null>;
  };
  Mutation: {
    createProduct: (
      parent: any,
      args: { input: ProductInput },
      context: ResolverContext
    ) => Promise<Product | null>;
    // updateProduct: (
    //   parent: any,
    //   args: { slug: string; input: ProductInput },
    //   context: ResolverContext
    // ) => Promise<Product | null>;
    // deleteProduct: (
    //   parent: any,
    //   args: { slug: string },
    //   context: ResolverContext
    // ) => Promise<Product | null>;
  };
};
