import type { Metadata } from "next";
import { Assistant, Frank_Ruhl_Libre, Inter } from "next/font/google";

import "@/app/globals.css";
import { AmbientController } from "@/components/ambient-controller";
import { CartProvider } from "@/components/cart-provider";
import { RitualPageFrame } from "@/components/ritual-page-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-display-hebrew",
  weight: ["400", "500", "700"],
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-body-hebrew",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-label-latin",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Alowvera | Atlas of Rituals",
    template: "%s | Alowvera",
  },
  description:
    "פלטפורמת wellness editorial-commerce בעברית RTL, שנבנתה להתרחבות מעבר למותג יחיד.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body
        className={`${frankRuhlLibre.variable} ${assistant.variable} ${inter.variable} bg-bg text-ink antialiased`}
      >
        <CartProvider>
          <div className="relative isolate overflow-x-clip">
            <AmbientController />
            <div className="ambient-grid absolute inset-x-0 top-0 h-[70rem] opacity-45" />
            <div className="ambient-blur right-[-8rem] top-[10rem] h-[24rem] w-[24rem] bg-[rgba(123,163,104,0.12)]" />
            <div className="ambient-blur left-[-10rem] top-[32rem] h-[30rem] w-[30rem] bg-[rgba(196,164,74,0.14)]" />

            <SiteHeader />
            <main className="relative z-10 mx-auto mt-6 max-w-[1120px] px-4 sm:px-6 lg:px-8">
              <RitualPageFrame>{children}</RitualPageFrame>
            </main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
