"use client";

import { useState } from "react";
import Image from "next/image";

type ExpandableImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function ExpandableImage({
  src,
  alt,
  caption,
  width = 1600,
  height = 1000,
  priority = false,
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsExpanded(true)}
        className="block w-full text-left"
      >
        <div className=" rounded-xl cursor-zoom-in hover:shadow-2xl">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
            priority={priority}
          />
        </div>
      </button>

      {caption && (
        <p className="text-sm text-white/50 mt-4">
          {caption}
        </p>
      )}

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6 py-10"
          onClick={() => setIsExpanded(false)}
        >
          <div className="w-full max-w-[95vw] max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              width={2000}
              height={1400}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl cursor-zoom-out"
            />
          </div>
        </div>
      )}
    </>
  );
}