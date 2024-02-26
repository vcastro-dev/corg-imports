import { Category } from "./Category";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
};
