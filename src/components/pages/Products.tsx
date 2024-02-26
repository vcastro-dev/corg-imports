import { Container } from "../ui/Container/Container";
import { FilterProducts } from "./FilterProducts/FilterProducts";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";

export function Products() {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center">Products</h1>
      <div className="flex flex-row gap-4">
        <FilterProducts />
        <GalleryProducts />
      </div>
    </Container>
  );
}
