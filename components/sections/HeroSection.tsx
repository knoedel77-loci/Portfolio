import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center">
        <div className="max-w-5xl">
          

          <h1 className="max-w-5xl font-heading text-4xl leading-[1.08] tracking-[-0.035em] text-white/90 md:text-6xl lg:text-7xl">
            Warum setzen sich bestimmte Systeme durch - und welche Alternativen werden dabei übersehen?
          </h1>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
           Produktdesign war mein Ausgangspunkt. Heute interessieren mich zunehmend die Strukturen hinter Produkten 
           - von technologischen Systemen bis hin zu älteren Wissensformen, 
           die im heutigen Kontext neu relevant werden könnten.</p>
        </div>
      </div>
    </section>
  );
}