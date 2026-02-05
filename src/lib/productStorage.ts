/**
 * Product storage - localStorage for admin-imported/edited products
 * Merges with static products for storefront
 */

import type { Product, ProductCategory } from "@/src/data/products";

const STORAGE_KEY = "pudi-products";

const DEFAULT_CATEGORY: ProductCategory = "Kadın";

function normalizeProduct(p: Partial<Product> & { id: string }): Product {
  return {
    id: p.id,
    name: p.name ?? "Ürün",
    price: p.price ?? "₺0",
    images: Array.isArray(p.images) ? p.images : [],
    trendyolLink: p.trendyolLink ?? "",
    category: (p.category === "Kadın" || p.category === "Çocuk" || p.category === "Çanta") ? p.category : DEFAULT_CATEGORY,
  };
}

export function getStoredProducts(): Product[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as Partial<Product>[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((p) => p?.id).map((p) => normalizeProduct(p as Product & { id: string }));
  } catch {
    return [];
  }
}

export function saveProducts(products: Product[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function generateId(): string {
  return `prod-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
