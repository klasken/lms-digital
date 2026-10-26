import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Wordmark from "../components/Wordmark";
import { EMAIL, ENTREPRISE, INSTAGRAM, INSTAGRAM_URL, WHATSAPP } from "../data/site";

export const metadata: Metadata = {
  // « · LMS Digital » est ajouté automatiquement par le modèle de titre de app/layout.tsx.
  title: "Mentions légales et confidentialité",
  description: "Informations légales sur LMS Digital (Marius Ceugniet, entrepreneur individuel) et politique de confidentialité.",
  // Sans cette ligne, la page reprendrait l'adresse canonique de l'accueil (« / »)
  // et Google la traiterait comme un doublon de la page d'accueil.
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="LMS Digital, retour à l'accueil">
            <Wordmark />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-5 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Mentions légales
        </h1>
        <p className="mt-4 text-muted">Dernière mise à jour : octobre 2026</p>

        <Bloc titre="Éditeur du site">
          <Infos
            lignes={[
              ["Nom commercial", ENTREPRISE.nomCommercial],
              ["Responsable", ENTREPRISE.nom],
              ["Statut", ENTREPRISE.statut],
              ["SIREN", ENTREPRISE.siren],
              ["SIRET (siège)", ENTREPRISE.siret],
              ["Activité (code APE)", ENTREPRISE.naf],
              ["Date de création", ENTREPRISE.creation],
              ["Adresse", ENTREPRISE.adresse],
              ["Email", EMAIL],
              ["WhatsApp", WHATSAPP],
            ]}
          />
          <p>
            Ces informations peuvent être vérifiées sur{" "}
            <Lien href={ENTREPRISE.annuaire}>l&apos;annuaire officiel des entreprises</Lien>.
          </p>
          <p>Directeur de la publication : {ENTREPRISE.nom}.</p>
        </Bloc>

        <Bloc titre="Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
            <Lien href="https://vercel.com">vercel.com</Lien>.
          </p>
        </Bloc>

        <Bloc titre="Propriété intellectuelle">
          <p>
            Les textes, le logo LMS Digital et la mise en page de ce site appartiennent à {ENTREPRISE.nom}. Toute
            reproduction sans autorisation est interdite.
          </p>
          <p>
            Les sites présentés dans la section « Réalisations » ont été créés par LMS Digital pour ses clients. Leurs
            noms, photos et contenus restent la propriété de chaque client.
          </p>
        </Bloc>

        <h2
          id="confidentialite"
          className="mt-20 scroll-mt-24 font-display text-[clamp(1.7rem,4vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em]"
        >
          Confidentialité et données personnelles
        </h2>

        <Bloc titre="Données collectées">
          <p>
            Le formulaire de contact recueille votre nom, votre adresse email, le type de projet et votre message. Ces
            informations servent uniquement à répondre à votre demande et à préparer un devis. Elles ne sont jamais
            revendues ni utilisées à des fins publicitaires.
          </p>
          <p>
            Pour l&apos;envoi, le formulaire passe par le service FormSubmit, qui transmet votre message par email à{" "}
            {ENTREPRISE.nom}.
          </p>
        </Bloc>

        <Bloc titre="Durée de conservation">
          <p>
            Les demandes sont conservées le temps de l&apos;échange, puis 3 ans au plus après le dernier contact si
            aucun projet n&apos;est lancé.
          </p>
        </Bloc>

        <Bloc titre="Vos droits">
          <p>
            Vous pouvez à tout moment demander à consulter, corriger ou supprimer vos données, en écrivant à{" "}
            <Lien href={`mailto:${EMAIL}`}>{EMAIL}</Lien>. Une réponse vous sera apportée sous un mois au plus.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (
            <Lien href="https://www.cnil.fr">cnil.fr</Lien>).
          </p>
        </Bloc>

        <Bloc titre="Cookies">
          <p>
            Ce site n&apos;utilise ni cookie publicitaire ni outil de suivi de l&apos;audience. Aucun bandeau de
            consentement n&apos;est donc nécessaire.
          </p>
          <p>
            Les boutons Instagram (<Lien href={INSTAGRAM_URL}>@{INSTAGRAM}</Lien>) et WhatsApp ouvrent ces services
            dans un nouvel onglet : leurs propres conditions s&apos;appliquent alors.
          </p>
        </Bloc>
      </main>

      <footer className="border-t border-line">
        <p className="mx-auto max-w-[860px] px-5 py-8 text-xs leading-relaxed text-faint md:px-8">
          © {new Date().getFullYear()} LMS Digital · {ENTREPRISE.nom}, {ENTREPRISE.statut} · SIRET {ENTREPRISE.siret}
        </p>
      </footer>
    </>
  );
}

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h3 className="font-display text-lg font-medium tracking-[-0.01em]">{titre}</h3>
      <div className="mt-4 grid gap-4 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function Infos({ lignes }: { lignes: [string, string][] }) {
  return (
    <dl className="grid overflow-hidden rounded-2xl bg-night-2/80 ring-1 ring-line">
      {lignes.map(([label, valeur]) => (
        <div key={label} className="grid gap-1 border-b border-line px-5 py-3.5 last:border-b-0 sm:grid-cols-[13rem_1fr] sm:gap-6">
          <dt className="text-sm text-faint">{label}</dt>
          <dd className="text-ink">{valeur}</dd>
        </div>
      ))}
    </dl>
  );
}

function Lien({ href, children }: { href: string; children: React.ReactNode }) {
  const externe = href.startsWith("http");
  return (
    <a
      href={href}
      {...(externe ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-ink underline decoration-violet/60 underline-offset-4 hover:decoration-violet"
    >
      {children}
    </a>
  );
}
