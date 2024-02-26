import { ProductDescription } from "@/src/components/pages/ProductDescription";
import { Products } from "@/src/data/Products";

type Params = {
  productId: string;
};

export default function Page({ params }: { params: Params }) {
  const { productId } = params;
  const product = Products[Number(productId) - 1];

  return (
    <ProductDescription
      product={{
        ...product,
        id: Number(productId),
      }}
    />
  );
}
