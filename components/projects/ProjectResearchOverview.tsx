import Image from "next/image";
import { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectResearchOverview({ project }: Props) {
  if (!project.researchOverview) return null;

  const {
    eyebrow,
    title,
    description,
    image,
    imageAlt,
  } = project.researchOverview;

  return (
    <section className="project-section py-50 px-6 max-w-4xl mx-auto whitespace-pre-line">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            {eyebrow || "Research Overview"}
          </p>

          <h2 className="font-heading text-2xl md:text-3xl max-w-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 max-w-2xl">
              {description}
            </p>
          )}
        </div>

        <div className="w-full hover:scale-102">
          <Image
            src={image}
            alt={imageAlt || "Research overview diagram"}
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}