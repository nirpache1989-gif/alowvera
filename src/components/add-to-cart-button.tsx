"use client";

import { useState, useTransition } from "react";

import { useCart } from "@/components/cart-provider";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  slug: string;
  disabled?: boolean;
  className?: string;
}

export function AddToCartButton({
  slug,
  disabled = false,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isPending, startTransition] = useTransition();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(() => {
          addItem(slug);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1400);
        });
      }}
      className={cn(
        "text-sm",
        disabled
          ? "cursor-not-allowed rounded-lg border border-line bg-white/70 px-6 py-3 text-muted"
          : "button-primary",
        className,
      )}
    >
      {disabled ? "בקרוב" : added ? "נוסף לעגלה" : "להוסיף לעגלה"}
    </button>
  );
}
