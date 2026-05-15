import Image from "next/image";
import Link from "next/link";

export default function HomeIntroSection() {
  return (
   <section className="px-6 pt-6 pb-28 md:pt-8 md:pb-36">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.45fr_1fr] md:gap-16">
        <div className="justify-self-start">
          <div className="overflow-hidden rounded-1xl">
            <Image
              src="/Images/me/ouioui.png"
              alt="Portrait von Julia Knötzele"
              width={420}
              height={520}
              className="aspect-4/5 w-full max-w-120px object-cover grayscale md:max-w-160px"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.12em] text-white/45">
            Welcome
          </p>

          <p className="font-heading text-2xl leading-snug text-white md:text-3xl">
            Schön, dass ihr vorbeischaut:)
          </p>

          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            Die folgenden Projekte zeigen unterschiedliche Versuche, Gestaltung
            als Werkzeug zum Verstehen, Testen und Hinterfragen komplexer
            Zusammenhänge zu nutzen - durch Recherche, Prototyping, Material
            und Code.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <Link
              href="/about"
              className="text-white/55 underline decoration-white/30 underline-offset-4 transition hover:decoration-accent hover:text-accent"
            >
              Mehr über mich
            </Link>

            <a
              href="#projects"
              className="text-white/55 transition  underline decoration-white/30 underline-offset-4 hover:text-accent"
            >
              Zu den Projekten ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}