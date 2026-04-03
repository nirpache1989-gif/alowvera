import type { CartLine } from "@/lib/types";

const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;
const salesChannel = process.env.NEXT_PUBLIC_SHOPIFY_CHANNEL_HANDLE;

export function isShopifyConfigured() {
  return Boolean(shopifyDomain && storefrontToken);
}

export function getShopifyStatusLabel() {
  return isShopifyConfigured() ? "Shopify ready" : "Mock commerce mode";
}

export async function beginShopifyCheckout(lines: CartLine[]) {
  if (!lines.length) {
    return {
      ok: false,
      message: "העגלה ריקה כרגע.",
    };
  }

  if (!isShopifyConfigured()) {
    return {
      ok: false,
      message:
        "Shopify עדיין לא מחובר. ה-UI והארכיטקטורה מוכנים, אבל חסרים משתני סביבה כדי לפתוח checkout אמיתי.",
      mode: "mock" as const,
    };
  }

  return {
    ok: false,
    message: `Shopify מחובר ברמת קונפיגורציה (${salesChannel ?? "default channel"}), אבל יש להשלים mutation קונקרטי לפי ה-store שלך.`,
    mode: "configured" as const,
  };
}

