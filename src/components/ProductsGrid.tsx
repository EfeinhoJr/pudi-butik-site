"use client";

import ProductCard from "@/src/components/ProductCard";
import CategorySelector from "@/src/components/CategorySelector";
import { useAllProducts } from "@/src/hooks/useAllProducts";
import { useState } from "react";
import type { CategoryFilter } from "@/src/components/CategorySelector";

/**
 * Products grid with category filter
 * Mobile: 2, Tablet: 3, Desktop: 4 columns
 */
export default function ProductsGrid() {
  const { products } = useAllProducts();
  const [category, setCategory] = useState<CategoryFilter>("Tüm");

  const filtered =
    category === "Tüm" ? products : products.filter((p) => p.category === category);

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <CategorySelector activeCategory={category} onCategoryChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-brown-600">Henüz ürün bulunmuyor.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
