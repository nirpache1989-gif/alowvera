"use client";

import Link from "next/link";
import { useState } from "react";

import { ProductCard } from "@/components/cards";
import type { Brand, Goal, Product, Routine } from "@/lib/types";

interface ShopBrowserProps {
  products: Product[];
  brands: Brand[];
  goals: Goal[];
  routines: Routine[];
}

export function ShopBrowser({ products, brands, goals, routines }: ShopBrowserProps) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [goal, setGoal] = useState("all");
  const [routine, setRoutine] = useState("all");
  const [availability, setAvailability] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !search ||
      `${product.name} ${product.subtitle} ${product.description}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesBrand = brand === "all" || product.brandSlug === brand;
    const matchesGoal = goal === "all" || product.goalSlugs.includes(goal);
    const matchesRoutine = routine === "all" || product.routineSlugs.includes(routine);
    const matchesAvailability =
      availability === "all" || product.availability === availability;

    return matchesSearch && matchesBrand && matchesGoal && matchesRoutine && matchesAvailability;
  });

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
      <aside className="surface-card reveal-on-scroll sticky top-28 h-fit rounded-[1rem] p-6">
        <div className="eyebrow">Filters</div>
        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-ink">חיפוש</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-[rgba(44,58,46,0.12)] bg-white/80 px-4 py-3 text-sm text-ink outline-none"
              placeholder="אלוורה, reset, glow..."
            />
          </label>

          <FilterSelect
            label="מותג"
            value={brand}
            onChange={setBrand}
            options={[
              { value: "all", label: "כל המותגים" },
              ...brands.map((item) => ({ value: item.slug, label: item.name })),
            ]}
          />

          <FilterSelect
            label="צורך"
            value={goal}
            onChange={setGoal}
            options={[
              { value: "all", label: "כל הצרכים" },
              ...goals.map((item) => ({ value: item.slug, label: item.name })),
            ]}
          />

          <FilterSelect
            label="שגרה"
            value={routine}
            onChange={setRoutine}
            options={[
              { value: "all", label: "כל השגרות" },
              ...routines.map((item) => ({ value: item.slug, label: item.name })),
            ]}
          />

          <FilterSelect
            label="זמינות"
            value={availability}
            onChange={setAvailability}
            options={[
              { value: "all", label: "הכול" },
              { value: "in-stock", label: "במלאי" },
              { value: "low-stock", label: "מלאי נמוך" },
              { value: "coming-soon", label: "בקרוב" },
            ]}
          />
        </div>
      </aside>

      <div>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm text-muted">נמצאו {filteredProducts.length} מוצרים</div>
            <h2 className="display-title mt-2 text-2xl text-ink sm:text-4xl">המדף הערוך</h2>
          </div>

          <Link href="/" className="button-secondary text-sm">
            חזרה לאטלס
          </Link>
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-product-grid data-reveal-group>
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-[1rem] p-10 text-center">
            <h3 className="display-title text-3xl text-ink">לא מצאנו התאמה</h3>
            <p className="mt-3 text-muted">
              נסה לנקות פילטר אחד או לחזור למסלולי הצורך והשגרה כדי להתחיל מזווית אחרת.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-[rgba(44,58,46,0.12)] bg-white/80 px-4 py-3 text-sm text-ink outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
