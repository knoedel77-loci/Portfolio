import type { AboutData } from "@/data/types";

type Props = {
  data: AboutData["cv"];
};

export default function AboutCV({ data }: Props) {
  return (
    <section className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.12em] text-white/50">
          {data.eyebrow}
        </p>

        <h2 className="font-heading text-2xl md:text-3xl">
          {data.title}
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {data.items.map((item) => (
            <div
              key={item.label}
              className="grid gap-6 py-8 md:grid-cols-[0.35fr_0.65fr]"
            >
              <h3 className="font-heading text-lg">
                {item.label}
              </h3>

              <div className="space-y-2">
                {item.values.map((value) => (
                  <p
                    key={value}
                    className="text-sm leading-relaxed text-white/70"
                  >
                    {value}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}