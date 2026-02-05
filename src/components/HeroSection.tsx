"use client";

import type { CategoryFilter } from "./CategorySelector";
import CategorySelector from "./CategorySelector";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showCategorySelector?: boolean;
  activeCategory?: CategoryFilter;
  onCategoryChange?: (category: CategoryFilter) => void;
}

/**
 * Hero section - boutique hero with optional category selector
 */
export default function HeroSection({
  title = "Pudi Butik",
  subtitle = "Kadın ve çocuk giyiminde zarafet ve kalite",
  showCategorySelector = false,
  activeCategory = "Tüm",
  onCategoryChange,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-beige-50 to-white py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-brown-800 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-600 sm:text-xl">
          {subtitle}
        </p>
        {showCategorySelector && onCategoryChange && (
          <CategorySelector
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        )}
      </div>
    </section>
  );
}
