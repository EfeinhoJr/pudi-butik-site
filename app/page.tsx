import HomepageHero from "@/src/components/HomepageHero";

/**
 * Ana sayfa - Hero, kategori seçici, öne çıkan ürünler
 */
export default function HomePage() {
  return (
    <>
      <HomepageHero />

      {/* Boutique Statement */}
      <section className="border-t border-beige-200/50 bg-beige-50/30 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-serif text-xl leading-relaxed text-brown-700">
            Pudi Butik olarak, kadın ve çocuk giyiminde kaliteli, şık ve rahat
            parçalar sunmayı hedefliyoruz. Her ürünümüz, özenle seçilmiş
            kumaşlar ve zarif tasarımlarla hazırlanıyor.
          </p>
        </div>
      </section>
    </>
  );
}
