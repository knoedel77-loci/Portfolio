"use client";

import { useEffect, useRef, useState } from "react";
import ProjectTeaserItem from "@/components/ui/project/ProjectTeaserItem";

const projects = [
  {
    title: "DJ AI",
    description: "Mensch-KI-Interaktion · Live Coding",
    href: "/projects/dj-ai",
    media: {
      type: "video" as const,
      src: "/Images/projects/Algoravehome.mp4",
    },
    summary:
      "Ein experimentelles Live-Coding-System, in dem KI-generierter Musikcode direkt in den performativen Workflow zurückgespielt und weiterbearbeitet werden kann.",
    tags: ["Human-AI Interaction", "Live Coding", "Creative Systems"],
  },
  {
    title: "Bachelorarbeit",
    description: "KI-gestütztes Lernsystem · Mnemonik",
    href: "/projects/memory-palace-ba",
    media: {
      type: "image" as const,
      src: "/Images/projects/Bachelor/Bachelormindmap.png",
    },
    summary:
      "Ein research-basiertes Systemkonzept zur Frage, wie KI Lernprozesse unterstützen kann, ohne selbstgeneriertes Denken und kognitive Eigenständigkeit zu ersetzen.",
    tags: ["Learning", "Cognition", "Human-AI Interaction"],
  },
  {
    title: "Hacking the Porcelain Industry",
    description: "Materialexperiment · Prozessdesign",
    href: "/projects/hacking-porcelain",
    media: {
      type: "image" as const,
      src: "/Images/projects/Porcelain/Pasta.png",
    },
    summary:
      "Eine experimentelle Untersuchung keramischer Formprozesse, bei der Materialverhalten, Schwerkraft und menschliche Kontrolle als gestaltende Parameter verstanden werden.",
    tags: ["Material Systems", "Process Design", "Experiment"],
  },
  {
    title: "Weitere Projekte",
    description: "Kleinere Arbeiten · Experimente",
    href: "/projects/additional-projects",
    media: {
      type: "image" as const,
      src: "/Images/projects/Mindmap.png",
    },
    summary:
      "Eine Auswahl kleinerer Projekte, die technische, räumliche, soziale oder materielle Fragestellungen aus unterschiedlichen Blickwinkeln untersuchen.",
    tags: ["Exploration", "Prototypes", "Range"],
  },
];

export default function ProjectTeaserSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`scroll-mt-28 mx-auto max-w-6xl px-6 pt-10 pb-32 transition-all duration-1000 md:scroll-mt-32 md:pb-40 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
    
      <div className="mb-20 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.12em] text-white/50">
          Selected Projects
        </p>

        <h2 className="font-heading text-2xl md:text-3xl">
          Projekte, in denen sich diese Fragen auf unterschiedliche Weise
          zeigen.
        </h2>
      </div>

      <div className="space-y-24">
        {projects.map((project) => (
          <ProjectTeaserItem
            key={project.href}
            title={project.title}
            description={project.description}
            href={project.href}
            media={project.media}
            summary={project.summary}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}