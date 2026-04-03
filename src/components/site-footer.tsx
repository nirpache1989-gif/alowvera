import Link from "next/link";

import { getBrands, getGoals, getSiteSettings } from "@/lib/catalog";

export function SiteFooter() {
  const site = getSiteSettings();
  const footerBrands = getBrands();
  const footerGoals = getGoals().slice(0, 4);

  return (
    <footer className="relative z-10 px-4 pb-8 pt-24 sm:px-6 lg:px-8">
      <div className="surface-dark mx-auto max-w-[1120px] overflow-hidden rounded-[1.5rem] px-6 py-10 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <div>
              <div className="display-title text-3xl tracking-[0.12em] text-[var(--surface-dark-text)]">
                {site.name}
              </div>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[rgba(242,238,229,0.78)]">
                שגרות, מוצרים ומותגים שאנחנו באמת משתמשים בהם. מקום שקט להתחיל ממנו.
              </p>
            </div>
            <p className="max-w-xl text-xs leading-6 text-[rgba(242,238,229,0.62)]">
              המידע באתר הוא מידע כללי בלבד. תוספי תזונה אינם תרופה. בהריון, בהנקה,
              בנטילת תרופות או במצב רפואי קיים, כדאי להתייעץ עם רופא או רוקח.
            </p>
          </div>

          <div>
            <div className="eyebrow text-[rgba(242,238,229,0.62)]">מותגים</div>
            <div className="mt-4 space-y-3">
              {footerBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="block text-sm text-[var(--surface-dark-text)] transition hover:text-[#DCCFAD]"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-[rgba(242,238,229,0.62)]">מסלולים</div>
            <div className="mt-4 space-y-3">
              {footerGoals.map((goal) => (
                <Link
                  key={goal.slug}
                  href={`/goals/${goal.slug}`}
                  className="block text-sm text-[var(--surface-dark-text)] transition hover:text-[#DCCFAD]"
                >
                  {goal.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
