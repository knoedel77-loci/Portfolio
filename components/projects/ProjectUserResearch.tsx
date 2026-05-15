"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectUserResearch({ project }: Props) {
  if (!project.userResearch) return null;

  const { intro, testA, testB } = project.userResearch;

  return (
    <section className="project-section py-50 px-6 max-w-4xl mx-auto whitespace-pre-line">
      <div className="space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            User Research
          </p>
          <h2 className="font-heading text-2xl md:text-3xl max-w-5xl">
            Empirische Untersuchung
          </h2>

          {intro && (
            <p className="mt-4 text-sm md:text-base mb-20 leading-relaxed text-white/70 max-w-2xl">
              {intro}
            </p>
          )}
        </div>

        {/* Test A */}
        {testA && (
          <ExpandableBlock
            title="Usertest A - Lernverhalten und Imagination"
            text={testA}
          />
        )}

        {/* Test B */}
        {testB && (
          <ExpandableBlock
            title="Usertest B - Interaktion mit einem Prototypen"
            text={testB}
          />
        )}
      </div>
    </section>
  );
}

/* ---------------- COMPONENT ---------------- */

function ExpandableBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);

  const paragraphs = text.split("\n\n");
  const first = paragraphs[0];
  const rest = paragraphs.slice(1).join("\n\n");

 return (
  <div className="space-y-4 max-w-3xl">
    <h3 className="font-heading text-lg md:text-xl text-white">
      {title}
    </h3>

    {/* Clickable preview row */}
    <button
      onClick={() => setOpen(!open)}
      className="group w-full text-left"
      type="button"
    >
      <div
        className={`flex items-start justify-between gap-4 transition-all duration-200 ${
          !open ? "hover:scale-[1.01] cursor-pointer" : ""
        }`}
      >
        <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
          {first}
        </p>

        <span
          className={`mt-1 shrink-0 text-white/70 transition-transform  hover:text-white duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </div>
    </button>

    {/* Expanded content */}
    {open && rest && (
      <p className="text-sm md:text-base text-white/70 leading-relaxed whitespace-pre-line">
        {rest}
      </p>
    )}
  </div>
);
}