import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { GoalCard, ProductCard, RoutineCard } from "@/components/cards";
import { ProductStillLife } from "@/components/product-still-life";
import {
  getBrand,
  getGoalsBySlugs,
  getProduct,
  getProducts,
  getProductsBySlugs,
  getRoutinesBySlugs,
} from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const brand = getBrand(product.brandSlug);
  const linkedGoals = getGoalsBySlugs(product.goalSlugs);
  const linkedRoutines = getRoutinesBySlugs(product.routineSlugs);
  const pairings = getProductsBySlugs(product.pairings);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
        <ProductStillLife
          title={product.name}
          subtitle={product.glowNote}
          image={product.image}
          from={product.palette.from}
          mid={product.palette.mid}
          to={product.palette.to}
          accent={product.palette.accent}
          variant="hero"
        />

        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.26em] text-muted">
            {brand?.name ?? "Brand"} / {product.format}
          </div>
          <h1 className="display-title mt-5 text-5xl leading-tight text-ink sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">{product.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-semibold text-ink">{formatPrice(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-lg text-muted/70 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
            <span className="rounded-full bg-[#F0EDE4] px-3 py-2 text-sm text-muted">
              {product.availability === "in-stock"
                ? "במלאי"
                : product.availability === "low-stock"
                  ? "מלאי נמוך"
                  : "בקרוב"}
            </span>
          </div>

          <p className="mt-6 text-sm leading-8 text-muted">{product.whyItLivesHere}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton
              slug={product.slug}
              disabled={product.availability === "coming-soon"}
            />
            <Link
              href="/shop"
              className="button-secondary"
            >
              חזרה לחנות
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <MetaBlock label="פורמט" value={product.format} />
            <MetaBlock label="גודל" value={product.size} />
            <MetaBlock label="Glow note" value={product.glowNote} />
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Why this lives here</div>
            <p className="mt-5 text-sm leading-8 text-muted">{product.description}</p>
          </div>

          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Ingredients</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="tag-pill"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Usage</div>
            <div className="mt-5 space-y-3">
              {product.usage.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1rem] bg-white/60 px-4 py-4 text-sm text-muted shadow-[0_1px_3px_rgba(44,58,46,0.06)]"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="eyebrow">Goals</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-reveal-group>
              {linkedGoals.map((goal) => (
                <GoalCard key={goal.slug} goal={goal} />
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Routines</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-reveal-group>
              {linkedRoutines.map((routine) => (
                <RoutineCard key={routine.slug} routine={routine} />
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Pairings</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-product-grid data-reveal-group>
              {pairings.map((pairing) => (
                <ProductCard key={pairing.slug} product={pairing} />
              ))}
            </div>
          </div>

          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Questions</div>
            <div className="mt-5 space-y-4">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1rem] bg-white/60 p-5 shadow-[0_1px_3px_rgba(44,58,46,0.06)]">
                  <h2 className="text-sm font-semibold text-ink">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] bg-white/60 px-4 py-4 shadow-[0_1px_3px_rgba(44,58,46,0.06)]">
      <div className="text-xs uppercase tracking-[0.22em] text-muted">{label}</div>
      <div className="mt-2 text-sm font-medium text-ink">{value}</div>
    </div>
  );
}
