import { Send } from "lucide-react";
import { INSTAGRAM_DM } from "../data/site";

// Le bouton « DM pour plus d'infos » de la vidéo, en version cliquable.
export default function DmButton({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <a
      href={INSTAGRAM_DM}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center rounded-full bg-night-2 ring-1 ring-white/15 transition hover:ring-white/40 ${
        big ? "gap-4 py-2.5 pl-2.5 pr-7" : "gap-3 py-1.5 pl-1.5 pr-5"
      }`}
    >
      <span
        aria-hidden
        className={`bg-gradient-brand grid shrink-0 place-items-center rounded-full text-white shadow-[0_0_24px_-4px_rgb(240_98_192/0.7)] ${
          big ? "size-12" : "size-8"
        }`}
      >
        <Send className={big ? "size-5" : "size-3.5"} strokeWidth={2.2} />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className={`font-semibold text-ink ${big ? "text-lg" : "text-sm"}`}>DM pour plus d&apos;infos</span>
        {big && <span className="text-sm text-muted">Écrivez-moi en message privé sur Instagram</span>}
      </span>
    </a>
  );
}
