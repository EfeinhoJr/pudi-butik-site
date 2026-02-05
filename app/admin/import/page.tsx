"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/src/components/AdminLogoutButton";
import {
  useAllProducts,
} from "@/src/hooks/useAllProducts";
import { generateId } from "@/src/lib/productStorage";
import type { Product } from "@/src/data/products";

const TRENDYOL_STORE = "https://www.trendyol.com/sr?mid=748926&os=1&pi=3";

function isValidTrendyolLink(link: string): boolean {
  const t = link.trim();
  return t.startsWith("https://www.trendyol.com/") || t.startsWith("https://trendyol.com/");
}

export default function AdminImportPage() {
  const { products, addProduct, updateProduct, load } = useAllProducts();
  const [link, setLink] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const trimmed = link.trim();
    if (!trimmed) {
      setMessage({ type: "error", text: "Lütfen Trendyol linki girin." });
      return;
    }
    if (!isValidTrendyolLink(trimmed)) {
      setMessage({ type: "error", text: "Geçerli bir Trendyol linki girin." });
      return;
    }
    const product: Product = {
      id: generateId(),
      name: "Yeni Ürün",
      price: "₺0",
      images: [],
      trendyolLink: trimmed,
      category: "Kadın",
    };
    addProduct(product);
    setMessage({ type: "success", text: "Ürün eklendi." });
    setLink("");
  };

  return (
    <div className="min-h-screen bg-beige-50/30">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <Link href="/" className="inline-flex text-sm text-brown-600 hover:text-brown-800">
              ← Siteye dön
            </Link>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-brown-800">
              Admin Panel
            </h1>
            <p className="mt-1 text-brown-600">Ürün içe aktarma ve düzenleme</p>
          </div>

          <div>
            <LogoutButton />
          </div>
        </div>

        {/* Import form */}
        <form onSubmit={handleImport} className="mt-10 rounded-2xl border border-beige-200/60 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-brown-800">
            Trendyol Link ile Ürün Ekle
          </h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://www.trendyol.com/..."
              className="flex-1 rounded-lg border border-beige-200/80 px-4 py-2.5 text-brown-800 placeholder-brown-400 focus:border-brown-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-brown-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-brown-800"
            >
              Ürünü Ekle
            </button>
          </div>
          {message && (
            <p className={`mt-3 text-sm ${message.type === "success" ? "text-green-700" : "text-red-600"}`}>
              {message.text}
            </p>
          )}
        </form>

        {/* Product editor cards */}
        <div className="mt-12">
          <h2 className="font-serif text-xl font-semibold text-brown-800">
            Ürün Düzenleyici
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductEditorCard
                key={product.id}
                product={product}
                onUpdate={(updates) => updateProduct(product.id, updates)}
                onReload={() => {}}
              />
            ))}
          </div>
          {products.length === 0 && (
            <p className="mt-6 text-brown-500">Henüz ürün yok. Yukarıdan link ekleyin.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const CATEGORIES = ["Kadın", "Çocuk", "Çanta"] as const;

function ProductEditorCard({
  product,
  onUpdate,
}: {
  product: Product;
  onUpdate: (u: Partial<Product>) => void;
  onReload: () => void;
}) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [trendyolLink, setTrendyolLink] = useState(product.trendyolLink);
  const [category, setCategory] = useState(product.category ?? "Kadın");
  const [images, setImages] = useState<string[]>(product.images || []);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setTrendyolLink(product.trendyolLink);
    setCategory(product.category ?? "Kadın");
    setImages(product.images || []);
  }, [product.id, product.name, product.price, product.trendyolLink, product.category, product.images?.length]);

  const save = useCallback(() => {
    onUpdate({ name, price, trendyolLink, category, images });
  }, [name, price, trendyolLink, category, images, onUpdate]);

  useEffect(() => {
    const timer = setTimeout(save, 300);
    return () => clearTimeout(timer);
  }, [name, price, trendyolLink, images]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    const readers = Array.from(files).map((file) => {
      return new Promise<string>((res) => {
        const r = new FileReader();
        r.onload = () => res(r.result as string);
        r.readAsDataURL(file);
      });
    });
    Promise.all(readers).then((urls) => {
      setImages((prev) => [...prev, ...urls]);
    });
    e.target.value = "";
  };

  const removeImage = (i: number) => setImages((prev) => prev.filter((_, j) => j !== i));

  const moveImage = (i: number, dir: "up" | "down") => {
    const next = [...images];
    const j = dir === "up" ? i - 1 : i + 1;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setImages(next);
  };

  return (
    <div className="rounded-2xl border border-beige-200/50 bg-white p-6 shadow-sm transition-shadow duration-200 sm:hover:shadow-md">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Image manager */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-brown-700">Görseller</h3>
          <div className="flex flex-wrap gap-2">
            {images.map((src, i) => (
              <div key={i} className="relative group">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-beige-100">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                    unoptimized={src.startsWith("data:")}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute -right-1 -top-1 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Sil"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="mt-1 flex justify-center gap-0.5">
                  <button type="button" onClick={() => moveImage(i, "up")} disabled={i === 0} className="rounded p-0.5 text-brown-600 hover:bg-beige-100 disabled:opacity-40">
                    ▲
                  </button>
                  <button type="button" onClick={() => moveImage(i, "down")} disabled={i === images.length - 1} className="rounded p-0.5 text-brown-600 hover:bg-beige-100 disabled:opacity-40">
                    ▼
                  </button>
                </div>
              </div>
            ))}
            <label className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-beige-300 text-brown-500 transition-colors hover:border-beige-500 hover:text-brown-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="mt-1 text-xs">Yükle</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Görsel URL ekle (https://...)"
              className="flex-1 rounded-lg border border-beige-200/80 px-3 py-2 text-sm text-brown-800 placeholder-brown-400"
            />
            <button
              type="button"
              onClick={() => {
                if (imageUrl.trim()) {
                  setImages((prev) => [...prev, imageUrl.trim()]);
                  setImageUrl("");
                }
              }}
              className="rounded-lg bg-beige-200/80 px-4 py-2 text-sm font-medium text-brown-700 transition-colors hover:bg-beige-300/80"
            >
              URL Ekle
            </button>
          </div>
        </div>

        {/* Text editor */}
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Product["category"])}
              className="w-full rounded-lg border border-beige-200/80 px-3 py-2 text-brown-800"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Ürün adı</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-beige-200/80 px-3 py-2 text-brown-800"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Fiyat</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="₺299"
              className="w-full rounded-lg border border-beige-200/80 px-3 py-2 text-brown-800"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-brown-700">Trendyol linki</label>
            <input
              type="url"
              value={trendyolLink}
              onChange={(e) => setTrendyolLink(e.target.value)}
              className="w-full rounded-lg border border-beige-200/80 px-3 py-2 text-brown-800"
            />
          </div>
          <p className="text-xs text-brown-500">Değişiklikler otomatik kaydedilir.</p>
        </div>
      </div>
    </div>
  );
}
