import HeroSection from "@/src/components/HeroSection";

/**
 * Hakkımızda sayfası - butik hikayesi ve marka kimliği
 */
export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Hakkımızda"
        subtitle="Pudi Butik hikayesi"
      
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-brown-700">
          <div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-brown-800">
              Biz Kimiz?
            </h2>
            <p className="leading-relaxed">
              Pudi Butik, kadın ve çocuk giyiminde kaliteyi ve şıklığı bir
              araya getiren bir butik markasıdır. Her yaştan kadına ve çocuğa
              uygun, günlük kullanımdan özel günlere kadar geniş bir yelpazede
              ürünler sunuyoruz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-brown-800">
              Misyonumuz
            </h2>
            <p className="leading-relaxed">
              Müşterilerimize en iyi kalitede, rahat ve şık giyim seçenekleri
              sunmak. Her ürünümüzü özenle seçiyor, doğal ve kaliteli
              kumaşlarla çalışıyoruz. Kadın ve çocuk giyiminde güvenilir bir
              adres olmayı hedefliyoruz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-brown-800">
              Değerlerimiz
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong>Kalite:</strong> Her ürünümüzde yüksek kalite standartları
              </li>
              <li>
                <strong>Zarafet:</strong> Zamansız ve şık tasarımlar
              </li>
              <li>
                <strong>Konfor:</strong> Günlük hayatta rahatlık
              </li>
              <li>
                <strong>Güven:</strong> Müşteri memnuniyeti odaklı hizmet
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-beige-50/50 p-8">
            <p className="font-serif text-lg italic text-brown-700">
              &ldquo;Pudi Butik olarak, her parçada özen ve kalite arayanlara
              hizmet etmekten gurur duyuyoruz.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
