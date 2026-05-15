import { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectThesis({ project }: Props) {
  if (!project.thesis) return null;

  return (
    <section className="project-section py-50 px-6 max-w-4xl mx-auto whitespace-pre-line">
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            {project.thesis.label || "Research Question"}
          </p>

          <h2 className="font-heading text-2xl md:text-3xl max-w-5xl">
            {project.thesis.question}
          </h2>
        </div>

        {project.thesis.motivation && (
          <p className="text-white/70 max-w-2xl">
            {project.thesis.motivation}
          </p>
        )}
      </div>
    </section>
  );
}