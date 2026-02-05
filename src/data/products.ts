/**
 * Pudi Butik - Product Data Structure
 * Supports images array and category filtering
 */

export type ProductCategory = "Kadın" | "Çocuk" | "Çanta";

export type Product = {
  id: string;
  name: string;
  price: string;
  images: string[];
  trendyolLink: string;
  category: ProductCategory;
};

const TRENDYOL_STORE = "https://www.trendyol.com/sr?mid=748926&os=1&pi=3";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Pamuklu Bluz",
    price: "₺349",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
      "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?w=600&q=80",
    ],
    trendyolLink: TRENDYOL_STORE,
    category: "Kadın",
  },
  {
    id: "2",
    name: "Bebek Organik Body Takım",
    price: "₺199",
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
      "https://images.unsplash.com/photo-1445796883223-8f96b0a5fd3b?w=600&q=80",
    ],
    trendyolLink: TRENDYOL_STORE,
    category: "Çocuk",
  },
  {
    id: "3",
    name: "Oversize Triko Kazak",
    price: "₺429",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    ],
    trendyolLink: TRENDYOL_STORE,
    category: "Kadın",
  },
  {
    id: "4",
    name: "Çocuk Denim Ceket",
    price: "₺299",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    ],
    trendyolLink: TRENDYOL_STORE,
    category: "Çocuk",
  },
  {
    id: "5",
    name: "Deri Çapraz Çanta",
    price: "₺459",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    ],
    trendyolLink: TRENDYOL_STORE,
    category: "Çanta",
  },
];
