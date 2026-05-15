"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/types";

type Props = {
  project: Project;
};

function FormationMedia({ item }: { item: any }) {
  const images = item.images ?? (item.image ? [item.image] : []);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const currentImage = images[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1200}
          height={900}
          className="h-auto w-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur"
            >
              ›
            </button>

            <div className="absolute bottom-3 right-3 rounded-full bg-black/20 px-2 py-1 text-xs text-white/80">
              {activeIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>

      {currentImage.caption && (
        <p className="px-4 pb-4 pt-3 text-xs leading-relaxed text-white/45">
          {currentImage.caption}
        </p>
      )}
    </div>
  );
}

export default function ProjectFormations({ project }: Props) {
  if (!project.formations) return null;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Formations
          </p>

          <h2 className="font-heading text-2xl md:text-3xl">
            {project.formations.title}
          </h2>

          {project.formations.intro && (
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
              {project.formations.intro}
            </p>
          )}
        </div>

        <div className="space-y-20">
          {project.formations.items.map((item, index) => {
            const isMirrored = index % 2 === 1;

            return (
              <article
                key={item.title}
                className="grid gap-6 md:grid-cols-2 md:items-start"
              >
                <div className={isMirrored ? "md:order-2" : ""}>
                  <FormationMedia item={item} />
                </div>

                <div className={isMirrored ? "md:order-1" : ""}>
                  <p className="mb-3 text-xs tracking-[0.2em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-heading text-xl md:text-2xl">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-2 text-sm text-white/45">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>

                  {item.parameters && item.parameters.length > 0 && (
                    <div className="mt-6 grid gap-2">
                      {item.parameters.map((param) => (
                        <div
                          key={param.label}
                          className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs"
                        >
                          <p className="mb-1 uppercase tracking-[0.16em] text-white/35">
                            {param.label}
                          </p>
                          <p className="text-white/70">{param.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}