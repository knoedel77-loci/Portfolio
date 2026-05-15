"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

type Point = {
  id: number;
  x: number;
  y: number;
};

type Cursor = {
  x: number;
  y: number;
  active: boolean;
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState<Cursor>({
    x: 0,
    y: 0,
    active: false,
  });

  const points = useMemo<Point[]>(
  () => [
    { id: 1, x: 18, y: 28 },
    { id: 2, x: 34, y: 68 },
    { id: 3, x: 52, y: 36 },
    { id: 4, x: 68, y: 72 },
    { id: 5, x: 82, y: 30 },
    { id: 6, x: 76, y: 56 },

    // neue Punkte
    { id: 7, x: 12, y: 58 },
    { id: 8, x: 24, y: 78 },
    { id: 9, x: 44, y: 18 },
    { id: 10, x: 60, y: 84 },
    { id: 11, x: 88, y: 64 },
    { id: 12, x: 92, y: 42 },
  ],
    []
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setCursor((current) => ({
      ...current,
      active: false,
    }));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <svg className="h-full w-full">
          {points.map((point) => {
            const pointX =
              sectionRef.current?.offsetWidth !== undefined
                ? (point.x / 100) * sectionRef.current.offsetWidth
                : 0;

            const pointY =
              sectionRef.current?.offsetHeight !== undefined
                ? (point.y / 100) * sectionRef.current.offsetHeight
                : 0;

            const distance = Math.hypot(cursor.x - pointX, cursor.y - pointY);
            const isClose = cursor.active && distance < 260;

            return (
              <g key={point.id}>
                {isClose && (
                  <line
                    x1={pointX}
                    y1={pointY}
                    x2={cursor.x}
                    y2={cursor.y}
                    className="stroke-accent/25 transition-opacity duration-300"
                    strokeWidth="1"
                  />
                )}

                <circle
                  cx={isClose ? pointX + (cursor.x - pointX) * 0.08 : pointX}
                  cy={isClose ? pointY + (cursor.y - pointY) * 0.08 : pointY}
                  r={isClose ? 5 : 3}
                  className="fill-white/10 transition-all duration-500"
                />
              </g>
            );
          })}

          {cursor.active && (
            <circle
              cx={cursor.x}
              cy={cursor.y}
              r="6"
              className="fill-accent/35"
            />
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-heading text-xl leading-relaxed md:text-2xl">
          Wenn dich etwas an meinen Arbeiten interessiert, du Fragen hast oder
          eigene Gedanken dazu teilen möchtest - melde dich gerne.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-white/55 md:text-base">
          Ich freue mich über Austausch, neue Perspektiven :)
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 text-sm uppercase tracking-[0.12em] md:flex-row md:justify-center md:gap-8">
          <a
            href="mailto:jul.knoetzele@gmail.com"
            className="text-white/60 transition hover:text-accent"
          >
            Mail
          </a>

          <Link
  href="https://www.linkedin.com/in/julia-kn%C3%B6tzele-186333326/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition hover:text-accent"
>
  LinkedIn
</Link>
        </div>
      </div>
    </section>
  );
}