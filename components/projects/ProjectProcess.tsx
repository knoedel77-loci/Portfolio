import { Project } from "@/data/types";

type Props = {
  project: Project;
};

export default function ProjectProcess({ project }: Props) {
  if (!project.processSections || project.processSections.length === 0) {
    return null;
  }

  return (
    <section className=" project-section py-24 px-6 max-w-5xl mx-auto">
      <h2 className="uppercase tracking-[0.12em] font-heading mb-12 text-white/70 ">
        Process
      </h2>

      <div className="space-y-28">
        {project.processSections.map((section, index) => (
          <div key={index} className="space-y-8">
            <div className="grid grid-cols-[80px_1fr] gap-6 items-start">
              <span className="text-2xl font-mono text-accent font-extralight opacity-60 leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-lg font-heading mb-3">
                  {section.title}
                </h3>

                {section.text && (
                  <p className="text-white/70 max-w-2xl">
                    {section.text}
                  </p>
                )}
              </div>
            </div>

            {section.media && section.media.length > 0 && (
              <div className="grid gap-6 ">
                {section.media.map((media, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    {media.type === "image" && media.src && (
                      <img
                        src={media.src}
                        alt={media.alt || ""}
                        className="w-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}