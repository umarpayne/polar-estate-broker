export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="surface-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
          {copy}
        </p>
      </div>
    </section>
  );
}
