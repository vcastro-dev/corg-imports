import { Product } from "../types/Product";

export const Products: Product[] = [
  {
    id: 1,
    name: "Grips",
    price: 100,
    image: "https://barkbusters.net/wp-content/uploads/Grip-375px-250-px.jpg",
    category: "Grips",
    code: "GRIP-1**",
    description: `
    Created using a soft dual compound rubber with a larger diameter for comfort and performance, 
    Barkbusters Grips are designed to provide greater control and reduce hand fatigue in all weather conditions. 
    The universal fit allows for use on street, dirt or dual sport bikes.`,
    notes: `
    TO FIT:
    Universal fit - compatible with all Backbusters products (sold separately)`,
  },
  {
    id: 2,
    name: "JET Handguard - Two Point Mount (Straight 22mm)",
    price: 200,
    image: "https://barkbusters.net/wp-content/uploads/JET-001.Blue_.jpg",
    category: "JET",
    code: "JET-001",
    notes: `
    TO FIT: <br>
    Straight 22mm (7/8") handlebar
    
    AUSTRALIAN MADE – “Aussie Made Aussie Tough”
    Designed for Dual-Sport, Enduro and Trail bikes.
    To fit straight 22mm (7/8″) handlebar.
    Two mounting points secure the full wrap around aluminium design.
    Handguard profile ideal for bikes with long levers.
    Heat treated aluminium backbone for maximum strength.
    Impact resistant JET plastic guards included.
    Large range of colours matched to popular motorcycle brands.
    Easy Installation.
    NOTE: 28.5mm straight section handlebars such as Renthal Twin Wall and Barkbusters VSBar require additional 28.5mm clamp saddle set. Code:  (sold separately)`,
  },
  {
    id: 3,
    name: "JET Handguard - Two Point Mount (Tapered)",
    price: 300,
    image: "https://barkbusters.net/wp-content/uploads/JET-002.Black_.jpg",
    category: "JET",
    code: "JET-002-BK",
    notes: `
    TO FIT:
    Tapered handlebar`,
  },
  {
    id: 4,
    name: "JET Plastic Guards Only",
    price: 400,
    image: "https://barkbusters.net/wp-content/uploads/JET-003-Red.jpg",
    category: "JET",
    code: "JET-003",
    notes: `
    TO FIT:
    Barkbusters backbones (except EGO backbone)`,
  },
];
