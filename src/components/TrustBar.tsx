"use client";

export default function TrustBar() {
  return (
    <div className="mx-auto mt-4 mb-6 max-w-4xl px-4 py-2 rounded-full bg-beige-50 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brown-700">
        <div className="flex items-center gap-2">
          <span className="text-lg">🚚</span>
          <span className="font-medium">Hızlı Kargo</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg">⭐</span>
          <span className="font-medium">Trendyol Güvencesi</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg">💳</span>
          <span className="font-medium">Kolay İade</span>
        </div>
      </div>
    </div>
  );
}
