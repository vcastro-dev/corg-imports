import Link from "next/link";
import { Card } from "../../ui/Card/Card";

type Props = {
  image: string;
  title: string;
  description: string;
  id: number;
};

export function CardProduct({ image, title, description, id }: Props) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-64 h-64 object-cover " />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg text-center">{description}</p>
        <Link href={`/products/${id}`} passHref>
          <button className="bg-blue-500 text-white rounded-lg p-2 mt-2">
            Ver descrição
          </button>
        </Link>
      </div>
    </Card>
  );
}
