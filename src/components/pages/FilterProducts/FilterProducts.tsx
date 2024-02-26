import { Card } from "../../ui/Card/Card";

export function FilterProducts() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Filtros de produto</h2>
        <h3 className="text-xl font-bold">Categorias</h3>

        <div className="flex flex-col">
          <div className="flex flex-col bg-baby-blue-eyes">
            <p className="p-2">Filtro 1</p>
          </div>

          <ul className="flex flex-col">
            <li className="p-2">Category 1</li>
            <li className="p-2">Category 2</li>
            <li className="p-2">Category 3</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col bg-baby-blue-eyes">
            <p className="p-2">Filtro 2</p>
          </div>

          <ul className="flex flex-col">
            <li className="p-2">Price 1</li>
            <li className="p-2">Price 2</li>
            <li className="p-2">Price 3</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
