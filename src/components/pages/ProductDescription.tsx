import { Product } from "@/src/types/Product";

type Props = {
  product: Product;
};

export function ProductDescription({ product }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-lg font-semibold">${product.price}</p>
        <p className="text-lg font-semibold">{product.description}</p>
      </div>
    </div>
  );
}
