import { notFound } from "next/navigation";

import { GoalCard, ProductCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import {
  getGoalsBySlugs,
  getRoutine,
  getRoutines,
  getProductsBySlugs,
} from "@/lib/catalog";

export function generateStaticParams() {
  return getRoutines().map((routine) => ({ slug: routine.slug }));
}

export default function RoutinePage({ params }: { params: { slug: string } }) {
  const routine = getRoutine(params.slug);

  if (!routine) {
    notFound();
  }

  const linkedGoals = getGoalsBySlugs(routine.goalSlugs);
  const linkedProducts = getProductsBySlugs(routine.productSlugs);

  return (
    <div className="space-y-24 pb-16 lg:space-y-28">
      <PageHero
        eyebrow="Routine"
        title={routine.name}
        description={routine.description}
        quote={routine.heroQuote}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted">
              {routine.pace}
            </span>
            <span className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted">
              {routine.timeOfDay}
            </span>
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card reveal-on-scroll rounded-[1rem] p-6 sm:p-8">
          <div className="eyebrow">Steps</div>
          <div className="mt-6 space-y-4">
            {routine.steps.map((step, index) => (
              <div key={step.title} className="rounded-[1rem] bg-white/60 p-5 shadow-[0_1px_3px_rgba(44,58,46,0.06)]">
                <div className="text-xs uppercase tracking-[0.24em] text-muted">Step {index + 1}</div>
                <h2 className="display-title mt-3 text-3xl text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="eyebrow">Products in this routine</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-product-grid data-reveal-group>
              {linkedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Related goals</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2" data-reveal-group>
              {linkedGoals.map((goal) => (
                <GoalCard key={goal.slug} goal={goal} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
