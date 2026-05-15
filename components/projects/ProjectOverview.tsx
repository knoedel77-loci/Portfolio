import { Project } from "@/data/types";
import ExpandableImage from "@/components/ui/media/ExpandableImage";

type Props = {
  project: Project;
};

export default function ProjectOverview({ project }: Props) {
  if (!project.overview) return null;

  return (
    <section className="project-section py-24 px-6 max-w-5xl mx-auto">
       <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-3">
            Overview
          </p>

      <div className="grid gap-12 md:grid-cols-3 mb-16">
        <div>
          <h2 className="text-m uppercase tracking-[0.12em] text-white/70 mb-3">
            Context
          </h2>
          <p className="text-muted">{project.overview.context}</p>
        </div>

        <div>
          <h2 className="text-m uppercase tracking-[0.12em] text-white/70 mb-3">
            Method
          </h2>
          <p className="text-muted">{project.overview.method}</p>
        </div>

        <div>
          <h2 className="text-m uppercase tracking-[0.12em] text-white/70 mb-3 ">
            Outcome
          </h2>
          <p className="text-muted">{project.overview.outcome}</p>
        </div>
      </div>
     {project.overview.system && (
  <div>
    <h2 className="text-m uppercase tracking-[0.12em] text-white/70 mb-3 mt-42">
      System
    </h2>
    <p className="text-whi mb-20">{project.overview.system}</p>
  </div>
)}

      {project.overview.media?.src && (
        <ExpandableImage
          src={project.overview.media.src}
          alt={project.overview.media.alt || project.title}
          caption={project.overview.media.caption}
          width={1600}
          height={1000}
          priority
        />
      )}
    </section>
  );
}