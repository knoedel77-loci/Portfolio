type Props = {
  title?: string;
  text?: string;
  videoSrc?: string;
  imageSrc?: string;
  instagramUrl?: string;
};

export default function ProjectFeaturedPost({
  title,
  text,
  videoSrc,
  imageSrc,
  instagramUrl,
}: Props) {
  if (!videoSrc && !imageSrc) return null;

  return (
    <div className="mt-20">
      {title && (
        <h3 className="mb-3 text-lg font-medium">
          {title}
        </h3>
      )}

      {text && (
        <p className="mb-6  opacity-80">
          {text}
        </p>
      )}

      <div className="mx-auto w-full  max-w-500 rounded-3xl">
        <div className="mx-auto  max-w-105 rounded-5xl bg-background shadow-2xl">
          <div className="aspect-3/5 overflow-hidden rounded-2xl hover:scale-102 hover:shadow-2xl shadow-black">
            {videoSrc && (
              <video
                src={videoSrc}
                controls
                playsInline
                className="block h-full w-full object-cover"
              />
            )}

            {!videoSrc && imageSrc && (
              <img
                src={imageSrc}
                alt={title || "Featured post"}
                className="block h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>

      {instagramUrl && (
        <div className="mt-6 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm tracking-wide transition hover:border-black hover:bg-accent hover:text-black"
          >
            View on Instagram
          </a>
        </div>
      )}
    </div>
  );
}