import Link from "next/link";
import { notFound } from "next/navigation";

import { GoalCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getGoalsBySlugs, getJournalEntries, getJournalEntry } from "@/lib/catalog";

export function generateStaticParams() {
  return getJournalEntries().map((entry) => ({ slug: entry.slug }));
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  const entry = getJournalEntry(params.slug);

  if (!entry) {
    notFound();
  }

  const linkedGoals = getGoalsBySlugs(entry.relatedGoalSlugs);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow={entry.category}
        title={entry.title}
        description={entry.excerpt}
        quote={`${entry.readTime} קריאה`}
      />

      <section className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
        <article className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="space-y-8">
            {entry.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="display-title text-3xl text-ink">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{section.body}</p>
              </section>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Related goals</div>
            <div className="mt-5 space-y-5" data-reveal-group>
              {linkedGoals.map((goal) => (
                <GoalCard key={goal.slug} goal={goal} />
              ))}
            </div>
          </div>

          <div className="surface-card reveal-on-scroll rounded-[1rem] p-6">
            <div className="eyebrow">Continue exploring</div>
            <p className="mt-4 text-sm leading-7 text-muted">
              סיימת לקרוא? יש עוד הרבה לגלות — שגרות, מוצרים ומסלולים שמחכים לך.
            </p>
            <Link
              href="/"
              className="button-secondary mt-5"
            >
              לחזור לאטלס
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
