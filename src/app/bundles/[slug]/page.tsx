import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getBundle, getBundles, getProductsBySlugs } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return getBundles().map((bundle) => ({ slug: bundle.slug }));
}

export default function BundlePage({ params }: { params: { slug: string } }) {
  const bundle = getBundle(params.slug);

  if (!bundle) {
    notFound();
  }

  const products = getProductsBySlugs(bundle.productSlugs);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Bundle"
        title={bundle.name}
        description={bundle.description}
        quote={bundle.synopsis}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted">
              {formatPrice(bundle.price)}
            </span>
            {bundle.compareAtPrice ? (
              <span className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted">
                לפני {formatPrice(bundle.compareAtPrice)}
              </span>
            ) : null}
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">Why this bundle</div>
          <div className="mt-6 space-y-3">
            {bundle.benefitBullets.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1rem] bg-white/60 px-4 py-4 text-sm text-muted shadow-[0_1px_3px_rgba(44,58,46,0.06)]"
              >
                {benefit}
              </div>
            ))}
          </div>
          <Link
            href="/shop"
            className="button-primary mt-6"
          >
            לחזור לחנות
          </Link>
        </div>

        <div>
          <div className="eyebrow">Included products</div>
          <div className="mt-5 grid gap-6 md:grid-cols-2" data-product-grid data-reveal-group>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
