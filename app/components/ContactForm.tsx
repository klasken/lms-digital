"use client";

import { useState, type FormEvent } from "react";
import { Check, ChevronDown, LoaderCircle } from "lucide-react";
import { INSTAGRAM } from "../data/site";

type Statut = { type: "succes" | "erreur"; message: string } | null;

const champ =
  "w-full rounded-xl bg-night px-4 py-3.5 text-ink ring-1 ring-line placeholder:text-faint transition focus:outline-none focus:ring-2 focus:ring-violet";

// Adresse qui reçoit les demandes du formulaire (via FormSubmit, https://formsubmit.co).
// Au tout premier envoi, FormSubmit envoie un mail d'activation à cette adresse : il faut cliquer dessus une fois.
const DESTINATAIRE = "ceugnietmarius@gmail.com";

const SERVICES: Record<string, string> = {
  vitrine: "Site vitrine",
  ecommerce: "Boutique en ligne",
  app: "Application mobile ou SaaS",
};

// Formulaire de demande de devis : chaque demande arrive directement par mail.
export default function ContactForm() {
  const [envoi, setEnvoi] = useState(false);
  const [statut, setStatut] = useState<Statut>(null);

  const envoyer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Champ piège invisible : rempli seulement par les robots.
    if (data.get("_honey")) return;

    const nom = String(data.get("nom") ?? "");
    const email = String(data.get("email") ?? "");
    const service = SERVICES[String(data.get("service"))] ?? String(data.get("service"));
    const message = String(data.get("message") ?? "");

    setEnvoi(true);
    setStatut(null);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${DESTINATAIRE}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nouvelle demande de devis : ${nom} (${service})`,
          _template: "table",
          _replyto: email,
          nom,
          email,
          projet: service,
          message,
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || String(json?.success) !== "true") throw new Error(json?.message ?? "Envoi refusé");
      form.reset();
      setStatut({ type: "succes", message: "Demande envoyée ✓ Je vous réponds sous 24 h." });
    } catch {
      setStatut({
        type: "erreur",
        message: `La demande n'est pas partie. Réessayez dans un instant, ou écrivez-moi directement sur Instagram (@${INSTAGRAM}).`,
      });
    } finally {
      setEnvoi(false);
    }
  };

  return (
    <form onSubmit={envoyer} className="grid gap-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm text-muted">Votre nom</span>
          <input name="nom" type="text" required autoComplete="name" className={champ} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted">Votre email</span>
          <input name="email" type="email" required autoComplete="email" className={champ} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-muted">Type de projet</span>
        <span className="relative">
          <select
            name="service"
            required
            defaultValue="vitrine"
            className={`${champ} cursor-pointer appearance-none pr-11`}
          >
            <option value="vitrine">Site vitrine</option>
            <option value="ecommerce">Boutique en ligne</option>
            <option value="app">Application mobile ou SaaS</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
            aria-hidden
          />
        </span>
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-muted">Votre projet</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Votre activité, ce que vous aimeriez sur le site, le lien de votre Instagram…"
          className={`${champ} resize-y`}
        />
      </label>

      {statut && (
        <p
          role={statut.type === "erreur" ? "alert" : "status"}
          className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
            statut.type === "succes"
              ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25"
              : "bg-rose-400/10 text-rose-300 ring-1 ring-rose-400/25"
          }`}
        >
          {statut.type === "succes" && <Check className="mt-0.5 size-4 shrink-0" aria-hidden />}
          {statut.message}
        </p>
      )}

      <button
        type="submit"
        disabled={envoi}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-night transition hover:bg-white disabled:cursor-wait disabled:opacity-60"
      >
        {envoi && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
        {envoi ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
