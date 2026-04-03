import { RoutineCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getRoutines } from "@/lib/catalog";

export default function RoutinesPage() {
  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Routines"
        title="שגרות שפשוט עובדות"
        description="כל שגרה אומרת לך מה לקחת, באיזה סדר ובכמה זמן. בלי לנחש, בלי לחפש — פשוט לעקוב."
        quote="לא צריך להבין הכל. צריך פשוט להתחיל."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-reveal-group>
        {getRoutines().map((routine) => (
          <RoutineCard key={routine.slug} routine={routine} />
        ))}
      </div>
    </div>
  );
}
