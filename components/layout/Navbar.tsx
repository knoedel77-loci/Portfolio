"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcons from "../ui/icons/SocialIcons";

const LINKS = [
  { href: "/", label: "Home", type: "home" },
  { href: "/#projects", label: "Projects", type: "projects" },
  { href: "/about", label: "About", type: "about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash || "");
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const getIsActive = (type: string) => {
    if (type === "home") {
      return pathname === "/" && hash !== "#projects";
    }

    if (type === "projects") {
      return pathname.startsWith("/projects") || (pathname === "/" && hash === "#projects");
    }

    if (type === "about") {
      return pathname === "/about";
    }

    return false;
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    type: string
  ) => {
    setOpen(false);

    if (type === "home" && pathname === "/") {
      event.preventDefault();
      window.history.pushState(null, "", "/");
      setHash("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (type === "projects" && pathname === "/") {
      event.preventDefault();

      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        window.history.pushState(null, "", "/#projects");
        setHash("#projects");

        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background drop-shadow-xl/50">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            onClick={(event) => handleClick(event, "home")}
            className="font-heading text-1xl font-bold leading-tight text-foreground"
          >
            JULIA
            <br />
            KNÖTZELE
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {LINKS.map((link) => {
                const isActive = getIsActive(link.type);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleClick(event, link.type)}
                      className={
                        isActive
                          ? "text-accent line-through decoration-accent decoration-2"
                          : "text-muted transition-colors hover:text-accent"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <SocialIcons variant="light" />
          </div>

          <button
            className="text-2xl text-foreground hover:text-accent md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
          >
            ☰
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
          <button
            className="absolute right-6 top-6 text-3xl hover:text-accent"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center">
            <ul className="flex flex-col gap-6 text-center text-4xl text-muted">
              {LINKS.map((link) => {
                const isActive = getIsActive(link.type);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleClick(event, link.type)}
                      className={
                        isActive
                          ? "text-accent line-through decoration-accent decoration-2"
                          : "text-muted transition-colors hover:text-accent"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12">
              <SocialIcons />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}