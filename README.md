# Alowvera Atlas

פלטפורמת wellness editorial-commerce בעברית RTL, עם שכבת מסחר מוכנה ל-Shopify ושכבת תוכן מוכנה ל-Sanity.

## Stack

- `Next.js 16` App Router
- `React 19`
- `Tailwind CSS 4`
- RTL-first design system
- Mock content repository עם נקודות חיבור עתידיות ל-Shopify/Sanity

## פקודות

```bash
npm install
npm run dev
npm run lint
npm run typecheck
```

## מבנה

- `src/app` ראוטים ומסכים
- `src/components` קומפוננטות UI ו-commerce
- `src/lib/site-data.ts` מודלי תוכן ונתוני דמה
- `src/lib/integrations` מתאמים עתידיים ל-Shopify ול-Sanity
- `docs/visual-asset-brief.md` בריף לנכסי AI וצילום

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_TOKEN=
NEXT_PUBLIC_SHOPIFY_CHANNEL_HANDLE=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
```

כרגע האתר רץ במצב mock-first. ברגע שממלאים אינטגרציות, שכבת הנתונים יכולה לעבור בהדרגה למקורות אמת חיצוניים בלי לשנות את UI השכבה העליונה.

