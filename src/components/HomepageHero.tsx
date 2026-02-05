"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import TrustBar from "./TrustBar";
import Link from "next/link";
import type { CategoryFilter } from "./CategorySelector";

/**
 * Homepage hero + category selector + featured products
 * Shared category state
 */
export default function HomepageHero() {
  const [category, setCategory] = useState<CategoryFilter>("Tüm");

  return (
    <>
      <HeroSection
        title="Pudi Butik"
        subtitle="Kadın ve çocuk giyiminde zarafet ve kalite"
        showCategorySelector
        activeCategory={category}
        onCategoryChange={setCategory}
      />

      <TrustBar />

      <section className="mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-brown-800 sm:text-4xl">
            Öne Çıkan Ürünler
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brown-600">
            Kadın ve çocuk giyiminde seçkin koleksiyonumuzdan örnekler
          </p>
        </div>

        <FeaturedProducts category={category} />

        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border-2 border-brown-700 px-8 py-3 text-sm font-medium text-brown-700 transition-all duration-200 hover:bg-brown-700 hover:text-white"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>
      </section>
    </>
  );
}
