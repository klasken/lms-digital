import { Instagram, Mail, MapPin } from "lucide-react";
import Navbar from "./components/Navbar";
import Wordmark from "./components/Wordmark";
import DmButton from "./components/DmButton";
import Realisations from "./components/Realisations";
import ContactForm from "./components/ContactForm";
import EcranPC from "./components/EcranPC";
import ReelPhone from "./components/ReelPhone";
import { REALISATIONS } from "./data/realisations";
import { EMAIL, INSTAGRAM, INSTAGRAM_URL } from "./data/site";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Realisations />
        <Methode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-28 md:pb-32 md:pt-40">
      <div aria-hidden className="nebula pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-night"
      />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h1 className="font-display uppercase">
          <span className="block text-[0.8rem] font-medium tracking-[0.34em] text-ink/90 md:text-[1.05rem]">
            Création de
          </span>
          <span className="text-gradient mt-3 block pb-2 text-[clamp(2.6rem,12.4vw,4rem)] font-bold leading-[0.95] tracking-[-0.04em] md:mt-4 md:text-[clamp(3rem,8vw,7.2rem)]">
            Sites internet
          </span>
        </h1>

        <div className="mt-10 grid gap-16 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pt-4">
            <p className="max-w-[33rem] text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
              Je crée des sites sur mesure pour les traiteurs, pâtissières, artisans et indépendants. Un design à votre
              image, pensé pour le téléphone et relié à votre Instagram.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3.5 font-semibold text-night transition hover:bg-white"
              >
                Demander un devis
              </a>
              <a
                href="#realisations"
                className="rounded-full px-6 py-3.5 text-ink ring-1 ring-white/25 transition hover:ring-white/60"
              >
                Voir les réalisations
              </a>
            </div>
            <p className="mt-10 max-w-[30rem] text-sm leading-relaxed text-faint">
              Derniers sites mis en ligne :{" "}
              {REALISATIONS.map((p, i) => (
                <span key={p.slug}>
                  <a href={`#${p.slug}`} className="text-muted underline decoration-white/20 underline-offset-4 hover:text-ink">
                    {p.nom}
                  </a>
                  {i < REALISATIONS.length - 2 ? ", " : i === REALISATIONS.length - 2 ? " et " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className="lg:col-span-7 lg:-mr-4">
            <EcranPC className="rise mx-auto max-w-[720px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const ETAPES = [
  {
    titre: "On en parle",
    texte:
      "En message privé ou via le formulaire : votre activité, vos photos, ce que vos clients doivent pouvoir faire sur le site.",
  },
  {
    titre: "Je dessine votre site",
    texte: "Une première version à votre image, que l'on ajuste ensemble avant d'aller plus loin.",
  },
  {
    titre: "Je le construis",
    texte: "Textes, photos, galerie, vidéos et version mobile : tout est intégré, puis testé sur téléphone.",
  },
  {
    titre: "Il est en ligne",
    texte: "Le site est publié et vous recevez le lien, prêt à mettre dans votre bio Instagram.",
  },
];

// Les 4 couleurs du dégradé LMS, une par étape.
const COULEURS_ETAPES = ["var(--color-cyan)", "var(--color-violet)", "var(--color-magenta)", "var(--color-orange)"];

function Methode() {
  return (
    <section id="methode" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className="max-w-[48rem] text-balance font-display text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          De la première discussion à la mise en ligne
        </h2>

        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ETAPES.map((e, i) => (
            <li key={e.titre} className="relative">
              <span
                aria-hidden
                className="block font-display text-6xl font-bold leading-none"
                style={{ color: COULEURS_ETAPES[i] }}
              >
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-[1.12rem] font-medium tracking-[-0.01em]">{e.titre}</h3>
              <p className="mt-3 leading-relaxed text-muted">{e.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-line py-24 md:py-36">
      <div aria-hidden className="nebula pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-4">
          <ReelPhone />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          <h2 className="text-balance font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Parlons de votre site
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-muted">
            Le plus simple : un message privé sur Instagram. Vous préférez écrire ici ? Remplissez le formulaire, je vous
            réponds sous 24 h.
          </p>

          <div className="mt-8">
            <DmButton size="lg" />
          </div>

          <div className="mt-12 rounded-2xl bg-night-2/80 p-5 ring-1 ring-line backdrop-blur md:p-8">
            <ContactForm />
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-ink">
                <Mail className="size-4" aria-hidden />
                {EMAIL}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden />
              Basé à Lille, clients partout en France
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <Wordmark />
          <p className="text-sm text-faint">Création de sites internet</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
            <Instagram className="size-4" aria-hidden />@{INSTAGRAM}
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-ink">
            {EMAIL}
          </a>
          <span className="text-faint">© {new Date().getFullYear()} LMS Digital</span>
        </div>
      </div>
    </footer>
  );
}
