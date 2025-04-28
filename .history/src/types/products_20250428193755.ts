export interface IProduct {
    _id: string;
    name: string;
    category: string;
    price: number;
    discountPercentage?: number;
    images: string[];
  }
  