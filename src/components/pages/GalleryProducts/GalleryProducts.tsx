import { CardProduct } from "./CardProduct";
import { Products } from "../../../data/Products";

export function GalleryProducts() {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {Products.map((product) => (
        <CardProduct
          key={product.id}
          image={product.image}
          title={product.description}
          description={product.description}
          id={product.id}
        />
      ))}
    </div>
  );
}
