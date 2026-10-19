

"use client";

import { useEffect, useState } from "react";
import { Menu, Send, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { INSTAGRAM_DM } from "../data/site";

const LIENS = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        defile || ouvert ? "border-b border-line bg-night/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a href="#top" aria-label="LMS Digital, retour en haut" onClick={() => setOuvert(false)}>
          <Wordmark />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LIENS.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] text-muted transition hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-3 pr-4 text-[0.9rem] font-semibold text-night transition hover:bg-white"
          >
            <Send className="size-4" strokeWidth={2.2} aria-hidden />
            Écrire en DM
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full text-ink md:hidden"
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOuvert((v) => !v)}
        >
          {ouvert ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {ouvert && (
        <div id="menu-mobile" className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LIENS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOuvert(false)}
                  className="block border-b border-line py-4 font-display text-lg text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 font-semibold text-night"
          >
            <Send className="size-4" strokeWidth={2.2} aria-hidden />
            Écrire en DM sur Instagram
          </a>
        </div>
      )}
    </header>
  );
}
