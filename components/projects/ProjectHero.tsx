import { Project } from "@/data/types";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectHero({ project }: Props) {
  const supervisor = project.meta?.find((item) => item.label === "Supervisor");
  const primaryMeta = project.meta?.filter((item) => item.label !== "Supervisor");

  return (
    <section className="px-6 pt-24 pb-20 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-heading mb-4 text-white/90">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
            {project.subtitle}
          </p>
        )}

       {/* Metadaten */}

        {project.meta && (
  <>
    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-s text-white/50">
      {project.meta
        .filter((item) => item.label !== "Scope" && item.label !== "Supervisor")
        .map((item, index, array) => (
          <span key={index} className="flex items-center gap-3">
            <span>{item.value}</span>
            {index < array.length - 1 && <span className="text-white/50">·</span>}
          </span>
        ))}
    </div>

   

    {project.meta.find((item) => item.label === "Supervisor") && (
      <p className="mb-3 text-sm italic text-muted">
        Supervised by {project.meta.find((item) => item.label === "Supervisor")?.value}
      </p>
    )}
  </>
)}
        
      </div>
{project.hero?.media?.src && (
  <div>
    <div className="overflow-hidden rounded-2xl">
      <Image
        src={project.hero.media.src}
        alt={project.hero.media.alt || project.title}
        width={1600}
        height={1000}
        className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        priority
      />
    </div>

    {project.hero.media.caption && (
  <details className="mt-5 max-w-3xl group">
    <summary className="cursor-pointer list-none text-sm text-white/50 transition hover:text-accent/75">
      <span className="border-b border-white/20 group-open:border-white/40">
        Kontext zur Collage anzeigen
      </span>
    </summary>

    <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
      {project.hero.media.caption}
    </p>
  </details>
)}
  </div>
)}
      
    </section>
  );
}