import Link from "next/link";

export default function NotFound() {
  return (
    <section className="surface-card rounded-[2.5rem] px-6 py-14 text-center sm:px-10">
      <div className="eyebrow justify-center">Lost, softly</div>
      <h1 className="display-title mt-6 text-5xl text-ink">העמוד לא נמצא</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
        אולי המסלול הזה עדיין לא פורסם, ואולי שווה להתחיל שוב דרך הצרכים או השגרות.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white"
      >
        חזרה לבית
      </Link>
    </section>
  );
}
