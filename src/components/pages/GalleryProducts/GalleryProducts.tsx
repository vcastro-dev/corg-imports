import { CardProduct } from "./CardProduct";
import { Product } from "@/src/types/Product";

type Props = {
  products: Product[];
};

export function GalleryProducts({ products }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 ">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          image={product.image}
          title={product.name}
          id={product.id}
        />
      ))}
    </div>
  );
}
