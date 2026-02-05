import HeroSection from "@/src/components/HeroSection";
import ProductsGrid from "@/src/components/ProductsGrid";

/**
 * Ürünler sayfası - 2/3/4 column responsive grid + kategori filtresi
 */
export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Ürünler"
        subtitle="Kadın ve çocuk giyim koleksiyonumuz"
      />
      <section className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ProductsGrid />
      </section>
    </>
  );
}
