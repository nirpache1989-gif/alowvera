"use client";

import { useMemo, useState } from "react";

export function QuoteReveal({ quote }: { quote: string }) {
  const [shouldAnimate] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const alreadyPlayed = window.sessionStorage.getItem("alowvera-quote-reveal-played");

    if (alreadyPlayed) {
      return false;
    }

    window.sessionStorage.setItem("alowvera-quote-reveal-played", "true");
    return true;
  });
  const glyphs = useMemo(() => Array.from(quote), [quote]);

  return (
    <span className="quote-rtl inline-flex flex-wrap justify-end gap-y-1" dir="rtl">
      {glyphs.map((glyph, index) => (
        <span
          key={`${glyph}-${index}`}
          className={shouldAnimate ? "quote-glyph quote-glyph--animate" : "quote-glyph"}
          style={{ animationDelay: `${index * 28}ms` }}
        >
          {glyph === " " ? "\u00A0" : glyph}
        </span>
      ))}
    </span>
  );
}
