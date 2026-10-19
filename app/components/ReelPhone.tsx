"use client";

import { useEffect, useRef } from "react";
import { PhoneFrame } from "./Frames";

// La vidéo de présentation LMS Digital, lue dans un téléphone quand elle est visible à l'écran.
export default function ReelPhone() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative isolate mx-auto w-[220px] md:w-[270px]">
      <div aria-hidden className="bg-gradient-brand absolute -inset-8 -z-10 rounded-full opacity-25 blur-3xl" />
      <PhoneFrame className="rounded-[2.2rem] p-[7px]" ecranClassName="rounded-[1.75rem]">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          poster="/media/reel-lms-digital-vertical-poster.webp"
          aria-label="Vidéo de présentation LMS Digital : création de sites internet"
          className="block aspect-[9/16] w-full object-cover"
        >
          <source src="/media/reel-lms-digital-vertical.mp4" type="video/mp4" />
        </video>
      </PhoneFrame>
    </div>
  );
}
