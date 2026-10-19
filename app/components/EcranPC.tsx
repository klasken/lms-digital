"use client";

import { useEffect, useRef } from "react";
import "./ecran-pc.css";

// L'animation de présentation LMS Digital (la même histoire que la vidéo Instagram),
// recréée en format horizontal pour remplir tout l'écran de l'ordinateur.
export default function EcranPC({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // L'animation ne tourne que quand l'écran est visible.
  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;
    const observer = new IntersectionObserver(([entry]) => {
      scene.dataset.pause = entry.isIntersecting ? "non" : "oui";
    });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden
        className="bg-gradient-brand absolute inset-x-[6%] top-[8%] bottom-[22%] -z-10 rounded-full opacity-30 blur-3xl"
      />

      {/* Écran */}
      <div className="relative rounded-[1.1rem] bg-[#100e20] p-[9px] pb-[22px] shadow-[0_60px_100px_-45px_rgb(0_0_0/0.95)] ring-1 ring-white/15 md:rounded-[1.4rem] md:p-[12px] md:pb-[30px]">
        <span aria-hidden className="absolute left-1/2 top-[3px] size-[4px] -translate-x-1/2 rounded-full bg-white/15 md:top-[4px]" />
        <div className="relative overflow-hidden rounded-[0.55rem] md:rounded-[0.7rem]">
          <Scene sceneRef={ref} />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.06)_0%,transparent_38%)]"
          />
        </div>
        <span
          aria-hidden
          className="absolute bottom-[8px] left-1/2 -translate-x-1/2 font-display text-[0.42rem] font-semibold tracking-[0.4em] text-white/25 md:bottom-[10px] md:text-[0.5rem]"
        >
          LMS
        </span>
      </div>

      {/* Pied */}
      <div aria-hidden className="mx-auto h-10 w-[17%] bg-gradient-to-b from-[#1d1a33] to-[#0f0d1d] [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)] md:h-14" />
      <div
        aria-hidden
        className="mx-auto h-[9px] w-[40%] rounded-t-[3px] rounded-b-[999px] bg-gradient-to-b from-[#2a2645] to-[#14122a] shadow-[0_18px_30px_-12px_rgb(0_0_0/0.9)] ring-1 ring-white/10 md:h-[11px]"
      />
    </div>
  );
}

function Scene({ sceneRef }: { sceneRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={sceneRef} className="pc-scene" role="img" aria-label="Animation LMS Digital : création de sites internet">
      <div className="pc-stars" aria-hidden />

      <div className="pc-titre" aria-hidden>
        <span className="pc-titre-petit">Création de</span>
        <span className="pc-titre-grand">Sites internet</span>
      </div>

      {/* Fenêtre de navigateur : maquette puis site */}
      <div className="pc-nav" aria-hidden>
        <div className="pc-nav-barre">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />
          <span>votre-site.fr</span>
        </div>
        <div className="pc-nav-contenu">
          <div className="pc-plan">
            <span className="pc-plan-boite" style={{ left: "4%", top: "5%", width: "92%", height: "9%" }}>
              <em>&lt;header&gt;</em>
            </span>
            <span className="pc-plan-boite" style={{ left: "4%", top: "22%", width: "44%", height: "16%" }}>
              <em>&lt;h1&gt;</em>
            </span>
            <span className="pc-plan-ligne" style={{ left: "4%", top: "42%", width: "40%" }} />
            <span className="pc-plan-ligne" style={{ left: "4%", top: "47%", width: "30%" }} />
            <span className="pc-plan-boite" style={{ left: "4%", top: "54%", width: "14%", height: "7%" }}>
              <em>&lt;button&gt;</em>
            </span>
            <span className="pc-plan-boite pc-plan-image" style={{ left: "54%", top: "20%", width: "42%", height: "44%" }}>
              <em>&lt;img&gt;</em>
            </span>
            <span className="pc-plan-boite" style={{ left: "4%", top: "70%", width: "28%", height: "24%" }}>
              <em>&lt;section&gt;</em>
            </span>
            <span className="pc-plan-boite" style={{ left: "36%", top: "70%", width: "28%", height: "24%" }}>
              <em>&lt;section&gt;</em>
            </span>
            <span className="pc-plan-boite" style={{ left: "68%", top: "70%", width: "28%", height: "24%" }}>
              <em>&lt;section&gt;</em>
            </span>
          </div>

          <div className="pc-site">
            <div className="pc-site-entete">
              <span className="pc-site-logo">
                <i />
                Nova
              </span>
              <span className="pc-site-liens">
                <span>Accueil</span>
                <span>Services</span>
                <span>Projets</span>
                <span>Avis</span>
                <b>Contact</b>
              </span>
            </div>
            <div className="pc-site-hero">
              <div>
                <span className="pc-site-tag">✦ Nouveau</span>
                <p className="pc-site-h1">
                  Votre marque,
                  <br />
                  enfin <span>en grand.</span>
                </p>
                <span className="pc-site-gris" style={{ width: "86%" }} />
                <span className="pc-site-gris" style={{ width: "64%" }} />
                <span className="pc-site-boutons">
                  <b>Découvrir</b>
                  <span>Nous contacter</span>
                </span>
              </div>
              <div className="pc-site-visuel">
                <i className="pc-site-cube" />
                <span className="pc-site-courbe">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M2 34 C 20 30, 28 14, 44 20 S 70 30, 98 6" fill="none" stroke="#e5489e" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="pc-site-cartes">
              {[
                ["Design", "#8b5cf6"],
                ["Mobile", "#ec4899"],
                ["Rapide", "#f59e0b"],
              ].map(([label, couleur]) => (
                <span key={label}>
                  <i style={{ background: couleur }} />
                  <b>{label}</b>
                  <span className="pc-site-gris" style={{ width: "70%" }} />
                </span>
              ))}
            </div>
          </div>
          <span className="pc-balayage-site" />
        </div>
      </div>

      {/* Téléphone */}
      <div className="pc-tel" aria-hidden>
        <div className="pc-tel-ecran">
          <span className="pc-tel-entete">
            <span className="pc-site-logo">
              <i />
              Nova
            </span>
            <span className="pc-tel-burger" />
          </span>
          <span className="pc-tel-visuel">
            <i className="pc-site-cube" />
          </span>
          <p className="pc-tel-h1">
            Votre marque,
            <br />
            enfin <span>en grand.</span>
          </p>
          <b className="pc-tel-bouton">Découvrir</b>
          <span className="pc-tel-ligne" style={{ background: "#8b5cf6" }} />
          <span className="pc-tel-ligne" style={{ background: "#f59e0b" }} />
        </div>
      </div>

      {/* Atouts */}
      <span className="pc-puce pc-puce-1" aria-hidden>
        <i style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>✦</i>
        Design sur-mesure
      </span>
      <span className="pc-puce pc-puce-2" aria-hidden>
        <i style={{ background: "linear-gradient(135deg,#3b82f6,#22d3ee)" }}>▢</i>
        100 % responsive
      </span>
      <span className="pc-puce pc-puce-3" aria-hidden>
        <i style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}>⚡</i>
        Ultra rapide
      </span>

      <Curseur className="pc-curseur-1" />

      {/* Faisceau de lumière */}
      <span className="pc-faisceau" aria-hidden />

      {/* Logo */}
      <div className="pc-logo" aria-hidden>
        <span className="pc-logo-lms">LMS</span>
        <span className="pc-logo-trait" />
        <span className="pc-logo-digital">DIGITAL</span>
      </div>

      <span className="pc-dm" aria-hidden>
        <i>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </i>
        <span>
          <b>DM pour plus d&apos;infos</b>
          <small>Écrivez-moi en message privé</small>
        </span>
      </span>

      <Curseur className="pc-curseur-2" />
    </div>
  );
}

function Curseur({ className }: { className: string }) {
  return (
    <svg className={`pc-curseur ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 2.5 L4 19 L8.6 14.9 L11.6 21.3 L14.4 20 L11.5 13.8 L17.6 13.6 Z"
        fill="#fff"
        stroke="#14122a"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
