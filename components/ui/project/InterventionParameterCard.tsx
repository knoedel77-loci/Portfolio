"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ProjectInterventionParameter } from "@/data/types";

type Props = {
  item: ProjectInterventionParameter;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export default function InterventionParameterCard({
  item,
  index,
  isOpen,
  onToggle,
}: Props) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const media = item.media || [];
  const currentMedia = media[mediaIndex];

  const showStructuredText =
    item.observation || item.behaviour || item.sensitiveRange;

  const goPrev = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMediaIndex((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <article
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`cursor-pointer rounded-2xl border border-white/10 bg-white/3 p-5 md:p-6 transition-all duration-300 ease-out hover:border-white/20 hover:shadow-lg hover:shadow-black ${
          isOpen ? "" : "hover:-translate-y-1 hover:scale-[1.01]"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] font-mono text-accent/70">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h4 className="font-heading text-base md:text-lg text-white">
              {item.title}
            </h4>
          </div>

          <div className="shrink-0 text-white/60">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        {/* collapsed text */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
          }`}
        >
          {item.text && (
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {item.text}
            </p>
          )}
        </div>

        {/* expanded content */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen
              ? "mt-5 max-h-300 opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            
            {/* text */}
            <div className="space-y-5">
              {showStructuredText ? (
                <>
                  {item.observation && (
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                        Beobachtung
                      </p>
                      <p className="text-sm leading-relaxed text-white/70">
                        {item.observation}
                      </p>
                    </div>
                  )}

                  {item.behaviour && (
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                        Verhalten im Prozess
                      </p>
                      <p className="text-sm leading-relaxed text-white/70">
                        {item.behaviour}
                      </p>
                    </div>
                  )}

                  {item.sensitiveRange && (
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                        Empfindlicher Bereich
                      </p>
                      <p className="text-sm leading-relaxed text-white/70">
                        {item.sensitiveRange}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                item.detail && (
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.detail}
                  </p>
                )
              )}
            </div>

            {/* image */}
            {currentMedia && (
              <div className="self-start">
                <div
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-transparent cursor-zoom-in"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    width={900}
                    height={700}
                    className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                  />

                  {media.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/70 hover:text-white"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/70 hover:text-white"
                      >
                        <ChevronRight size={16} />
                      </button>

                      <p className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white/60">
                        {currentMedia.group && (
                          <span className="mr-2">
                            {currentMedia.group}
                          </span>
                        )}
                        {mediaIndex + 1}/{media.length}
                      </p>
                    </>
                  )}
                </div>

                {currentMedia.caption && (
                  <p className="mt-3 text-xs leading-relaxed text-white/50">
                    {currentMedia.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
{/* LIGHTBOX */}
{isLightboxOpen && currentMedia && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
    onClick={() => setIsLightboxOpen(false)}
  >
    <div
      className="relative w-full max-w-3xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="relative mx-auto w-fit max-w-full overflow-hidden"
        style={{
          borderRadius: "0.75rem",
          clipPath: "inset(0 round 0.75rem)",
        }}
      >
        <Image
          src={currentMedia.src}
          alt={currentMedia.alt}
          width={1400}
          height={900}
          className="block max-h-[70vh] max-w-full object-contain"
        />

        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white/80 hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white/80 hover:text-white"
            >
              <ChevronRight size={24} />
            </button>

            <p className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white/60">
              {currentMedia.group && (
                <span className="mr-2">{currentMedia.group}</span>
              )}
              {mediaIndex + 1}/{media.length}
            </p>
          </>
        )}
      </div>

      {currentMedia.caption && (
        <div className="mx-auto mt-3 max-w-xl">
          <p className="text-xs leading-relaxed text-left text-white/50">
            {currentMedia.caption}
          </p>
        </div>
      )}
    </div>
  </div>
)}
    </>
  );
}