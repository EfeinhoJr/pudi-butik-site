import Link from "next/link";

const TRENDYOL_URL = "https://www.trendyol.com/sr?mid=748926&os=1&pi=3";

/**
 * Site footer - marka adı, copyright, sosyal medya placeholder'ları
 */
export default function Footer() {
  return (
    <footer className="border-t border-beige-200/50 bg-beige-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-semibold text-brown-800 hover:text-brown-600"
            >
              Pudi Butik
            </Link>
            <p className="mt-1 text-sm text-brown-600">
              Kadın ve çocuk giyiminde zarafet
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link
              href="/products"
              className="text-sm text-brown-700 transition-colors hover:text-beige-600"
            >
              Ürünler
            </Link>
            <Link
              href="/about"
              className="text-sm text-brown-700 transition-colors hover:text-beige-600"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="text-sm text-brown-700 transition-colors hover:text-beige-600"
            >
              İletişim
            </Link>
            <a
              href={TRENDYOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brown-800 transition-colors hover:text-beige-600"
            >
              Trendyol Mağazamız
            </a>
          </div>

          {/* Social Placeholders */}
          <div className="flex gap-4">
            <span className="text-sm text-brown-500">Instagram</span>
            <span className="text-sm text-brown-500">•</span>
            <span className="text-sm text-brown-500">E-posta</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-beige-200/50 pt-8 text-center">
          <p className="text-sm text-brown-600">
            © {new Date().getFullYear()} Pudi Butik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
