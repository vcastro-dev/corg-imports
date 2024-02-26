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
      <div className="flex flex-col items-center p-4 gap-2 h-full">
        <img src={image} alt={title} className="w-64 h-64 object-cover" />
        <h2 className="text-2xl font-bold truncate">{title}</h2>
        <p className="text-lg text-center truncate">{description}</p>
        <Link href={`/products/${id}`} passHref className="w-full">
          <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Ver descrição
          </button>
        </Link>
      </div>
    </Card>
  );
}
