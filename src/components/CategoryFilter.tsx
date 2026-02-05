"use client";

import type { ProductCategory } from "@/src/data/products";

interface CategoryFilterProps {
  activeCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "kadın", label: "Kadın Giyim" },
  { value: "çocuk", label: "Çocuk Giyim" },
];

/**
 * Kategori filtre butonları - ürünler sayfasında kullanılır
 */
export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onCategoryChange(category.value)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            activeCategory === category.value
              ? "bg-brown-700 text-white shadow-md"
              : "bg-beige-100 text-brown-700 hover:bg-beige-200"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
