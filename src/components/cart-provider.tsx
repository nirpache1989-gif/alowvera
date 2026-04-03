"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { getProduct } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";
import type { CartLine, Product } from "@/lib/types";

interface CartContextValue {
  lines: CartLine[];
  detailedLines: Array<{ product: Product; quantity: number }>;
  itemCount: number;
  subtotal: number;
  subtotalLabel: string;
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "alowvera-cart";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setLines(JSON.parse(stored) as CartLine[]);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    }
  }, [hydrated, lines]);

  const detailedLines = lines.flatMap((line) => {
    const product = getProduct(line.slug);
    return product ? [{ product, quantity: line.quantity }] : [];
  });

  const itemCount = detailedLines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = detailedLines.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );

  const value: CartContextValue = {
    lines,
    detailedLines,
    itemCount,
    subtotal,
    subtotalLabel: formatPrice(subtotal),
    addItem: (slug) => {
      if (!getProduct(slug)) {
        return;
      }

      setLines((current) => {
        const existing = current.find((line) => line.slug === slug);
        if (existing) {
          return current.map((line) =>
            line.slug === slug ? { ...line, quantity: line.quantity + 1 } : line,
          );
        }

        return [...current, { slug, quantity: 1 }];
      });
    },
    removeItem: (slug) => {
      setLines((current) => current.filter((line) => line.slug !== slug));
    },
    updateQuantity: (slug, quantity) => {
      setLines((current) =>
        current.flatMap((line) => {
          if (line.slug !== slug) {
            return [line];
          }

          if (quantity <= 0) {
            return [];
          }

          return [{ ...line, quantity }];
        }),
      );
    },
    clearCart: () => {
      setLines([]);
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
