import Text from "@/components/ui/typography/Text";

export default function Footer() {
  return (
    <footer className="mt-32 border-t  ">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <Text>© {new Date().getFullYear()} Julia Knötzele</Text>
        <Text>Kontakt · Impressum</Text>
      </div>
    </footer>
  );
}
