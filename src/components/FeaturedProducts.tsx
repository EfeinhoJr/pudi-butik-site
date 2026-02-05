"use client";

import ProductCard from "@/src/components/ProductCard";
import { useAllProducts } from "@/src/hooks/useAllProducts";
import type { CategoryFilter } from "@/src/components/CategorySelector";

interface FeaturedProductsProps {
  category: CategoryFilter;
}

/**
 * Featured products - filtered by category
 * Grid: 2 mobile, 3 tablet, 4 desktop
 */
export default function FeaturedProducts({ category }: FeaturedProductsProps) {
  const { products } = useAllProducts();

  const filtered =
    category === "Tüm"
      ? products
      : products.filter((p) => p.category === category);

  const featured = filtered.slice(0, 8);

  return (
    <section className="mt-10 sm:mt-12">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {featured.length === 0 && (
        <p className="py-12 text-center text-brown-500">
          Bu kategoride henüz ürün yok.
        </p>
      )}
    </section>
  );
}
