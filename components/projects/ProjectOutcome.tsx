import { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectOutcome({ project }: Props) {
  if (!project.reflection) return null;

  const { summary, discussion, nextStep } = project.reflection;

  return (
    <section className="project-section py-24 px-6 max-w-5xl mx-auto">
      <div className="grid gap-12 md:grid-cols-3">
        
        {/* LEFT: Reflection + Discussion */}
        <div className="md:col-span-2">
          <h2 className="font-heading uppercase tracking-[0.12em] mb-4">
            {discussion ? "Discussion" : "Reflection"}
          </h2>

          {/* Reflection */}
          {summary && (
            <p className="text-muted whitespace-pre-line">
              {summary}
            </p>
          )}

          {/* Discussion (optional, leicht getrennt) */}
          {discussion && (
            <p className="text-muted whitespace-pre-line mt-6">
              {discussion}
            </p>
          )}
        </div>

        {/* RIGHT: Future */}
        <div className="md:col-span-1">
          <h2 className="font-heading uppercase tracking-[0.12em] mb-4">
            Future Directions
          </h2>

          {nextStep && (
            <p className="text-muted whitespace-pre-line">
              {nextStep}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}