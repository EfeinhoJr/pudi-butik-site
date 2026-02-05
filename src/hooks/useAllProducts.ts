"use client";

import { useState, useEffect, useCallback } from "react";
import { products as staticProducts } from "@/src/data/products";
import { getStoredProducts, saveProducts } from "@/src/lib/productStorage";
import type { Product } from "@/src/data/products";

/**
 * Merges static products with localStorage products
 * Stored products override by id; new stored products are appended
 */
export function useAllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const load = useCallback(() => {
    const stored = getStoredProducts();
    const staticIds = new Set(staticProducts.map((p) => p.id));
    const storedMap = new Map(stored.map((p) => [p.id, p]));
    const mergedStatic = staticProducts.map((p) => storedMap.get(p.id) ?? p);
    const storedNew = stored.filter((p) => !staticIds.has(p.id));
    setProducts([...mergedStatic, ...storedNew]);
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, [load]);

  const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
    const stored = getStoredProducts();
    const staticIds = new Set(staticProducts.map((p) => p.id));
    const all = [...staticProducts, ...stored.filter((p) => !staticIds.has(p.id))];
    const base = all.find((p) => p.id === id);
    if (!base) return;
    const updated = { ...base, ...updates };
    const others = stored.filter((p) => p.id !== id);
    saveProducts([...others, updated]);
    load();
  }, [load]);

  const addProduct = useCallback((product: Product) => {
    const stored = getStoredProducts();
    saveProducts([...stored, product]);
    load();
  }, [load]);

  const removeProduct = useCallback((id: string) => {
    const staticIds = new Set(staticProducts.map((p) => p.id));
    if (staticIds.has(id)) return;
    const stored = getStoredProducts().filter((p) => p.id !== id);
    saveProducts(stored);
    load();
  }, [load]);

  return { products, load, updateProduct, addProduct, removeProduct };
}
