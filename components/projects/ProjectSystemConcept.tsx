import Image from "next/image";
import { Project } from "@/data/types";

type Props = {
  project: Project;
};

type SystemBlockProps = {
  title: string;
  text: string;
  image?: string;
  caption?: string;
  imageAlt?: string;
  insight?: string;
};

function SystemBlock({ title, text, image, imageAlt, caption, insight }: SystemBlockProps) {
  return (
  <div className="space-y-6">
    <div className="max-w-3xl">
      <h3 className="font-heading text-lg md:text-xl text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
        {text}
      </p>
    </div>

    {image && (
      <div className="pl-3 w-full mt-12 space-y-5">
        <Image
          src={image}
          alt={imageAlt || title}
          width={1600}
          height={1000}
          className="w-full h-auto object-contain rounded-xl border border-white/10"
        />

        {caption && (
          <p className=" pl-4 max-w-1.5xl text-sm text-white/50 leading-relaxed ">
            {caption}
          </p>
        )}
      </div>
    )}
    <p className="mt-4 text-sm md:text-base leading-relaxed text-white/50 whitespace-pre-line">
        {insight}
      </p>
  </div>
);
}

export default function ProjectSystemConcept({ project }: Props) {
  if (!project.systemConcept) return null;

  const {
    eyebrow,
    title,
    intro,
    overview,
    modes,
    profile,
    vividness,
    memory,
    reflection,
  } = project.systemConcept;

  return (
    <section className="project-section py-50 px-6 max-w-4xl mx-auto whitespace-pre-line">
      <div className="space-y-14">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            {eyebrow || "System Concept"}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl max-w-5xl">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 max-w-2xl">
            {intro}
          </p>
        </div>

        {overview && <SystemBlock {...overview} />}
        {modes && <SystemBlock {...modes} />}
        {profile && <SystemBlock {...profile} />}
        {vividness && <SystemBlock {...vividness} />}
        {memory && <SystemBlock {...memory} />}

        {reflection && (
          <div className="max-w-3xl">
            <h3 className="font-heading text-lg md:text-xl text-white">
              {reflection.title}
            </h3>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
              {reflection.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}