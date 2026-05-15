import { Project } from "@/data/types";
import ExpandableImage from "@/components/ui/media/ExpandableImage";

type Props = {
  project: Project;
};

export default function ProjectInteraction({ project }: Props) {
  if (!project.interactionSection) return null;

  const { eyebrow, title, description, sketches } = project.interactionSection;

  if (!sketches || sketches.length === 0) return null;

  return (
    <section className="project-section py-28 px-6 max-w-5xl mx-auto">
      <div className="space-y-14">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            {eyebrow || "Final Interaction Model"}
          </p>

          <h2 className="font-heading text-2xl md:text-3xl max-w-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 max-w-2xl">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-20">
          {sketches.map((sketch, index) => (
            <figure key={index} className="space-y-4">
              <ExpandableImage
                src={sketch.image}
                alt={sketch.imageAlt || sketch.title || "Interaction sketch"}
                caption={sketch.caption}
                width={1800}
                height={1000}
                priority={index === 0}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}