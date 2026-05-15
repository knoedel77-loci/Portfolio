import type { AboutData } from "@/data/types";

type Props = {
  data: AboutData["interests"];
};

export default function AboutInterests({ data }: Props) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 project-section">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.12em] text-white/50">
            {data.eyebrow}
          </p>

          <h2 className="max-w-3xl font-heading text-2xl md:text-3xl">
            {data.title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            {data.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="grid rounded-xl border border-white/10 bg-white/0.025 mt-7 p-6 transition-colors hover:border-white/20 md:grid-rows-[56px_150px_auto]"
            >
              <h3 className="font-heading text-lg leading-snug">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-white/65">
                {item.text}
              </p>

              {item.questions && item.questions.length > 0 && (
                <div className="pt-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.12em] text-white/40 mt-2">
                    Questions
                  </p>

                  <div className="space-y-3">
                    {item.questions.map((question) => (
                      <p
                        key={question}
                        className="text-sm leading-relaxed text-white/80"
                      >
                        {question}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}