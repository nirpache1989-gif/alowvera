import { getBrands } from "@/lib/catalog";
import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  const brands = getBrands();

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="About"
        title="המקום שבו מוצרים, שגרות ומותגים נפגשים"
        description="Alowvera הוא לא עוד חנות מוצרים. זה מקום שמחבר בין מה שהגוף צריך לבין המוצרים שעובדים — דרך שגרות אמיתיות, לא דרך מבצעים."
        quote="לא עוד חנות. מקום שנעים לחזור אליו."
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">עקרונות</div>
          <div className="mt-6 space-y-5 text-sm leading-8 text-muted">
            <p>1. אתה מתחיל ממה שאתה מרגיש — לא מקטלוג.</p>
            <p>2. כל המוצרים זמינים לקנייה, אבל בלי לחץ ובלי באנרים שצועקים.</p>
            <p>3. בהמשך יהיו כאן עוד מותגים, מוצרים ושגרות — והכל ירגיש אותו דבר.</p>
            <p>4. העיצוב נבנה כדי לגדול — עם תמונות אמיתיות, מותגים חדשים, ותוכן שמתחדש.</p>
          </div>
        </div>

        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">מותגים</div>
          <div className="mt-6 grid gap-4" data-reveal-group>
            {brands.map((brand) => (
              <div key={brand.slug} className="surface-card reveal-on-scroll rounded-[1rem] p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-muted">{brand.eyebrow}</div>
                <h2 className="display-title mt-3 text-3xl text-ink">{brand.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
