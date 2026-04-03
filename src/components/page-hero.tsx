import type { ReactNode } from "react";

import { QuoteReveal } from "@/components/quote-reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  quote?: string;
  meta?: ReactNode;
}

export function PageHero({ eyebrow, title, description, quote, meta }: PageHeroProps) {
  return (
    <section className="hero-breath surface-card surface-elevated reveal-on-scroll relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
      <div className="ambient-grid absolute inset-0 opacity-45" />
      <div className="ambient-blur left-[8%] top-[12%] h-48 w-48 bg-[rgba(123,163,104,0.18)]" />
      <div className="ambient-blur bottom-[8%] right-[10%] h-56 w-56 bg-[rgba(196,164,74,0.18)]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display-title mt-5 max-w-4xl text-3xl text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{description}</p>
        </div>

        <div className="surface-dark reveal-on-scroll self-start rounded-[1.5rem] p-6">
          {quote ? (
            <p className="display-title text-2xl leading-snug text-[var(--surface-dark-text)] sm:text-3xl">
              <QuoteReveal quote={quote} />
            </p>
          ) : null}
          {meta ? <div className="page-hero-meta mt-5 border-t border-white/10 pt-5">{meta}</div> : null}
        </div>
      </div>
    </section>
  );
}
