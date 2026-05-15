import Link from "next/link";
import Text from "@/components/ui/typography/Text";

export default function Footer() {
  return (
    <footer className="mt-32 border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Text>© {new Date().getFullYear()} Julia Knötzele</Text>

        <Link
          href="/#contact"
          className="text-white/60 transition hover:text-white"
        >
          <Text>Kontakt · Impressum</Text>
        </Link>
      </div>
    </footer>
  );
}
