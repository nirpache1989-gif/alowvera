import Link from "next/link";

import { ProductStillLife } from "@/components/product-still-life";
import { formatPrice } from "@/lib/utils";
import type { Brand, Bundle, Goal, JournalEntry, Product, Routine } from "@/lib/types";

export function GoalCard({
  goal,
  variant = "default",
}: {
  goal: Goal;
  variant?: "default" | "tab";
}) {
  const isTab = variant === "tab";

  return (
    <Link
      href={`/goals/${goal.slug}`}
      className={
        isTab
          ? "surface-card breathing-card tilt-card reveal-on-scroll block rounded-[1rem] px-6 py-7 md:px-8 md:py-8"
          : "surface-card tilt-card reveal-on-scroll block rounded-[1rem] p-6"
      }
      style={{
        ["--breath-delay" as string]: `-${goal.slug.length * 0.35}s`,
        boxShadow: `${isTab ? `inset 4px 0 0 ${goal.accent}, ` : ""}0 1px 3px rgba(44,58,46,0.06)`,
        background: isTab
          ? `linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.64)), linear-gradient(90deg, ${goal.accent}12 0%, rgba(255,255,255,0) 34%)`
          : undefined,
      }}
    >
      <div className={isTab ? "grid gap-6 lg:grid-cols-[0.95fr_1.05fr]" : "space-y-4"}>
        <div className="space-y-4">
          <div className="eyebrow">{isTab ? "Explore by Need" : "Need"}</div>
          <h3 className={isTab ? "display-title text-3xl text-ink sm:text-4xl" : "display-title text-2xl text-ink"}>
            {goal.name}
          </h3>
          <p className="max-w-md text-sm leading-7 text-muted">{goal.mood}</p>
        </div>

        <div className="space-y-5">
          <p className="text-sm leading-7 text-muted">{goal.synopsis}</p>
          <div className="flex flex-wrap gap-2">
            {goal.signals.map((signal) => (
              <span key={signal} className="tag-pill text-xs sm:text-sm">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function RoutineCard({ routine }: { routine: Routine }) {
  return (
    <Link
      href={`/routines/${routine.slug}`}
      className="surface-card tilt-card reveal-on-scroll block rounded-[1rem] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="eyebrow">{routine.timeOfDay.toUpperCase()}</div>
        <div className="text-sm font-medium text-muted">{routine.pace}</div>
      </div>
      <h3 className="display-title mt-10 text-2xl text-ink sm:text-3xl">{routine.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{routine.synopsis}</p>
      <div className="mt-8 text-sm font-medium text-moss">לפתוח את המסלול</div>
    </Link>
  );
}

export function BrandPanel({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="surface-card tilt-card reveal-on-scroll block rounded-[1rem] p-6"
    >
      <div className="eyebrow">{brand.eyebrow}</div>
      <h3 className="display-title mt-5 text-3xl text-ink">{brand.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{brand.strapline}</p>
      <div className="mt-6 flex gap-2">
        {brand.palette.map((color) => (
          <span
            key={color}
            className="h-4 w-4 rounded-full"
            style={{ background: color, boxShadow: "0 1px 3px rgba(44,58,46,0.12)" }}
          />
        ))}
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const availabilityLabel =
    product.availability === "in-stock"
      ? "במלאי"
      : product.availability === "low-stock"
        ? "מלאי נמוך"
        : "בקרוב";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="surface-card breathing-card tilt-card product-card-shell reveal-on-scroll block overflow-hidden rounded-[1rem]"
      style={{ ["--breath-delay" as string]: `-${product.slug.length * 0.35}s` }}
    >
      <div className="p-4">
        <ProductStillLife
          title={product.name}
          subtitle={product.format}
          image={product.image}
          from={product.palette.from}
          mid={product.palette.mid}
          to={product.palette.to}
          accent={product.palette.accent}
        />
      </div>
      <div className="bg-white/72 px-6 pb-6 pt-3">
        <div className="flex items-center justify-between gap-3">
          <div className="eyebrow">{product.format}</div>
          <span className="rounded-full bg-[#F0EDE4] px-3 py-1 text-xs text-muted">{availabilityLabel}</span>
        </div>
        <h3 className="display-title mt-4 text-xl text-ink sm:text-2xl">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{product.subtitle}</p>
        <div className="mt-5 text-lg font-semibold text-ink">{formatPrice(product.price)}</div>
      </div>
    </Link>
  );
}

export function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <Link
      href={`/bundles/${bundle.slug}`}
      className="night-panel tilt-card reveal-on-scroll block rounded-[1rem] p-8 text-ink"
      style={{
        background: bundle.palette.mid
          ? `linear-gradient(180deg, ${bundle.palette.from} 0%, ${bundle.palette.mid} 48%, ${bundle.palette.to} 100%)`
          : `linear-gradient(180deg, ${bundle.palette.from} 0%, ${bundle.palette.to} 100%)`,
        boxShadow: "0 4px 12px rgba(44,58,46,0.1)",
      }}
    >
      <div className="eyebrow text-[rgba(44,58,46,0.65)]">Curated Bundle</div>
      <h3 className="display-title mt-4 text-3xl text-ink">{bundle.name}</h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(44,58,46,0.75)]">{bundle.synopsis}</p>
      <div className="mt-10 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-moss">למארז</span>
        <span className="text-lg font-semibold text-ink">{formatPrice(bundle.price)}</span>
      </div>
    </Link>
  );
}

export function JournalCard({ entry }: { entry: JournalEntry }) {
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="surface-card tilt-card reveal-on-scroll block break-inside-avoid rounded-[1rem] p-6"
    >
      <div className="eyebrow">{entry.category}</div>
      <h3 className="display-title mt-5 text-2xl leading-tight text-ink sm:text-3xl">
        {entry.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{entry.excerpt}</p>
      <div className="mt-8 flex items-center justify-between gap-3 text-sm text-muted">
        <span>לקריאה</span>
        <span>{entry.readTime}</span>
      </div>
    </Link>
  );
}
