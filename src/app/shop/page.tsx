import { PageHero } from "@/components/page-hero";
import { ShopBrowser } from "@/components/shop-browser";
import { getBrands, getGoals, getProducts, getRoutines } from "@/lib/catalog";

export default function ShopPage() {
  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Shop"
        title="החנות הערוכה"
        description="כל המוצרים במקום אחד. אפשר לסנן לפי מותג, צורך או שגרה — או פשוט לגלול ולגלות."
        quote="הכל כאן. בלי לחץ, בלי שעון."
      />

      <ShopBrowser
        products={getProducts()}
        brands={getBrands()}
        goals={getGoals()}
        routines={getRoutines()}
      />
    </div>
  );
}
