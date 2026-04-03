interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "right" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "reveal-on-scroll mx-auto max-w-3xl text-center"
          : "reveal-on-scroll max-w-3xl"
      }
    >
      <div className={align === "center" ? "eyebrow justify-center" : "eyebrow"}>{eyebrow}</div>
      <h2 className="display-title mt-5 text-2xl text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{description}</p>
    </div>
  );
}
