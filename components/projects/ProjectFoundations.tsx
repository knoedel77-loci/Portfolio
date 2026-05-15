import type { ProjectInfoBlock } from "@/data/types";
import { Project } from "@/data/types";
import FoundationAccordionCard from "@/components/ui/project/FoundationAccordionCard";


type ProjectFoundationsProps = {
  foundations?: ProjectInfoBlock[];
};

export default function ProjectFoundations({
  foundations,
}: ProjectFoundationsProps) {
  if (!foundations || foundations.length === 0) return null;

  return (
    <section className="w-full py-16 px-6 md:py-24">
   
      <div className="mx-auto max-w-4xl px-6 md:px-10 project-section py-50 whitespace-pre-line">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-white/50 mb-3">
            Foundations
          </p>
          <h2 className="font-heading text-2xl md:text-3xl max-w-3xl">
            Theoretische Grundlage
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70">
            Die Konzeption des Systems basiert auf einer interdisziplinären theoretischen Grundlage, die vier zentrale Perspektiven zusammenführt: mnemotechnische Gedächtnisstrukturen, neurokognitive Lernprozesse, maschinelles Lernen sowie digitale und adaptive Lernsysteme.

            Diese Perspektiven werden herangezogen, um zentrale Bedingungen der in der Forschungsfrage formulierten Problemstellung zu analysieren: die Rolle selbstgenerierter Assoziationen in der Gedächtnisbildung, die Struktur und Funktionsweise menschlichen Lernens sowie die Möglichkeiten und Grenzen technischer Unterstützung durch lernende Systeme.

            Sie bilden die Grundlage für die anschließende Ableitung von Designprinzipien und die Entwicklung eines konzeptionellen Systemmodells.
          </p>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2">
          {foundations.map((item, index) => (
            <FoundationAccordionCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    
    </section>
  );
}