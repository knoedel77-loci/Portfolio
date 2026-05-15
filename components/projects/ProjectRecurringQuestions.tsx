"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectRecurringQuestions({ project }: Props) {
  if (!project.recurringQuestions?.items?.length) return null;

  const section = project.recurringQuestions;
  const items = section.items;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const closeOverlay = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOverlay();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          {section.eyebrow && (
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
              {section.eyebrow}
            </p>
          )}

          <h2 className="font-heading text-3xl md:text-4xl">
            {section.title}
          </h2>

          {section.intro && (
            <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
              {section.intro}
            </p>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => {
            const image = item.images?.[0];

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.03] text-left transition-all duration-500 hover:border-white/25 hover:bg-white/[0.06]"
              >
                {image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={700}
                      className="h-full w-full object-cover transition transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex h-[240px] flex-col p-5">
                  <p className="text-xs tracking-[0.2em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 min-h-[48px] text-xs uppercase leading-relaxed tracking-[0.16em] text-white/40">
                    {item.context}
                  </p>

                  <h3 className="mt-4 min-h-[64px] font-heading text-xl leading-snug md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-auto min-h-[56px] line-clamp-2 text-sm leading-relaxed text-white/60">
                    {item.question}
                  </p>
                </div>
              </button>
            );
          })}

          {/* Coming soon card */}
          <div className="flex min-h-[520px] flex-col justify-between rounded-md border border-dashed border-white/10 bg-white/[0.015] p-5 text-left">
            <div>
              <p className="text-xs tracking-[0.2em] text-white/25">
                {String(items.length + 1).padStart(2, "0")}
              </p>

              <p className="mt-4 text-xs uppercase leading-relaxed tracking-[0.16em] text-white/30">
                More to come
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl leading-snug text-white/45 md:text-2xl">
                Weitere Projekte entstehen noch.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
                
              </p>
            </div>
          </div>
        </div>

        {section.closing && (
          <div className="mt-20 rounded-md border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
              {section.closing}
            </p>
          </div>
        )}
      </div>

      {activeItem && activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 px-6 py-6 backdrop-blur transition-opacity duration-500 md:px-10 md:py-8 transition-all">
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="mb-6 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </p>

                <h3 className="mt-2 font-heading text-2xl md:text-4xl">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeOverlay}
                className="rounded-md border border-white/20 px-4 py-2 text-sm text-white/70 transition-all duration-500 hover:border-white/50 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="grid min-h-0 flex-1 gap-8 overflow-y-auto md:grid-cols-[1.15fr_0.85fr] md:overflow-hidden">
              <div
                className="space-y-4 overflow-y-auto pr-0 md:pr-4"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.12) transparent",
                }}
              >
                {activeItem.images?.map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className="overflow-hidden rounded-md border border-white/10"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1400}
                      height={1000}
                      className="h-auto w-full object-contain"
                    />

                    {image.caption && (
                      <p className="px-4 pb-4 pt-3 text-xs leading-relaxed text-white/45">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex min-h-0 flex-col gap-8">
                <div
                  className="min-h-0 overflow-y-auto pb-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(255,255,255,0.12) transparent",
                  }}
                >
                  <div>
                    {activeItem.context && (
                      <p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/40">
                        {activeItem.context}
                      </p>
                    )}

                    <p className="font-heading text-2xl leading-snug text-white/90 md:text-3xl">
                      {activeItem.question}
                    </p>

                    <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
                      {activeItem.text}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-white/10 pt-6 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/35">
                      Previous
                    </p>

                    
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/35">
                      Next
                    </p>

                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}