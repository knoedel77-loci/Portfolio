import Image from "next/image";
import { ProductionContext } from "@/data/types";

type Props = {
  productionContext?: ProductionContext;
};

export default function ProjectProductionContext({ productionContext }: Props) {
  if (!productionContext) return null;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            {productionContext.title}
          </p>

          {productionContext.intro && (
            <p className="text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
              {productionContext.intro}
            </p>
          )}
        </div>

        <div className="grid gap-10 md:grid-cols-2 mb-16">
          {productionContext.items.map((item, index) => (
            <article key={item.title} className="space-y-5">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>

              {item.image.caption && (
                <p className="text-xs leading-relaxed text-white/50 min-h-10">
                  {item.image.caption}
                </p>
              )}

              <div className="grid grid-cols-[56px_1fr] gap-5 items-start">
                <span className="text-xl font-mono text-accent/60 font-extralight leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-heading text-lg md:text-xl text-white mb-3">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-sm md:text-base leading-relaxed text-white/70">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {productionContext.conclusion && (
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
              Position
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
              {productionContext.conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}