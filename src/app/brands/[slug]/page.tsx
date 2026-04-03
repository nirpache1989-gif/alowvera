import { notFound } from "next/navigation";

import { GoalCard, ProductCard, RoutineCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import {
  getBrand,
  getBrandProducts,
  getBrands,
  getGoalsBySlugs,
  getRoutinesBySlugs,
} from "@/lib/catalog";

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = getBrandProducts(brand.slug);
  const featuredGoals = getGoalsBySlugs(brand.featuredGoalSlugs);
  const featuredRoutines = getRoutinesBySlugs(brand.featuredRoutineSlugs);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow={brand.eyebrow}
        title={brand.name}
        description={brand.story}
        quote={brand.strapline}
        meta={
          <div className="flex flex-wrap gap-2">
            {brand.values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted"
              >
                {value}
              </span>
            ))}
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">Collection note</div>
          <h2 className="display-title mt-5 text-4xl text-ink">{brand.collectionLabel}</h2>
          <p className="mt-4 text-sm leading-8 text-muted">{brand.description}</p>

          <div className="mt-6 flex gap-3">
            {brand.palette.map((color) => (
              <span
                key={color}
                className="h-10 w-10 rounded-full border border-white/70 shadow-[0_10px_24px_rgba(32,24,18,0.08)]"
                style={{ background: color }}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <div className="eyebrow">Products</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-product-grid data-reveal-group>
              {brandProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="eyebrow">Goals</div>
              <div className="mt-5 space-y-5" data-reveal-group>
                {featuredGoals.map((goal) => (
                  <GoalCard key={goal.slug} goal={goal} />
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow">Routines</div>
              <div className="mt-5 space-y-5" data-reveal-group>
                {featuredRoutines.map((routine) => (
                  <RoutineCard key={routine.slug} routine={routine} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
