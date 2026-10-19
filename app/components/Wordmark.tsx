// Logo texte « LMS DIGITAL », comme dans la vidéo de présentation.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 font-display leading-none ${className}`}>
      <span className="text-chrome text-[1.4rem] font-extrabold tracking-[-0.03em]">LMS</span>
      <span className="text-[0.6rem] font-medium tracking-[0.42em] text-muted">DIGITAL</span>
    </span>
  );
}
