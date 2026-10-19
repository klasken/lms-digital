/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";

// Fenêtre de navigateur stylisée, avec le nom du site dans l'onglet.
export function BrowserFrame({
  titre,
  accent,
  children,
  className = "",
}: {
  titre: string;
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#1c1932] shadow-[0_50px_90px_-40px_rgb(0_0_0/0.9)] ring-1 ring-white/12 ${className}`}
    >
      <div className="flex h-7 items-center gap-3 border-b border-white/[0.07] px-3 md:h-8">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-white/20 md:size-2.5" />
          <span className="size-2 rounded-full bg-white/20 md:size-2.5" />
          <span className="size-2 rounded-full bg-white/20 md:size-2.5" />
        </span>
        <span className="mx-auto flex h-[1.1rem] min-w-0 max-w-[62%] items-center gap-1.5 rounded-md bg-white/[0.06] px-2.5 text-[0.62rem] text-muted md:h-5 md:text-[0.7rem]">
          <span className="size-1.5 shrink-0 rounded-full" style={{ background: accent }} aria-hidden />
          <span className="truncate">{titre}</span>
        </span>
        <span className="w-[34px] shrink-0 md:w-[42px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

// Téléphone stylisé.
export function PhoneFrame({
  children,
  className = "rounded-[1.6rem] p-[5px]",
  ecranClassName = "rounded-[1.3rem]",
}: {
  children: ReactNode;
  className?: string;
  ecranClassName?: string;
}) {
  return (
    <div
      className={`relative bg-[#121022] shadow-[0_40px_70px_-30px_rgb(0_0_0/0.95)] ring-1 ring-white/15 ${className}`}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-[9px] z-10 h-[9px] w-[28%] -translate-x-1/2 rounded-full bg-[#121022]"
      />
      <div className={`overflow-hidden ${ecranClassName}`}>{children}</div>
    </div>
  );
}

// Capture d'une page entière, qui défile au survol (voir .shot dans globals.css).
export function ScrollShot({
  src,
  srcPetit,
  width,
  height,
  alt,
  ratio,
  fond,
  duree,
  sizes,
}: {
  src: string;
  srcPetit?: string;
  width: number;
  height: number;
  alt: string;
  ratio: string;
  fond: string;
  duree: number;
  sizes?: string;
}) {
  return (
    <div
      className="shot"
      style={{ aspectRatio: ratio, background: fond, "--scroll-duration": `${duree}s` } as CSSProperties}
    >
      <img
        src={src}
        srcSet={srcPetit ? `${srcPetit} 1000w, ${src} ${width}w` : undefined}
        sizes={srcPetit ? sizes : undefined}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
