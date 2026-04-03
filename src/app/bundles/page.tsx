import { BundleCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getBundles } from "@/lib/catalog";

export default function BundlesPage() {
  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Bundles"
        title="מארזים מוכנים"
        description="מוצרים שעובדים ביחד, ארוזים ומוכנים. לפתוח, להתחיל, ולתת לגוף לעשות את שלו."
        quote="לא צריך לבחור. כבר בחרנו בשבילך."
      />

      <div className="grid gap-6 md:grid-cols-2" data-reveal-group>
        {getBundles().map((bundle) => (
          <BundleCard key={bundle.slug} bundle={bundle} />
        ))}
      </div>
    </div>
  );
}
