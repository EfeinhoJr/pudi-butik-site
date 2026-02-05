"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface ProductImageSliderProps {
  images: string[];
  alt: string;
  productId: string;
}

/**
 * Lightweight image slider - swipeable on mobile, arrows on desktop
 * Uses CSS scroll-snap, no external libraries
 */
export default function ProductImageSlider({
  images,
  alt,
  productId,
}: ProductImageSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container || index < 0 || index >= images.length) return;
    const slideWidth = container.offsetWidth;
    container.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  }, [images.length]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const slideWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / slideWidth);
    setCurrentIndex(Math.min(index, images.length - 1));
  }, [images.length]);

  if (!images.length) return null;

  const showArrows = images.length > 1;

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-beige-50/50">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((src, i) => (
          <div
            key={`${productId}-${i}`}
            className="relative h-full w-full flex-shrink-0 snap-center"
          >
            <Image
              src={src}
              alt={`${alt} - ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Arrow navigation - desktop only */}
      {showArrows && (
        <>
          <button
            type="button"
            onClick={() => goToSlide(currentIndex - 1)}
            aria-label="Önceki görsel"
            className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-sm transition-opacity hover:bg-white sm:block disabled:opacity-0"
            style={{ opacity: currentIndex > 0 ? 1 : 0 }}
            disabled={currentIndex <= 0}
          >
            <svg className="h-4 w-4 text-brown-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label="Sonraki görsel"
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-sm transition-opacity hover:bg-white sm:block disabled:opacity-0"
            style={{ opacity: currentIndex < images.length - 1 ? 1 : 0 }}
            disabled={currentIndex >= images.length - 1}
          >
            <svg className="h-4 w-4 text-brown-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator - multiple images */}
      {showArrows && images.length <= 5 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Görsel ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-3 bg-brown-700" : "bg-white/70 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
