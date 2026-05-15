import type { ProjectInfoBlock } from "@/data/types";

type ProjectDesignPrinciplesProps = {
  designPrinciples?: ProjectInfoBlock[];
};

export default function ProjectDesignPrinciples({
  designPrinciples,
}: ProjectDesignPrinciplesProps) {
  if (!designPrinciples || designPrinciples.length === 0) return null;

  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Design Principles
          </p>
          <h2 className="font-heading text-2xl md:text-3xl max-w-3xl">
            Vom theoretischen und empirischen Befund zum Systemkonzept
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70">
            Die folgenden Designprinzipien verdichten zentrale Erkenntnisse aus der theoretischen Analyse und den empirischen Usertests.

Sie bilden eine fokussierte Auswahl besonders relevanter Befunde, die sich sowohl theoretisch begründen als auch in der empirischen Untersuchung wiederfinden ließen.

In dieser Funktion dienen sie als konzeptionelle Grundlage für die Entwicklung des Systemkonzepts.
          </p>
        </div>

        <div className="space-y-4">
          {designPrinciples.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-2xl border hover:scale-102 transition-all shadow-black hover:shadow-md duration-300 border-white/10 bg-white/0.03 p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent/60">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base leading-relaxed font-roboto text-white/80 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}