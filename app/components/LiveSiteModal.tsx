"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, LoaderCircle, Monitor, Smartphone, X } from "lucide-react";
import type { Realisation } from "../data/realisations";

export type Affichage = "ordinateur" | "mobile";
export type EtatApercu = { projet: Realisation; affichage: Affichage } | null;

// Fenêtre qui affiche le vrai site du client, pour naviguer dedans sans quitter la page.
export default function LiveSiteModal({ etat, onFermer }: { etat: EtatApercu; onFermer: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (etat && !dialog.open) {
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>("[data-fermer]")?.focus();
      document.documentElement.style.overflow = "hidden";
    }
    if (!etat && dialog.open) dialog.close();
    if (!etat) document.documentElement.style.overflow = "";
  }, [etat]);

  return (
    <dialog
      ref={ref}
      className="live m-auto h-[100svh] max-h-none w-screen max-w-none bg-transparent p-0 text-ink md:h-[92svh] md:w-[min(1320px,94vw)]"
      onClose={onFermer}
      onClick={(e) => {
        if (e.target === ref.current) onFermer();
      }}
      aria-label={etat ? `Aperçu du site ${etat.projet.nom}` : "Aperçu du site"}
    >
      {etat && (
        <Contenu
          key={etat.projet.slug}
          projet={etat.projet}
          affichageInitial={etat.affichage}
          onFermer={onFermer}
        />
      )}
    </dialog>
  );
}

function Contenu({
  projet,
  affichageInitial,
  onFermer,
}: {
  projet: Realisation;
  affichageInitial: Affichage;
  onFermer: () => void;
}) {
  const [affichage, setAffichage] = useState<Affichage>(affichageInitial);
  const [charge, setCharge] = useState(false);
  const mobile = affichage === "mobile";

  return (
    <div className="flex h-full flex-col overflow-hidden bg-night-2 ring-1 ring-white/12 md:rounded-2xl">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3 md:px-5">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[0.95rem] font-semibold">{projet.nom}</p>
          <p className="truncate text-xs text-muted">Le vrai site, en ligne : vous pouvez naviguer dedans.</p>
        </div>

        <div role="group" aria-label="Taille d'écran" className="hidden rounded-full bg-night p-1 ring-1 ring-line md:flex">
          {(
            [
              ["ordinateur", "Ordinateur", Monitor],
              ["mobile", "Mobile", Smartphone],
            ] as const
          ).map(([valeur, label, Icone]) => (
            <button
              key={valeur}
              type="button"
              aria-pressed={affichage === valeur}
              onClick={() => setAffichage(valeur)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition ${
                affichage === valeur ? "bg-ink font-semibold text-night" : "text-muted hover:text-ink"
              }`}
            >
              <Icone className="size-4" aria-hidden />
              {label}
            </button>
          ))}
        </div>

        <a
          href={projet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm text-muted ring-1 ring-line transition hover:text-ink hover:ring-white/30 sm:inline-flex"
        >
          Ouvrir dans un onglet
          <ExternalLink className="size-3.5" aria-hidden />
        </a>

        <a
          href={projet.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ouvrir le site dans un onglet"
          className="grid size-10 shrink-0 place-items-center rounded-full text-muted ring-1 ring-line sm:hidden"
        >
          <ExternalLink className="size-4" aria-hidden />
        </a>

        <button
          type="button"
          data-fermer
          onClick={onFermer}
          aria-label="Fermer l'aperçu"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-white/[0.08] transition hover:bg-white/15"
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden bg-night">
        {!charge && (
          <div className="absolute inset-0 grid place-items-center">
            <p className="flex items-center gap-3 text-sm text-muted">
              <LoaderCircle className="size-5 animate-spin" aria-hidden />
              Chargement du site…
            </p>
          </div>
        )}
        <div className={mobile ? "mx-auto h-full w-full md:max-h-[880px] md:w-[400px] md:py-6" : "h-full w-full"}>
          <iframe
            src={projet.url}
            title={`Site ${projet.nom}`}
            onLoad={() => setCharge(true)}
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            style={{ background: projet.couleurs[0] }}
            className={`h-full w-full transition-opacity duration-500 ${charge ? "opacity-100" : "opacity-0"} ${
              mobile ? "md:rounded-[1.9rem] md:ring-[6px] md:ring-[#1c1932]" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
