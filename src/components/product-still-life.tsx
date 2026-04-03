import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProductStillLifeProps {
  title: string;
  subtitle: string;
  image?: string;
  from: string;
  to: string;
  accent: string;
  mid?: string;
  variant?: "hero" | "card";
}

export function ProductStillLife({
  title,
  subtitle,
  image,
  from,
  to,
  accent,
  mid,
  variant = "card",
}: ProductStillLifeProps) {
  const isHero = variant === "hero";
  const gradient = mid
    ? `linear-gradient(160deg, ${from} 0%, ${mid} 50%, ${to} 100%)`
    : `linear-gradient(160deg, ${from} 0%, ${to} 100%)`;

  return (
    <div
      className={cn(
        "product-figure grain relative overflow-hidden rounded-[1rem]",
        isHero ? "aspect-[4/3] min-h-[22rem] sm:min-h-[26rem]" : "aspect-[4/5]",
      )}
      style={{
        background: gradient,
        boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.16), inset 0 0 40px ${accent}18`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.52),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.55),transparent_26%)]" />

      <div
        className={cn(
          "absolute inset-0 z-[1]",
          isHero ? "p-6 sm:p-8 lg:p-10" : "p-6",
        )}
      >
        <div className="relative h-full w-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              priority={isHero}
              sizes={isHero ? "(min-width: 1024px) 34rem, 92vw" : "(min-width: 1280px) 20rem, (min-width: 768px) 33vw, 92vw"}
              className="product-figure__photo object-contain"
            />
          ) : (
            <div
              className={cn(
                "product-figure__image absolute left-1/2 top-1/2 rounded-[2rem_2rem_1.15rem_1.15rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.12))] backdrop-blur-sm",
                isHero
                  ? "h-[72%] w-[45%] -translate-x-1/2 -translate-y-[46%]"
                  : "h-[70%] w-[58%] -translate-x-1/2 -translate-y-[44%]",
              )}
              style={{
                boxShadow: `0 18px 38px ${accent}22, inset 0 0 0 1px rgba(255,255,255,0.28)`,
              }}
            >
              <div className="absolute inset-x-[18%] top-[9%] h-[14%] rounded-full bg-white/32" />
              <div className="absolute inset-x-[12%] top-[18%] bottom-[24%] rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "product-label-glass absolute left-1/2 z-10 -translate-x-1/2 rounded-lg px-4 py-2 text-center",
          isHero ? "bottom-4 min-w-[14rem]" : "bottom-4 min-w-[11.5rem]",
        )}
      >
        <div className="display-title text-lg text-ink">{title}</div>
        <div className="mt-1 text-xs leading-5 text-muted">{subtitle}</div>
      </div>

      <div className="ambient-blur bottom-[8%] right-[10%] h-40 w-40" style={{ background: accent }} />
      <div
        className="ambient-blur left-[10%] top-[10%] h-32 w-32"
        style={{ background: "rgba(255,255,255,0.45)" }}
      />
    </div>
  );
}
