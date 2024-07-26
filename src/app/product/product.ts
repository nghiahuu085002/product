import { ObjectId } from 'bson';
export interface Product {
  id: string
  name: string;
  description: string;
  original_price: number;
  current_price: number;
  price_unit: string;
  rating: number;
  rating_count: number;
  quantity: number;
  colors: [];
  size: [];
  size_unit: string;
  isInstock: boolean;
  isBesseller: boolean;
}
