"use client";

import { useState } from "react";
import { ExternalLink, MapPin, MousePointer2 } from "lucide-react";
import { REALISATIONS, type Realisation } from "../data/realisations";
import { BrowserFrame, PhoneFrame, ScrollShot } from "./Frames";
import LiveSiteModal, { type Affichage, type EtatApercu } from "./LiveSiteModal";

// Durée du défilement au survol, proportionnelle à la longueur de la page.
const dureeOrdinateur = (p: Realisation) =>
  Math.round(Math.min(16, Math.max(6, (p.images.page.height / p.images.page.width - 0.625) * 2.6)) * 10) / 10;
const dureeMobile = (p: Realisation) =>
  Math.round(Math.min(9, Math.max(4, (p.images.mobile.height / p.images.mobile.width - 2.17) * 1.6)) * 10) / 10;

export default function Realisations() {
  const [apercu, setApercu] = useState<EtatApercu>(null);

  const ouvrir = (projet: Realisation, affichage: Affichage) => {
    // Sur téléphone, on affiche toujours la version mobile du site.
    const petitEcran = window.matchMedia("(max-width: 767px)").matches;
    setApercu({ projet, affichage: petitEcran ? "mobile" : affichage });
  };

  return (
    <section id="realisations" className="relative overflow-x-clip py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-balance font-display text-[clamp(2rem,5.2vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] lg:col-span-7">
            35 clients accompagnés,
            <br />
            voici quelques sites.
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-muted lg:col-span-5 lg:pb-2">
            Une sélection parmi mes réalisations : chaque site a sa propre identité. Passez la souris sur une page pour
            la faire défiler, ou ouvrez-la ici pour naviguer dedans comme un vrai visiteur.
          </p>
        </div>

        {/* Deux sites côte à côte (un seul par ligne sur téléphone). */}
        <div className="mt-16 grid gap-x-10 gap-y-28 md:mt-24 md:grid-cols-2 md:gap-y-32 lg:gap-x-14">
          {REALISATIONS.map((projet) => (
            <Projet key={projet.slug} projet={projet} onOuvrir={(affichage) => ouvrir(projet, affichage)} />
          ))}
        </div>
      </div>

      <LiveSiteModal etat={apercu} onFermer={() => setApercu(null)} />
    </section>
  );
}

function Projet({ projet, onOuvrir }: { projet: Realisation; onOuvrir: (affichage: Affichage) => void }) {
  const [fond, accent] = projet.couleurs;

  return (
    <article id={projet.slug} className="flex scroll-mt-28 flex-col">
      {/* Les écrans */}
      <div className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-4 -inset-y-8 -z-10 opacity-60 blur-3xl"
          style={{ background: `radial-gradient(55% 55% at 50% 55%, ${accent}50, transparent 72%)` }}
        />

        <button
          type="button"
          onClick={() => onOuvrir("ordinateur")}
          aria-label={`Parcourir le site ${projet.nom} ici`}
          className="shot-hover relative block w-full cursor-pointer rounded-xl text-left"
        >
          <BrowserFrame titre={projet.nom} accent={accent}>
            <ScrollShot
              src={projet.images.page.src}
              srcPetit={projet.images.page.srcPetit}
              srcSombre={projet.images.page.srcSombre}
              srcPetitSombre={projet.images.page.srcPetitSombre}
              sizes="(min-width: 1200px) 548px, (min-width: 768px) 50vw, calc(100vw - 40px)"
              width={projet.images.page.width}
              height={projet.images.page.height}
              alt={`Page d'accueil complète du site ${projet.nom}, version ordinateur`}
              ratio="16 / 10"
              fond={fond}
              duree={dureeOrdinateur(projet)}
            />
          </BrowserFrame>
          <span className="shot-hint pointer-events-none absolute bottom-4 left-4 hidden items-center gap-2 rounded-full bg-night/85 px-3.5 py-2 text-xs text-ink ring-1 ring-white/15 backdrop-blur transition-opacity duration-300 [@media(hover:hover)_and_(pointer:fine)]:inline-flex">
            <MousePointer2 className="size-3.5" aria-hidden />
            Survolez, puis cliquez pour naviguer
          </span>
        </button>

        <button
          type="button"
          onClick={() => onOuvrir("mobile")}
          aria-label={`Parcourir la version mobile du site ${projet.nom}`}
          className="shot-hover absolute -bottom-10 -right-1 w-[28%] cursor-pointer rounded-[1.4rem] md:-right-4 lg:w-[24%]"
        >
          <PhoneFrame className="rounded-[1.4rem] p-[4px]" ecranClassName="rounded-[1.15rem]">
            <ScrollShot
              src={projet.images.mobile.src}
              srcSombre={projet.images.mobile.srcSombre}
              width={projet.images.mobile.width}
              height={projet.images.mobile.height}
              alt={`Site ${projet.nom} sur téléphone`}
              ratio="9 / 19.5"
              fond={fond}
              duree={dureeMobile(projet)}
            />
          </PhoneFrame>
        </button>
      </div>

      {/* Présentation */}
      <div className="mt-16 md:mt-14">
        <p className="text-[0.95rem] font-medium" style={{ color: accent }}>
          {projet.metier}
        </p>
        <h3 className="mt-1.5 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          {projet.nom}
        </h3>
        {projet.lieu && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4" aria-hidden />
            {projet.lieu}
          </p>
        )}
      </div>

      <p className="mt-5 leading-relaxed text-muted">{projet.resume}</p>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
        <button
          type="button"
          onClick={() => onOuvrir("ordinateur")}
          className="rounded-full bg-ink px-5 py-3 text-[0.95rem] font-semibold text-night transition hover:bg-white"
        >
          Parcourir le site ici
        </button>
        <a
          href={projet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] text-ink ring-1 ring-white/20 transition hover:ring-white/50"
        >
          Ouvrir dans un onglet
          <ExternalLink className="size-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
