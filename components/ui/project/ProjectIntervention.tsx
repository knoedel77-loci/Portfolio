"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectIntervention as ProjectInterventionType } from "@/data/types";
import InterventionParameterCard from "@/components/ui/project/InterventionParameterCard";

type Props = {
  intervention?: ProjectInterventionType;
};

export default function ProjectIntervention({ intervention }: Props) {
  const [openCards, setOpenCards] = useState<{ [key: string]: number[] }>({});

  if (!intervention) return null;

  const toggleCard = (rowKey: string, itemIndex: number) => {
    setOpenCards((prev) => {
      const current = prev[rowKey] || [];

      if (current.includes(itemIndex)) {
        return {
          ...prev,
          [rowKey]: current.filter((i) => i !== itemIndex),
        };
      }

      return {
        ...prev,
        [rowKey]: [...current, itemIndex],
      };
    });
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Intervention
          </p>

          <h2 className="font-heading text-2xl md:text-3xl max-w-3xl">
            {intervention.title}
          </h2>

          {intervention.intro && (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
              {intervention.intro}
            </p>
          )}
        </div>

        {intervention.media?.src && (
          <div className="mb-12">
            <Image
              src={intervention.media.src}
              alt={intervention.media.alt || intervention.title}
              width={1400}
              height={300}
              className="w-full h-auto object-cover rounded-2xl bg-white"
            />

            {intervention.media.caption && (
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                {intervention.media.caption}
              </p>
            )}
          </div>
        )}

        {intervention.parameterIntro && (
            <div className="mt-8 max-w-2xl">
              <h3 className="mb-3
               text-sm uppercase tracking-[0.2em] text-white/50">
                {intervention.parameterIntro.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {intervention.parameterIntro.text}
              </p>
            </div>
        )}

        

        {intervention.parameterGroups?.map((group) => {
          const rows = [];

          for (let i = 0; i < group.items.length; i += 2) {
            rows.push(group.items.slice(i, i + 2));
          }

           

          return (
            <div key={group.title} className="mb-14 last:mb-0">
              <div className="mb-6 max-w-3xl">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
                  {group.title}
                </p>

                {group.intro && (
                  <p className="text-sm md:text-base leading-relaxed text-white/70">
                    {group.intro}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {rows.map((row, rowIndex) => {
                  const rowKey = `${group.title}-${rowIndex}`;

                  return (
                    <div
                      key={rowKey}
                      className="flex flex-col gap-4 md:flex-row md:items-start"
                    >
                      {row.map((item, colIndex) => {
                        const globalIndex = rowIndex * 2 + colIndex;
                        const isOpen =
                          openCards[rowKey]?.includes(colIndex) || false;
                        const otherOpen =
                          (openCards[rowKey]?.length || 0) > 0 && !isOpen;

                        return (
                          <div
                            key={item.title}
                            className={`transition-all duration-700 ease-in-out ${
                              isOpen
                                ? "md:flex-[1.8_1_0%]"
                                : otherOpen
                                ? "md:flex-[0.75_1_0%] md:min-w-260px"
                                : "md:flex-1"
                            }`}
                          >
                            <InterventionParameterCard
                              item={item}
                              index={globalIndex}
                              isOpen={isOpen}
                              onToggle={() => toggleCard(rowKey, colIndex)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {intervention.conclusion && (
          <div className="mt-12 max-w-3xl border-t border-white/10 pt-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
              Beobachtung
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/70 whitespace-pre-line">
              {intervention.conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}