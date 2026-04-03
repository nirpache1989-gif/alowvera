import Image from "next/image";
import Link from "next/link";

import { BrandPanel, BundleCard, JournalCard, ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import {
  getBrands,
  getBundles,
  getGoals,
  getJournalEntries,
  getProducts,
  getRoutines,
} from "@/lib/catalog";

const featuredProductSlugs = [
  "forever-aloe-gel",
  "forever-bee-propolis",
  "atelier-mineral-mist",
];

const routineDotColors: Record<string, string> = {
  morning: "#E8C84A",
  midday: "#7BA368",
  evening: "#8B9EB0",
  travel: "#B0A898",
};

function SectionDivider() {
  return <div className="reveal-on-scroll mx-auto h-px w-full max-w-[200px] bg-[#E8E4DC]" />;
}

export default function HomePage() {
  const goals = getGoals();
  const routines = getRoutines();
  const brands = getBrands();
  const products = getProducts();
  const bundles = getBundles();
  const journalEntries = getJournalEntries();

  const productLookup = new Map(products.map((product) => [product.slug, product]));
  const featuredProducts = featuredProductSlugs
    .map((slug) => productLookup.get(slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));
  const featuredJournalEntries = journalEntries.slice(0, 2);

  return (
    <div className="pb-20 lg:pb-28">
      <section
        className="relative w-screen max-w-none overflow-hidden"
        style={{ marginInline: "calc(50% - 50vw)" }}
      >
        <div className="relative min-h-[80vh]">
          <Image
            src="/images/Hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_32%,rgba(247,245,240,0.65)_52%,rgb(247,245,240)_70%)]" />

          <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1120px] items-center justify-start px-4 py-16 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll max-w-2xl text-right">
              <div className="eyebrow">Atlas of Rituals</div>
              <h1 className="display-title mt-6 text-3xl text-ink sm:text-5xl lg:text-6xl">
                הגוף כבר מסמן.
                <br />
                עייפות, כבדות, עור יבש.
                <br />
                אנחנו פשוט עוזרים למצוא את מה שמתאים.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Alowvera מחבר בין מוצרים, שגרות ומותגים במקום אחד. לא צריך לשוטט בין
                מדפים. אפשר להתחיל מהבטן, מהעור, או מהבוקר.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop" className="button-primary">
                  לפתוח את החנות
                </Link>
                <Link href="/about" className="button-secondary">
                  לראות את הסיפור
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-16 lg:pt-20">
        <SectionDivider />
      </div>

      <section className="py-20 lg:py-28">
        <SectionHeading
          eyebrow="Explore by Need"
          title="מה הגוף צריך עכשיו."
          description="בחר את מה שהכי קרוב להרגשה של הרגע. נראה לך מה מתאים."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-reveal-group>
          {goals.map((goal) => (
            <Link
              key={goal.slug}
              href={`/goals/${goal.slug}`}
              className="surface-card tilt-card reveal-on-scroll block rounded-[1rem] border-r-4 p-6"
              style={{ borderRightColor: goal.accent }}
            >
              <h3 className="display-title text-3xl text-ink">{goal.name}</h3>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-7 text-muted">{goal.mood}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {goal.signals.slice(0, 3).map((signal) => (
                  <span key={signal} className="tag-pill text-xs sm:text-sm">
                    {signal}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 lg:py-28">
        <SectionHeading
          eyebrow="Explore by Routine"
          title="שגרות שפשוט עובדות."
          description="כל שגרה אומרת מה לקחת, באיזה סדר, וכמה זמן זה לוקח."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-reveal-group>
          {routines.map((routine) => (
            <Link
              key={routine.slug}
              href={`/routines/${routine.slug}`}
              className="surface-card tilt-card reveal-on-scroll relative block rounded-[1rem] p-6"
            >
              <span
                className="absolute right-4 top-4 h-3 w-3 rounded-full"
                style={{ backgroundColor: routineDotColors[routine.timeOfDay] ?? "#B09880" }}
              />
              <div className="flex items-start justify-between gap-4">
                <div className="eyebrow">{routine.timeOfDay.toUpperCase()}</div>
                <div className="text-sm font-medium text-muted">{routine.pace}</div>
              </div>
              <h3 className="display-title mt-10 text-2xl text-ink sm:text-3xl">{routine.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{routine.synopsis}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#4A6741]">
                <span>לפתוח את המסלול</span>
                <span aria-hidden="true">←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
            <div className="eyebrow">Brand Story</div>
            <h2 className="display-title mt-6 text-2xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Forever הוא הבסיס.
              <br />
              סביבו נבנה מקום שלם.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              התחלנו מ-Forever כי הם יודעים לעבוד עם אלוורה כבר עשרות שנים. זה בסיס
              שקל לסמוך עליו. אבל Alowvera לא שייך רק למותג אחד. לאט ייכנסו עוד
              מוצרים ועוד שגרות. כל מוצר ירגיש כמו חלק מאותו דבר.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-reveal-group>
            {brands.map((brand) => (
              <BrandPanel key={brand.slug} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 lg:py-28">
        <SectionHeading
          eyebrow="Featured Products"
          title="המוצרים שמופיעים שוב ושוב."
          description="כל מוצר כאן נבחר כי הוא עושה משהו שמרגישים."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-reveal-group>
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="reveal-on-scroll mt-10 flex justify-center">
          <Link href="/shop" className="button-secondary">
            לכל המוצרים →
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 lg:py-28">
        <div className="grid gap-10 xl:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Journal"
              title="יומן קצר. מה מאחורי הבחירות."
              description="מוצרים, שגרות והבחירות שמאחוריהם."
            />
            <div className="grid gap-5" data-reveal-group>
              {featuredJournalEntries.map((entry) => (
                <JournalCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Curated Bundles"
              title="מארזים מוכנים. פשוט לפתוח."
              description="מוצרים שעובדים טוב יחד. בלי לחשוב יותר מדי."
            />
            <div className="grid gap-5" data-reveal-group>
              {bundles.map((bundle) => (
                <BundleCard key={bundle.slug} bundle={bundle} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
