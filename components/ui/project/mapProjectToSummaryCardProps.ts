import type { Project } from "@/data/types";

type CardMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string };

export type ProjectSummaryCardProps = {
  title: string;
  description: string;
  href: string;
  media?: CardMedia;
  summary: string;
  tags: string[];
};

export function mapProjectToSummaryCardProps(
  project: Project
): ProjectSummaryCardProps {
  const heroMedia = project.hero?.media;

  const media =
    heroMedia &&
    (heroMedia.type === "image" || heroMedia.type === "video")
      ? {
          type: heroMedia.type,
          src: heroMedia.src ?? "",
          alt: heroMedia.alt,
        }
      : undefined;

  return {
    title: project.title,
    description: project.subtitle ?? "",
    href: `/projects/${project.slug}`,
    media,
    summary: project.summaryCard?.summary ?? "",
    tags: [
      ...(project.summaryCard?.role ?? []),
      ...(project.summaryCard?.tools ?? []),
    ],
  };
}