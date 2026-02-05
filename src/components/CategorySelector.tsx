"use client";

export type CategoryFilter = "Tüm" | "Kadın" | "Çocuk" | "Çanta";

interface CategorySelectorProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: "Tüm", label: "Tüm Ürünler" },
  { value: "Kadın", label: "Kadın" },
  { value: "Çocuk", label: "Çocuk" },
  { value: "Çanta", label: "Çanta" },
];

/**
 * Category selector - pill buttons, premium boutique style
 * Top: Tüm Ürünler, Under: Kadın, Çocuk, Çanta
 */
export default function CategorySelector({
  activeCategory,
  onCategoryChange,
}: CategorySelectorProps) {
  const main = CATEGORIES[0];
  const sub = CATEGORIES.slice(1);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      {/* Tüm Ürünler - top center */}
      <button
        type="button"
        onClick={() => onCategoryChange(main.value)}
        className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
          activeCategory === main.value
            ? "bg-brown-700 text-white shadow-md"
            : "bg-white/80 text-brown-700 ring-1 ring-beige-200/80 hover:bg-beige-50 hover:ring-beige-300/80"
        }`}
      >
        {main.label}
      </button>

      {/* Kadın, Çocuk, Çanta - under it */}
      <div className="flex flex-wrap justify-center gap-2">
        {sub.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => onCategoryChange(cat.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-brown-700 text-white shadow-md"
                : "bg-white/80 text-brown-700 ring-1 ring-beige-200/80 hover:bg-beige-50 hover:ring-beige-300/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
