"use client";

import { Product } from "@/src/types/Product";
import { Container } from "../ui/Container/Container";
import { FilterProducts } from "./FilterProducts/FilterProducts";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Products } from "@/src/data/Products";
import { useState } from "react";
import { Category } from "@/src/types/Category";

const filterProducts = (products: Product[], category: string): Product[] => {
  return products.filter((product: Product) => product.category === category);
};

export function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const onFilter = (category: Category[]) => {
    if (category.length === 0) {
      setFilteredProducts(Products);
      return;
    }

    const filtered = category.reduce(
      (acc: Product[], curr: Category) => [
        ...acc,
        ...filterProducts(Products, curr),
      ],
      []
    );

    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <h1 className="text-4xl font-bold text-center">Products</h1>
      <div className="flex flex-row gap-4">
        <FilterProducts onCategoryChange={onFilter} />
        <GalleryProducts products={filteredProducts} />
      </div>
    </Container>
  );
}
