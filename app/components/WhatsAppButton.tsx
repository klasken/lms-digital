import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";

// Bouton WhatsApp, même style que le bouton DM Instagram.
export default function WhatsAppButton({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex shrink-0 items-center rounded-full bg-night-2 ring-1 ring-white/15 transition hover:ring-white/40 ${
        big ? "gap-4 py-2.5 pl-2.5 pr-7" : "gap-3 py-1.5 pl-1.5 pr-5"
      }`}
    >
      <span
        aria-hidden
        className={`grid shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_-4px_rgb(37_211_102/0.6)] ${
          big ? "size-12" : "size-8"
        }`}
      >
        <MessageCircle className={big ? "size-5" : "size-3.5"} strokeWidth={2.2} />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className={`font-semibold text-ink ${big ? "text-lg" : "text-sm"}`}>Écrire sur WhatsApp</span>
        {big && <span className="text-sm text-muted">Votre message est déjà prêt</span>}
      </span>
    </a>
  );
}
