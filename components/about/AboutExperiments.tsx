import type { AboutExperiments as AboutExperimentsType } from "@/data/types";

type Props = {
  experiments: AboutExperimentsType;
};

export default function AboutExperiments({ experiments }: Props) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.12em] text-white/50">
            {experiments.eyebrow}
          </p>

          <h2 className="font-heading text-3xl leading-[1.08] tracking-[-0.03em] md:text-3xl">
            {experiments.title}
          </h2>

          <p className="mt-6 max-w-6xl text-base leading-relaxed text-white/60 md:text-lg">
            {experiments.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {experiments.items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 p-6 hover:border-white/20"
            >
              <h3 className="mb-4 text-base font-medium text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}