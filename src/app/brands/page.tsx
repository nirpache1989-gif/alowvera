import { BrandPanel } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getBrands } from "@/lib/catalog";

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Brands"
        title="המותגים שלנו"
        description="כל מותג ב-Alowvera נבחר כי הוא עושה משהו מצוין. Forever מביא את הבסיס, Atelier מביא את הרגעים שביניהם."
        quote="שני מותגים. כיוון אחד. הגוף שלך."
      />

      <div className="grid gap-6 md:grid-cols-2" data-reveal-group>
        {brands.map((brand) => (
          <BrandPanel key={brand.slug} brand={brand} />
        ))}
      </div>
    </div>
  );
}
