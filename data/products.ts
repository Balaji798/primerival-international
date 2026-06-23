export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  slug: string;
  images: string[];
  businessType: string[];
  countryOfOrigin: string;
  form: string;
  type: string;
  material: string;
  application: string;
  additionalInfo: string;
  description: string;
  collagenTypes?: {
    type: string;
    description: string;
    icon: string;
  }[];
  otherComponents?: string;
  features: string[];
  benefits: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  documents?: {
    name: string;
    url: string;
    type: "pdf" | "doc" | "excel";
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "gloves",
    name: "PS54Y Gloves Latex",
    category: "latex",
    price: 200,
    images: [
      "/product/glo/pexels-karola.jpg",
      "/product/glo/pexels-shvetsa.jpg",
      "/product/glo/pexels-sora-shimazaki.jpg",
      "/product/glo/pexels-tara-winstead.jpg",
    ],
    businessType: ["Manufacturer", "Exporter", "Supplier", "Trader"],
    countryOfOrigin: "Thailand",
    form: "Gloves",
    type: "Disposable Gloves",
    material: "Natural Rubber Latex",
    application: "General and Light Medical, Food Handling, Laboratory",
    additionalInfo: "Single Use, Non-Sterile",
    description:
      "High-quality latex disposable gloves designed for general and light medical applications, food handling, and laboratory use. These gloves provide reliable protection while maintaining comfort and flexibility.",
    features: [
      "Powder-Free",
      "Medical Grade",
      "Single Use",
      "Non-Sterile",
      "Ambidextrous",
      "Polymer Coated",
    ],
    benefits: [
      "Medical Standards Compliance",
      "Skin Tested for Safety",
      "Quality Assured Manufacturing",
      "Chemical Handling Protection",
      "Food & Hygiene Safe",
      "Protective / Emergency Services Ready",
      "Factory Compliance Certified",
      "Sustainable Materials Used",
    ],
  },
  {
    id: "2",
    slug: "pillow-latex",
    name: "Pillow Latex",
    category: "latex",
    price: 200,
    images: [
      "/product/pillow/pillow-1.jpg",
      "/product/pillow/pillow-2.jpg",
      "/product/pillow/pillow-3.jpg",
      "/product/pillow/pillow-4.jpg",
    ],
    businessType: ["Manufacturer", "Exporter", "Supplier", "Trader"],
    countryOfOrigin: "India",
    form: "Pillow",
    type: "Latex Pillow",
    material: "Natural Latex",
    application: "Sleeping Support, Neck & Head Support",
    additionalInfo: "Breathable with Air Holes",
    description:
      "High-quality latex pillow designed for optimal sleeping comfort and ergonomic support. Features breathable air holes and high elasticity for enhanced comfort.",
    features: [
      "Ergonomic Support",
      "Breathable Air Holes",
      "High Elasticity",
      "Anti-Dust Mite",
      "Durable & Long-Lasting",
    ],
    benefits: [
      "Medical Standards Compliance",
      "Skin Tested for Safety",
      "Ergonomic Certified",
      "Hypoallergenic Tested",
      "Factory Compliance Certified",
    ],
    specifications: [
      { label: "Packaging", value: "Plastic Box" },
      { label: "Shelf Life", value: "6 Months" },
    ],
  },
{
  id: "3",
  slug: "mattress-latex",
  name: "Mattress Latex",
  category: "latex",
  price: 200,
  images: [
    "/product/mattress/hand-soft-duvet.jpg",
    "/product/mattress/double-mattress.jpg",
    "/product/mattress/natural-para-later.jpg",
    "/product/mattress/supa-latex.jpg",
  ],
  businessType: ["Manufacturer", "Exporter", "Supplier", "Trader"],
  countryOfOrigin: "India",
  form: "Mattress",
  type: "Latex Mattress",
  material: "Natural Rubber Latex",
  application: "Bedroom, Orthopedic Back Support, Home and Luxury Hotel Use",
  additionalInfo: "Hypoallergenic with Zero Motion Transfer",
  description: "Premium natural latex mattress engineered for perfect spinal alignment and orthopedic support. Naturally hypoallergenic with zero motion transfer for undisturbed sleep.",
  features: [
    "Perfect Spinal Alignment",
    "Orthopedic Support",
    "Naturally Hypoallergenic",
    "Zero Motion Transfer",
    "Undisturbed Sleep"
  ],
  benefits: [
    "Superior Comfort",
    "Durable and Long-lasting",
    "Eco-friendly Material",
    "Pressure Relief",
    "Improved Sleep Quality"
  ],
  specifications: [
    { label: "Packaging", value: "1 unit / Compressed and Rolled in Box" },
    { label: "Size", value: "80x200cm (31x79in)" },
    { label: "Dimension", value: "2.01L x 0.79W x 0.05Th metres" }
  ],
},
{
  id: "4",
  slug: "folding-wagon",
  name: "Folding Wagon",
  category: "wagon",
  price: 200,
  images: [
    "/product/trolley/trolley-1.jpg",
    "/product/trolley/trolley-2.jpg",
    "/product/trolley/trolley-3.jpg",
    "/product/trolley/trolley-4.jpg",
  ],
  businessType: ["Manufacturer", "Exporter", "Supplier", "Trader"],
  countryOfOrigin: "Thailand",
  form: "Wagon",
  type: "Heavy-duty Steel Frame",
  material: "Heavy-duty Steel Frame, 600D Oxford Polyester Fabric",
  application: "Outdoor Activities, Shopping, Camping, Beach Trips, Garden Work",
  additionalInfo: "High Load Capacity up to 100 kg",
  description: "Premium heavy-duty folding wagon with a sturdy steel frame supporting up to 100 kg. Features 360° all-terrain wheels, an adjustable handle, and a compact space-saving design that folds in seconds for easy storage.",
  features: [
    "Heavy-Duty Steel Frame",
    "360° All-Terrain Wheels",
    "Quick & Easy Folding",
    "High Load Capacity (100 kg)"
  ],
  benefits: [
    "International Standards",
    "SGS Certified Material",
    "Quality Assured",
    "Load-Bearing Tested",
    "Wear & Tear Resistant",
    "Durability Tested",
    "Factory Compliance"
  ],
  specifications: [
    { label: "Packaging", value: "1 unit / box" },
    { label: "Size", value: "90x50x55 cm" },
    { label: "Dimension", value: "0.90L x 0.50W x 0.55H metres" }
  ],
}
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Helper function to get all product slugs
export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
