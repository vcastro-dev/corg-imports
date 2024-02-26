import { Category } from "./Category";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
  code: string;
  description?: string;
  notes?: string;
};
