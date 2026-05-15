import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string };

type ProjectSummaryCardProps = {
  title: string;
  description: string;
  href: string;
  media?: Media;
  summary: string;
  tags: string[];
};

export default function ProjectSummaryCard({
  title,
  description,
  href,
  media,
  summary,
  tags,
}: ProjectSummaryCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-muted drop-shadow-xl/50">
        {media ? (
          media.type === "image" ? (
            <Image
              src={media.src}
              alt={media.alt ?? title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            Kein Medium vorhanden
          </div>
        )}

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 md:p-6 space-y-3">
            <p className="text-white text-base md:text-lg font-heading">
              {title}
            </p>

            <p className="text-white/85 text-sm max-w-md">
              {summary}
            </p>

            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-white/70">
              {tags.map((tag, index) => (
                <span key={tag} className="flex items-center gap-2">
                  <span>{tag}</span>
                  {index < tags.length - 1 && (
                    <span className="text-white/40">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-display italic text-3xl text-white tracking-[0.07em]">
  {title}
</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/50 mb-45">
  {description}
</p>
      </div>
    </Link>
  );
}