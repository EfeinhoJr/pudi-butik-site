"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Navbar - Logo left, brand center, hamburger right
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/products", label: "Ürünler" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-beige-200/50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-[52px] md:h-[58px] sm:px-6 lg:px-8">
        {/* Left - Logo */}
        <Link
          href="/"
          className="relative h-[44px] w-[110px] md:h-[50px] md:w-[130px] flex-shrink-0"
          aria-label="Pudi Butik Ana Sayfa"
        >
          <Image
            src="/pudi-logo.png"
            alt="Pudi Butik"
            fill
            className="object-contain object-left"
            sizes="110px"
            priority
          />
        </Link>

        {/* Center - Brand text */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
          <span className="font-serif text-xl font-semibold tracking-tight text-brown-800">
            Pudi Butik
          </span>
        </div>

        {/* Right - Desktop nav or Hamburger */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown-700 transition-colors hover:text-brown-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menü"
        >
          <span className={`block h-0.5 w-6 bg-brown-800 transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brown-800 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brown-800 transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-beige-200/50 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brown-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
