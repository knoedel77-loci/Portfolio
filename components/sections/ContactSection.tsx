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

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const points = useMemo<Point[]>(
    () => [
      { id: 1, x: 18, y: 28 },
      { id: 2, x: 34, y: 68 },
      { id: 3, x: 52, y: 36 },
      { id: 4, x: 68, y: 72 },
      { id: 5, x: 82, y: 30 },
      { id: 6, x: 76, y: 56 },
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    setSubmitted(false);

    const response = await fetch("https://formspree.io/f/mykoqvor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      setMessage("");
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="contact"
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
          mir deine Gedanken dazu teilen möchtest - melde dich gerne.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-white/55 md:text-base">
          Ich freue mich über Austausch & neue Perspektiven :)
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
  <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-6 md:flex-row md:items-start">
    <a
      href="mailto:jul.knoetzele@gmail.com?subject=Kontakt%20%C3%BCber%20Portfolio"
      className="relative z-20 rounded-sm border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.12em] text-white/70 transition hover:border-accent hover:text-accent"
    >
      Mail
    </a>

    <form
      onSubmit={handleSubmit}
      className="flex  max-w-6xl flex-col items-center gap-3"
    >
      <textarea
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
          setSubmitted(false);
        }}
        name="message"
        placeholder="Leave an anonymous thought..."
        className="w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 transition hover:border-accent/50 focus:border-accent focus:outline-none"
        rows={4}
      />

      <button
        type="submit"
        disabled={loading || !message.trim()}
        className="rounded-sm border border-white/20 px-6 py-2 text-sm uppercase tracking-[0.12em] text-white/70 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  </div>

  {submitted && (
    <p className="text-sm text-accent">
      Danke - deine Nachricht wurde anonym gesendet :)
    </p>
  )}
</div>
      </div>
    </section>
  );
}