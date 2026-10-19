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
            Trois clients,
            <br />
            trois sites en ligne.
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-muted lg:col-span-5 lg:pb-2">
            Chaque site a sa propre identité. Passez la souris sur une page pour la faire défiler, ou ouvrez-la ici
            pour naviguer dedans comme un vrai visiteur.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-36 md:mt-28 md:gap-48">
          {REALISATIONS.map((projet, i) => (
            <Projet
              key={projet.slug}
              projet={projet}
              inverse={i % 2 === 1}
              onOuvrir={(affichage) => ouvrir(projet, affichage)}
            />
          ))}
        </div>
      </div>

      <LiveSiteModal etat={apercu} onFermer={() => setApercu(null)} />
    </section>
  );
}

function Projet({
  projet,
  inverse,
  onOuvrir,
}: {
  projet: Realisation;
  inverse: boolean;
  onOuvrir: (affichage: Affichage) => void;
}) {
  const [fond, accent] = projet.couleurs;

  return (
    <article id={projet.slug}>
      {/* Présentation */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-6">
          <p className="text-[0.95rem] font-medium" style={{ color: accent }}>
            {projet.metier}
          </p>
          <h3 className="mt-2 text-balance font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
            {projet.nom}
          </h3>
          {projet.lieu && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="size-4" aria-hidden />
              {projet.lieu}
            </p>
          )}
        </div>
        <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-muted lg:col-span-6 lg:pb-1">
          {projet.resume}
        </p>
      </div>

      {/* Les écrans, en grand */}
      <div className="relative isolate mt-10 md:mt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-4 -inset-y-12 -z-10 opacity-60 blur-3xl md:-inset-x-16"
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
              sizes="(min-width: 1200px) 1136px, calc(100vw - 40px)"
              width={projet.images.page.width}
              height={projet.images.page.height}
              alt={`Page d'accueil complète du site ${projet.nom}, version ordinateur`}
              ratio="16 / 10"
              fond={fond}
              duree={dureeOrdinateur(projet)}
            />
          </BrowserFrame>
          <span
            className={`shot-hint pointer-events-none absolute bottom-5 hidden ${inverse ? "right-5" : "left-5"} items-center gap-2 rounded-full bg-night/85 px-4 py-2.5 text-sm text-ink ring-1 ring-white/15 backdrop-blur transition-opacity duration-300 [@media(hover:hover)_and_(pointer:fine)]:inline-flex`}
          >
            <MousePointer2 className="size-4" aria-hidden />
            Survolez pour faire défiler, cliquez pour naviguer
          </span>
        </button>

        <button
          type="button"
          onClick={() => onOuvrir("mobile")}
          aria-label={`Parcourir la version mobile du site ${projet.nom}`}
          className={`shot-hover absolute -bottom-14 w-[34%] cursor-pointer rounded-[1.6rem] sm:w-[22%] md:-bottom-20 lg:w-[17%] ${
            inverse ? "-left-1 md:-left-10" : "-right-1 md:-right-10"
          }`}
        >
          <PhoneFrame>
            <ScrollShot
              src={projet.images.mobile.src}
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

      {/* Ce que fait le site */}
      <div className="mt-24 grid gap-10 md:mt-28 lg:grid-cols-12 lg:items-start">
        <ul className={`grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:col-span-7 ${inverse ? "lg:order-2 lg:col-start-6" : ""}`}>
          {projet.points.map((point) => (
            <li key={point} className="flex gap-3 leading-snug text-ink/90">
              <span aria-hidden className="mt-[0.45em] size-1.5 shrink-0 rounded-full" style={{ background: accent }} />
              {point}
            </li>
          ))}
        </ul>

        <div className={`flex flex-col gap-6 lg:col-span-5 ${inverse ? "lg:order-1" : "lg:items-end"}`}>
          <div className="flex flex-wrap gap-3">
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
          <div className="flex items-center gap-3">
            <span className="flex -space-x-1.5" aria-hidden>
              {projet.couleurs.map((c) => (
                <span key={c} className="size-5 rounded-full ring-2 ring-night" style={{ background: c }} title={c} />
              ))}
            </span>
            <span className="text-xs text-faint">Les couleurs du site</span>
          </div>
        </div>
      </div>
    </article>
  );
}
