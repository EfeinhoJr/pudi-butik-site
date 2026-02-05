"use client";

import Link from "next/link";
import type { Product } from "@/src/data/products";
import ProductImageSlider from "./ProductImageSlider";

interface ProductCardProps {
  product: Product;
}

/**
 * Product card - image slider, name, price, CTA
 * Mobile: 2 cols, Tablet: 3, Desktop: 4
 */
export default function ProductCard({ product }: ProductCardProps) {
  const images = product.images?.length ? product.images : ["https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"];
  const whatsappHref = `https://wa.me/905437680643?text=${encodeURIComponent(`Merhaba, şu ürün hakkında bilgi almak istiyorum: ${product.name}`)}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-beige-200/50 bg-white shadow-sm transition-all duration-200 sm:hover:-translate-y-0.5 sm:hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block">
        <ProductImageSlider
          images={images}
          alt={product.name}
          productId={product.id}
        />
      </Link>

      <div className="flex flex-1 flex-col p-1.5 sm:p-2">
        <h3 className="line-clamp-2 text-[13px] font-medium leading-snug text-brown-600 sm:text-sm">
          {product.name}
        </h3>
        <p className="mt-0.5 text-lg font-bold text-brown-900 sm:text-xl">
          {product.price}
        </p>
        <a
          href={product.trendyolLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-full min-h-12 sm:min-h-11 items-center justify-center gap-2 rounded-lg bg-brown-800 bg-gradient-to-b from-white/[0.08] to-transparent px-3 py-3 text-sm font-semibold text-white shadow-md transition duration-200 active:scale-[0.98] sm:mt-3 sm:hover:bg-brown-900 sm:hover:shadow-lg"
          aria-label={`Trendyol'da ${product.name} ürününü gör`}
        >
          Trendyol&apos;da Gör
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-full min-h-12 sm:min-h-11 items-center justify-center gap-2 rounded-lg border border-green-500 text-green-600 sm:hover:bg-green-50 px-3 text-sm font-semibold transition duration-150 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-200"
          aria-label={`WhatsApp ile ${product.name} hakkında sor`}
        >
          WhatsApp ile Sor
          <svg className="h-4 w-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20.52 3.48A11.843 11.843 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.52 5.82L0 24l6.35-1.6A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.6a9.6 9.6 0 01-5.18-1.46l-.37-.22-3.78.95.99-3.68-.24-.38A9.6 9.6 0 012.4 12c0-5.32 4.28-9.6 9.6-9.6 2.56 0 4.97.99 6.78 2.8A9.56 9.56 0 0121.6 12c0 5.32-4.28 9.6-9.6 9.6z" />
            <path d="M17.53 14.41c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.8.95-.98 1.15-.18.2-.36.22-.66.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.69-1.61-1.99-.17-.3-.02-.46.13-.61.13-.13.29-.33.44-.5.15-.17.19-.28.29-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.37-.27.31-1.02.99-1.02 2.41 0 1.42 1.05 2.8 1.19 2.99.15.2 2.06 3.2 5 4.49 2.94 1.29 3.4 1.09 4 1.02.6-.07 1.73-.7 1.98-1.37.25-.67.25-1.25.18-1.37-.07-.12-.27-.19-.56-.34z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
