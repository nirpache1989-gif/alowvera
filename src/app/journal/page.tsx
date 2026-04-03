import { JournalCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getJournalEntries } from "@/lib/catalog";

export default function JournalPage() {
  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Journal"
        title="מאחורי הקלעים"
        description="איך בחרנו את המוצרים, למה בנינו את השגרות ככה, ומה הרעיון מאחורי הכל. תוכן שעוזר להבין, לא רק לקנות."
        quote="לדעת יותר = לבחור טוב יותר."
      />

      <div className="journal-masonry md:columns-2" data-reveal-group>
        {getJournalEntries().map((entry) => (
          <JournalCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
