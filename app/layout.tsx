import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pudi Butik | Kadın ve Çocuk Giyim",
  description:
    "Pudi Butik - Kadın ve çocuk giyiminde zarafet ve kalite. Premium butik ürünleri Trendyol mağazamızda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="relative min-h-screen bg-white font-sans antialiased">
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
