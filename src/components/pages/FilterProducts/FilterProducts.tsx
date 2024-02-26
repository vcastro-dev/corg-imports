import { Category } from "@/src/types/Category";
import { Card } from "../../ui/Card/Card";

type Props = {
  onCategoryChange: (category: Category[]) => void;
};

const categories = [
  "Grips",
  "JET",
  "EGO",
  "VPS",
  "Storm",
  "CARBON",
  "BBZ",
  "Aero GP",
  "BLG",
];

const kits = [
  "Bike Specific Hardware Kits",
  "Universal Hardware Kits",
  "OEM Handguard Protectors",
  "Handlebar Clamp Kits",
  "Accessories & Spare Parts",
  "Replacement Parts",
  "MOTOCROSS",
  "MINIBIKES",
  "ATV",
];

export function FilterProducts({ onCategoryChange }: Props) {
  const selectedCategories: string[] = [];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      selectedCategories.push(e.target.value);
    } else {
      selectedCategories.splice(selectedCategories.indexOf(e.target.value), 1);
    }

    onCategoryChange(selectedCategories as Category[]);
  };

  return (
    <Card>
      <div className="flex flex-col gap-4 p-4 w-72">
        <div className="flex flex-col">
          <div className="flex flex-col bg-baby-blue-eyes">
            <p className="p-2 font-semibold">Categorias</p>
          </div>

          <ul className="flex flex-col">
            {categories.map((category) => (
              <li key={category} className="flex p-2 gap-2">
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={(e) => handleCategoryChange(e)}
                />
                <label className="text-sm">{category}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col bg-baby-blue-eyes">
            <p className="p-2 font-semibold">Kits & Peças</p>
          </div>

          <ul className="flex flex-col">
            {kits.map((category) => (
              <li key={category} className="flex p-2 gap-2">
                <input type="checkbox" value={category} />
                <label className="text-sm">{category}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
