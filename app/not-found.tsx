import Link from "next/link";

/**
 * 404 - Sayfa bulunamadı
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="font-serif text-4xl font-light text-brown-800">404</h1>
      <p className="mt-2 text-brown-600">Sayfa bulunamadı</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brown-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brown-800"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
