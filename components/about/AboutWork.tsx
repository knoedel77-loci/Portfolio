import type { AboutData } from "@/data/types";

type Props = {
  data: AboutData["work"];
};

export default function AboutWork({ data }: Props) {
  return (
    <section className="project-section mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 font-heading uppercase tracking-[0.12em] text-white/70">
        {data.eyebrow}
      </h2>

      <div className="mb-20 max-w-3xl">
        <p className="font-heading text-2xl leading-tight md:text-3xl">
          {data.title}
        </p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {data.items.map((item, index) => (
          <div
            key={item.title}
            className="grid grid-cols-[80px_1fr] items-start gap-6"
          >
            <span className="font-mono text-2xl font-extralight leading-none text-accent opacity-60">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="mb-3 font-heading text-lg">
                {item.title}
              </h3>

              <p className="max-w-2xl leading-relaxed text-white/70">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}