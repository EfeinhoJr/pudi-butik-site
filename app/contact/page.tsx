import HeroSection from "@/src/components/HeroSection";

const TRENDYOL_URL = "https://www.trendyol.com/sr?mid=748926&os=1&pi=3";

/**
 * İletişim sayfası - Instagram, e-posta, Trendyol linkleri
 */
export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="İletişim"
        subtitle="Bizimle iletişime geçin"
        showButton={false}
      />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="rounded-2xl border border-beige-200/60 bg-white p-8 shadow-sm">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-brown-800">
              Bize Ulaşın
            </h2>

            <div className="space-y-6">
              {/* Instagram Placeholder */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-brown-600">
                  Instagram
                </h3>
                <p className="text-brown-800">@pudibutik</p>
                <p className="mt-1 text-sm text-brown-500">
                  Yeni ürünler ve kampanyalardan haberdar olmak için takip edin.
                </p>
              </div>

              {/* Email Placeholder */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-brown-600">
                  E-posta
                </h3>
                <p className="text-brown-800">info@pudibutik.com</p>
                <p className="mt-1 text-sm text-brown-500">
                  Sorularınız için bize yazabilirsiniz.
                </p>
              </div>

              {/* Trendyol Link */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-brown-600">
                  Trendyol Mağazamız
                </h3>
                <a
                  href={TRENDYOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-brown-700 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brown-800"
                >
                  Trendyol&apos;da Mağazamızı Ziyaret Et
                </a>
                <p className="mt-2 text-sm text-brown-500">
                  Tüm ürünlerimizi görmek ve sipariş vermek için Trendyol
                  mağazamızı ziyaret edebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-brown-600">
            En kısa sürede size dönüş yapacağız. Teşekkür ederiz!
          </p>
        </div>
      </section>
    </>
  );
}
