import Image from "next/image";
import type { AboutHero as AboutHeroType } from "@/data/types";

type Props = {
  hero: AboutHeroType;
};

export default function AboutHero({ hero }: Props) {
  return (
    <section className="px-6 pt-28 pb-28 md:pt-36 md:pb-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-4xl">
          <h1 className="font-heading text-3xl leading-[1.05] tracking-[-0.03em] md:text-5xl whitespace-pre-line">
            {hero.intro}
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="overflow-hidden rounded-md">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={900}
              height={1200}
              priority
              className="aspect-4/5 w-full object-cover "
            />
          </div>

          <div className="flex flex-col justify-between gap-12">
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.body}
            </p>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/40">
                Recurring interests
              </p>

              <div className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
                {hero.markers.map((marker) => (
                  <p key={marker}>{marker}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}