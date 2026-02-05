"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAllProducts } from "@/src/hooks/useAllProducts";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const { products } = useAllProducts();
  const product = id ? products.find((p) => p.id === id) : undefined;

  if (!id || !product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <p className="text-brown-600">Ürün bulunamadı.</p>
        <Link href="/products" className="mt-4 inline-block text-brown-700 underline hover:text-brown-900">
          Ürünlere dön
        </Link>
      </div>
    );
  }

  if (product === undefined) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="animate-pulse rounded-2xl bg-beige-100 p-12" />
      </div>
    );
  }

  const images = product.images?.length ? product.images : ["https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/products" className="mb-8 inline-flex text-sm text-brown-600 hover:text-brown-800">
        ← Ürünlere dön
      </Link>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-beige-100">
          <Image
            src={images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-serif text-3xl font-light text-brown-800 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-brown-900">{product.price}</p>
          <a
            href={product.trendyolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brown-700 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-brown-800 sm:w-auto"
          >
            Trendyol&apos;da Gör
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
