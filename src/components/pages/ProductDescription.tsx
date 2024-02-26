import { Product } from "@/src/types/Product";
import { Container } from "../ui/Container/Container";
import { Card } from "../ui/Card/Card";

type Props = {
  product: Product;
};

export function ProductDescription({ product }: Props) {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-32">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p>CODE: {product.code}</p>
      </div>
      <Card>
        <div className="flex gap-4">
          <div className="max-w-96">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold border-b-2 border-gray-200 pb-2">
              Product Description
            </h2>
            <p>{product.notes}</p>
            <p>${product.price}</p>
          </div>
        </div>
      </Card>
    </Container>
  );
}
