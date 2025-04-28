export interface IProduct {
    _id: string;
    title: string;
    category: string;
    price: number;
    discountPercentage?: number;
    images: string[];
  }
  