import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

type SocialIconsProps = {
  variant?: "light" | "dark";
};

export default function SocialIcons({ variant = "dark" }: SocialIconsProps) {
  const baseStyles =
    "transition-colors duration-200";

  const colorStyles =
    variant === "light"
      ? "text-background hover:text-accent"
      : "text-foreground hover:text-accent";

  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Instagram"
        className={`${baseStyles} ${colorStyles}`}
      >
        <Instagram size={20} />
      </Link>

      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        aria-label="LinkedIn"
        className={`${baseStyles} ${colorStyles}`}
      >
        <Linkedin size={20} />
      </Link>
    </div>
  );
}
