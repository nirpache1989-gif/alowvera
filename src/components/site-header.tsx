"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useCart } from "@/components/cart-provider";
import { getSiteSettings } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const site = getSiteSettings();
  const navRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateIndicator = () => {
      const currentItem = site.navigation.find((item) =>
        item.href === "/"
          ? pathname === "/"
          : pathname === item.href || pathname.startsWith(`${item.href}/`),
      );

      const activeNode = currentItem ? itemRefs.current[currentItem.href] : null;
      const container = navRef.current;
      const indicator = indicatorRef.current;

      if (!activeNode || !container || !indicator) {
        indicator?.style.setProperty("opacity", "0");
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const linkRect = activeNode.getBoundingClientRect();

      indicator.style.setProperty("opacity", "1");
      indicator.style.setProperty("width", `${Math.max(linkRect.width - 28, 36)}px`);
      indicator.style.setProperty(
        "transform",
        `translateX(${linkRect.left - containerRect.left + 14}px)`,
      );
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname, site.navigation]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "hero-glass mx-auto flex max-w-[1120px] items-center justify-between gap-4 rounded-[1.75rem] px-4 py-3 sm:px-6",
          isScrolled && "shadow-[0_12px_32px_rgba(44,58,46,0.08)]",
        )}
      >
        <Link href="/" className="group min-w-fit">
          <div className="display-title latin-display text-[1.8rem] text-ink sm:text-[2rem]">
            ALOWVERA
          </div>
          <div
            className="text-[11px] uppercase tracking-[0.15em] text-muted"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Atlas of Rituals
          </div>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden flex-1 items-center justify-center gap-2 lg:flex"
        >
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute -bottom-0.5 h-px bg-[linear-gradient(90deg,rgba(196,164,74,0),rgba(196,164,74,1),rgba(196,164,74,0))] transition-all duration-300 ease-out"
            style={{ opacity: 0 }}
          />
          {site.navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(node) => {
                  itemRefs.current[item.href] = node;
                }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted",
                  active
                    ? "bg-moss text-white shadow-[0_10px_24px_rgba(74,103,65,0.18)]"
                    : "hover:bg-white/75 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-fit items-center gap-2">
          <Link
            href="/cart"
            className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-ink shadow-[0_1px_3px_rgba(44,58,46,0.06)] hover:shadow-[0_4px_12px_rgba(44,58,46,0.1)]"
          >
            <CartIcon />
            <span className="hidden sm:inline">עגלה</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-moss px-1.5 text-[11px] font-semibold text-white">
              {itemCount}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-ink shadow-[0_1px_3px_rgba(44,58,46,0.06)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "לסגור תפריט" : "לפתוח תפריט"}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(44,58,46,0.12)] backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="לסגור תפריט"
          className="absolute inset-0"
          onClick={() => setIsMenuOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] flex-col bg-bg px-6 pb-8 pt-24 shadow-[0_20px_60px_rgba(44,58,46,0.12)] transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8">
            <div className="display-title text-3xl text-ink">ALOWVERA</div>
            <div
              className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Atlas of Rituals
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-2">
            {site.navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base text-ink",
                    active ? "bg-moss text-white" : "bg-white/60 text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-4 text-sm text-ink"
          >
            <span>לעגלה</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-moss px-2 text-xs font-semibold text-white">
              {itemCount}
            </span>
          </Link>
        </aside>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 4H5L7.4 15.2C7.58 16.01 8.29 16.58 9.12 16.58H18.3C19.09 16.58 19.78 16.07 20.01 15.31L21.7 9.7C21.99 8.76 21.29 7.8 20.3 7.8H6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.3" cy="19.3" r="1.2" fill="currentColor" />
      <circle cx="18.1" cy="19.3" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={open ? "M6 6L18 18" : "M4 7H20"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d={open ? "M18 6L6 18" : "M4 12H20"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {!open ? (
        <path d="M4 17H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}
