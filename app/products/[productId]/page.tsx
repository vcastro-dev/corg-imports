import { ProductDescription } from "@/src/components/pages/ProductDescription";
import { Products } from "@/src/data/Products";

type Params = {
  productId: string;
};

export default function Page({ params }: { params: Params }) {
  const { productId } = params;
  const product = Products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDescription product={product} />;
}
