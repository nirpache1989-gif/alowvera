"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AmbientController() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const groups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-group]"),
    );

    groups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement && child.classList.contains("reveal-on-scroll")) {
          child.style.setProperty("--reveal-delay", `${index * 80}ms`);
        }
      });
    });

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    );

    revealTargets.forEach((target) => observer.observe(target));

    if (prefersReducedMotion) {
      return () => {
        observer.disconnect();
      };
    }

    let activeTiltCard: HTMLElement | null = null;

    const resetTilt = (element: HTMLElement | null) => {
      if (!element) {
        return;
      }

      element.style.setProperty("--tilt-rotate-x", "0deg");
      element.style.setProperty("--tilt-rotate-y", "0deg");
      element.style.setProperty("--tilt-lift", "0px");
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof HTMLElement ? event.target.closest(".tilt-card") : null;

      if (!(target instanceof HTMLElement)) {
        resetTilt(activeTiltCard);
        activeTiltCard = null;
        return;
      }

      if (activeTiltCard && activeTiltCard !== target) {
        resetTilt(activeTiltCard);
      }

      activeTiltCard = target;

      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((event.clientX - centerX) / rect.width) * 2;
      const rotateX = ((centerY - event.clientY) / rect.height) * 2;

      target.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
      target.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
      target.style.setProperty("--tilt-lift", "-6px");
    };

    const handlePointerLeave = () => {
      resetTilt(activeTiltCard);
      activeTiltCard = null;
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pathname]);

  return null;
}
