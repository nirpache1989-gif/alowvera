"use client";

import { useState, useTransition } from "react";

import { ProductStillLife } from "@/components/product-still-life";
import { useCart } from "@/components/cart-provider";
import { beginShopifyCheckout } from "@/lib/integrations/shopify";

export function CartDetail() {
  const { detailedLines, subtotalLabel, removeItem, updateQuantity, clearCart } = useCart();
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  if (!detailedLines.length) {
    return (
      <div className="surface-card rounded-[1rem] p-10 text-center">
        <h2 className="display-title text-3xl text-ink sm:text-4xl">עדיין שקט כאן</h2>
        <p className="mt-4 text-muted">
          אפשר להתחיל משגרה, מצורך שמרגיש נכון, או פשוט לעבור לחנות ולגלול.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5" data-reveal-group>
        {detailedLines.map(({ product, quantity }) => (
          <div
            key={product.slug}
            className="surface-card reveal-on-scroll grid gap-5 rounded-[1rem] p-5 md:grid-cols-[220px_1fr]"
          >
            <ProductStillLife
              title={product.name}
              subtitle={product.format}
              image={product.image}
              from={product.palette.from}
              mid={product.palette.mid}
              to={product.palette.to}
              accent={product.palette.accent}
            />
            <div className="flex flex-col justify-between gap-4">
              <div>
                <div className="eyebrow">{product.format}</div>
                <h3 className="display-title mt-4 text-2xl text-ink sm:text-3xl">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{product.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateQuantity(product.slug, quantity - 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDE4] text-lg text-ink"
                >
                  -
                </button>
                <span className="min-w-10 text-center text-lg font-semibold text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(product.slug, quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDE4] text-lg text-ink"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(product.slug)}
                  className="rounded-lg border border-[rgba(44,58,46,0.12)] px-4 py-2 text-sm text-muted"
                >
                  להסיר
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="surface-card reveal-on-scroll sticky top-28 h-fit rounded-[1rem] p-6">
        <div className="eyebrow">Order Sheet</div>
        <div className="display-title mt-5 text-3xl text-ink sm:text-4xl">{subtotalLabel}</div>
        <p className="mt-3 text-sm leading-7 text-muted">
          בדקת הכול. אפשר לעדכן כמויות, להוסיף עוד, או להמשיך לקופה.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                const response = await beginShopifyCheckout(
                  detailedLines.map((line) => ({
                    slug: line.product.slug,
                    quantity: line.quantity,
                  })),
                );
                setMessage(response.message);
              });
            }}
            className="button-primary"
          >
            {isPending ? "פותח checkout..." : "להמשיך ל-checkout"}
          </button>

          <button type="button" onClick={clearCart} className="button-secondary">
            לנקות את העגלה
          </button>
        </div>

        {message ? (
          <div className="mt-4 rounded-[1rem] bg-white/65 px-4 py-4 text-sm leading-7 text-muted shadow-[0_1px_3px_rgba(44,58,46,0.06)]">
            {message}
          </div>
        ) : null}
      </aside>
    </div>
  );
}
