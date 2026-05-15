"use client";

import { useMemo, useState } from "react";
import type { ProjectInfoBlock } from "@/data/types";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  item: ProjectInfoBlock;
  index: number;
};

export default function FoundationAccordionCard({ item, index }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const paragraphs = useMemo(() => {
    return item.text
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }, [item.text]);

  const firstParagraph = paragraphs[0] || "";
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <article
      onClick={() => setIsOpen((prev) => !prev)}
      aria-expanded={isOpen}
      className="cursor-pointer rounded-2xl border hover:scale-102 min-h-98 shadow-black hover:shadow-2xl bg-background border-white/10 bg-white/0.03 p-6 md:p-7 transition-all duration-400 hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] font-mono text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="font-heading text-lg md:text-xl max-w-xl">
            {item.title}
          </h3>
        </div>

        <div className="shrink-0 text-lg text-white/70">
          {isOpen ? (
  <ChevronUp size={18} className="text-white/70" />
) : (
  <ChevronDown size={18} className="text-white/70" />
)}
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <p className="text-sm md:text-base leading-relaxed text-white/70">
          {firstParagraph}
        </p>

        {isOpen &&
          remainingParagraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="text-sm md:text-base leading-relaxed text-white/70"
            >
              {paragraph}
            </p>
          ))}
      </div>
    </article>
  );
}