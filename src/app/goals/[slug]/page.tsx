import Link from "next/link";
import { notFound } from "next/navigation";

import { JournalCard, ProductCard, RoutineCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import {
  getGoal,
  getGoals,
  getJournalForGoal,
  getProductsBySlugs,
  getRoutinesBySlugs,
} from "@/lib/catalog";

export function generateStaticParams() {
  return getGoals().map((goal) => ({ slug: goal.slug }));
}

export default function GoalPage({ params }: { params: { slug: string } }) {
  const goal = getGoal(params.slug);

  if (!goal) {
    notFound();
  }

  const linkedProducts = getProductsBySlugs(goal.productSlugs);
  const linkedRoutines = getRoutinesBySlugs(goal.routineSlugs);
  const linkedJournal = getJournalForGoal(goal.slug);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Goal"
        title={goal.name}
        description={goal.introduction}
        quote={goal.synopsis}
        meta={
          <div className="flex flex-wrap gap-2">
            {goal.signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted"
              >
                {signal}
              </span>
            ))}
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">Signals</div>
          <h2 className="display-title mt-6 text-4xl text-ink">מה תמצא כאן</h2>
          <p className="mt-4 text-sm leading-8 text-muted">
            בחרנו את המוצרים והשגרות שהכי מתאימים לצורך הזה. הכל כאן, מסודר ומוכן — פשוט
            לבחור ולהתחיל.
          </p>
          <div className="mt-6 space-y-3">
            {goal.signals.map((signal) => (
              <div key={signal} className="rounded-[1rem] bg-white/60 px-4 py-4 text-sm text-muted shadow-[0_1px_3px_rgba(44,58,46,0.06)]">
                {signal}
              </div>
            ))}
          </div>
          <Link
            href="/shop"
            className="button-secondary mt-6"
          >
            לפתוח את החנות עם פילטרים
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <div className="eyebrow">Linked routines</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-reveal-group>
              {linkedRoutines.map((routine) => (
                <RoutineCard key={routine.slug} routine={routine} />
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Linked products</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-product-grid data-reveal-group>
              {linkedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {linkedJournal.length ? (
        <section className="space-y-5">
          <div className="eyebrow">Journal for this goal</div>
          <div className="journal-masonry md:columns-2 xl:columns-3" data-reveal-group>
            {linkedJournal.map((entry) => (
              <JournalCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
