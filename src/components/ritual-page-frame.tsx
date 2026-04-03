"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function RitualPageFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInitialRender = useRef(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const page = pageRef.current;

    if (page) {
      page.classList.remove("page-reveal-active");
      void page.offsetWidth;
      page.classList.add("page-reveal-active");
    }

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (!overlay) {
      return;
    }

    overlay.classList.remove("page-turn-overlay-active");
    void overlay.offsetWidth;
    overlay.classList.add("page-turn-overlay-active");

    const timeoutId = window.setTimeout(() => {
      overlay.classList.remove("page-turn-overlay-active");
    }, 460);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <>
      <div ref={overlayRef} className="page-turn-overlay" />
      <div ref={pageRef} className="page-reveal">
        {children}
      </div>
    </>
  );
}
