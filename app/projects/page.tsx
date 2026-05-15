import projects from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-24 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-5xl font-heading mb-4">
          Projects
        </h1>

        <p className="max-w-xl opacity-70">
          A selection of projects exploring design, technology and interaction.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="space-y-4">

              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-neutral-100">
                {project.hero?.media?.src && (
                  <img
                    src={project.hero.media.src}
                    alt={project.hero.media.alt || project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-lg md:text-xl font-heading">
                  {project.title}
                </h2>

                {project.subtitle && (
                  <p className="text-sm opacity-70 mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
