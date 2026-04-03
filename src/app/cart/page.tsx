import { CartDetail } from "@/components/cart-detail";
import { PageHero } from "@/components/page-hero";

export default function CartPage() {
  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Cart"
        title="העגלה שלך"
        description="כאן מתרכזים כל המוצרים שבחרת. אפשר לעדכן כמויות, להוסיף עוד, או לעבור לתשלום."
        quote="כמעט שם. עוד רגע וזה בדרך אליך."
      />

      <CartDetail />
    </div>
  );
}
