"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectStorySlide } from "@/data/types";

type Props = {
  slides: ProjectStorySlide[];
};

type SlideState = "prev" | "active" | "next" | "hidden";

export default function ProjectStoryCarousel({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCarouselInView, setIsCarouselInView] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const shouldAutoplayRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCarouselInView(entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isCarouselInView) return;

    setIsExpanded(false);
    setIsMuted(true);

    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.pause();
    }
  }, [isCarouselInView, currentIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const activeSlide = slides[currentIndex];
    const activeVideo = videoRefs.current[currentIndex];

    if (!activeVideo) {
      shouldAutoplayRef.current = false;
      return;
    }

    if (!isCarouselInView) {
      activeVideo.pause();
      shouldAutoplayRef.current = false;
      return;
    }

    if (shouldAutoplayRef.current && activeSlide?.type === "video") {
      const playPromise = activeVideo.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay des aktiven Videos wurde blockiert:", error);
        });
      }
    }

    shouldAutoplayRef.current = false;
  }, [currentIndex, slides, isCarouselInView]);

  if (!slides || slides.length === 0) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < slides.length - 1;
  const currentSlide = slides[currentIndex];

  function goToNext() {
    if (!hasNext) return;
    shouldAutoplayRef.current = true;
    setCurrentIndex((prev) => prev + 1);
  }

  function goToPrev() {
    if (!hasPrev) return;
    shouldAutoplayRef.current = true;
    setCurrentIndex((prev) => prev - 1);
  }

  function goToSlide(index: number) {
    if (index === currentIndex) return;
    shouldAutoplayRef.current = true;
    setCurrentIndex(index);
  }

  function toggleMute() {
    setIsMuted((prev) => !prev);
  }

  function toggleExpanded() {
    setIsExpanded((prev) => !prev);
  }

  function getSlideState(index: number): SlideState {
    if (index === currentIndex) return "active";
    if (index === currentIndex - 1) return "prev";
    if (index === currentIndex + 1) return "next";
    return "hidden";
  }

  function getSlideClasses(state: SlideState) {
    const base =
      "absolute top-1/2 left-1/2 aspect-[4/5] overflow-hidden rounded-2xl bg-background transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

    if (state === "active") {
      return `${base} z-30 -translate-x-1/2 -translate-y-1/2 opacity-100 blur-0 shadow-5xl ${
        isExpanded
          ? "w-[min(90vw,700px)] max-w-none scale-100"
          : "w-[70%] max-w-[520px] scale-100 hover:scale-[1.02]"
      }`;
    }

    if (state === "prev") {
      return `${base} w-[70%] max-w-[520px] z-10 -translate-x-[120%] -translate-y-1/2 scale-[0.82] opacity-35 blur-[3px]`;
    }

    if (state === "next") {
      return `${base} w-[70%] max-w-[520px] z-10 translate-x-[20%] -translate-y-1/2 scale-[0.82] opacity-35 blur-[3px]`;
    }

    return `${base} w-[70%] max-w-[520px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 scale-[0.72] opacity-0 blur-[6px]`;
  }

  function renderMedia(
    slide: ProjectStorySlide,
    index: number,
    state: SlideState
  ) {
    if (slide.type === "image") {
      return (
        <img
          src={slide.src}
          alt={slide.alt || ""}
          className="block h-full w-full object-cover"
        />
      );
    }

    const isActive = state === "active";

    return (
      <video
        ref={(el) => {
          videoRefs.current[index] = el;
        }}
        src={slide.src}
        playsInline
        loop
        controls={false}
        muted={isActive ? isMuted : true}
        preload="metadata"
        className="block h-full w-full object-cover"
      />
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={`relative mx-auto w-full transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExpanded ? "max-w-1100" : "max-w-105"
        }`}
      >
        <div
          className={`relative overflow-visible transition-all duration-900] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isExpanded ? "h-[85vh]" : "h-140"
          }`}
        >
          {slides.map((slide, index) => {
            const state = getSlideState(index);
            const isActive = state === "active";

            return (
              <div key={index} className={getSlideClasses(state)}>
                {renderMedia(slide, index, state)}

                {isActive && slide.type === "video" && (
                  <div className="pointer-events-none absolute inset-0 z-40 flex items-end justify-end p-4">
                    <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/45 px-2 py-2 backdrop-blur-sm">
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                      >
                        {isMuted ? "🔇" : "🔊"}
                      </button>

                      <button
                        type="button"
                        onClick={toggleExpanded}
                        aria-label={isExpanded ? "Collapse slide" : "Expand slide"}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                      >
                        ⛶
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            disabled={!hasPrev}
            className={`absolute left-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/85 ${
              !hasPrev ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            ←
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            disabled={!hasNext}
            className={`absolute right-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/85 ${
              !hasNext ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-4 min-h-18 text-center">
        <p className="text-xs uppercase tracking-[0.18em] opacity-50">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </p>

        {currentSlide.caption && (
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed opacity-80">
            {currentSlide.caption}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}