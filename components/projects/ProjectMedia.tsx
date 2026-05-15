"use client";

import { Project } from "@/data/types";
import ProjectStoryCarousel from "@/components/ui/project/ProjectStoryCarousel";
import ProjectFeaturedPost from "@/components/ui/project/ProjectFeaturedPost";

type Props = {
  project: Project;
};

export default function ProjectMedia({ project }: Props) {
  const hasStorySequence =
    !!project.storySequence && project.storySequence.slides.length > 0;

  const hasDefaultMedia = !!project.media && project.media.length > 0;

  const hasFeaturedPost =
    !!project.featuredPost &&
    (!!project.featuredPost.videoSrc || !!project.featuredPost.imageSrc);

  if (!hasStorySequence && !hasDefaultMedia && !hasFeaturedPost) return null;

  return (
    <section className=" project-section max-w-5xl mx-auto px-6 py-24">
      <h2 className="mb-12 font-heading uppercase tracking-[0.12em]">
        Media
      </h2>

      {hasStorySequence ? (
        <div>
          {project.storySequence?.title && (
            <h3 className="mb-3 text-lg font-medium">
              {project.storySequence.title}
            </h3>
          )}

          {project.storySequence?.intro && (
            <p className="mb-6 max-w-2xl opacity-80">
              {project.storySequence.intro}
            </p>
          )}

          <ProjectStoryCarousel slides={project.storySequence!.slides} />
        </div>
      ) : hasDefaultMedia ? (
        <div>
          {project.media?.map((item, index) => (
            <div key={index} className="mb-10">
              {item.type === "image" && item.src && (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  style={{ width: "100%", height: "auto" }}
                />
              )}

              {item.type === "video" && item.src && (
                <video controls style={{ width: "100%" }}>
                  <source src={item.src} />
                </video>
              )}

              {item.caption && (
                <p style={{ marginTop: "8px", opacity: 0.7 }}>
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : null}

      {hasFeaturedPost && (
        <ProjectFeaturedPost
          title={project.featuredPost?.title}
          text={project.featuredPost?.text}
          videoSrc={project.featuredPost?.videoSrc}
          imageSrc={project.featuredPost?.imageSrc}
          instagramUrl={project.featuredPost?.instagramUrl}
        />
      )}
    </section>
  );
}