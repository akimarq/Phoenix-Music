'use client';
import { dedicationStyles } from "@/app/dedications";
import { useNowPlaying } from "./nowplaying";

export function PlayingGlow() {
  const { playing, dedication } = useNowPlaying();

  return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 hidden h-96 overflow-hidden sm:block"
      >
      <div
        className={`absolute left-1/2 
          top-full h-[15%] w-screen -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-700 ease-in-out ${playing ? "opacity-60" : "opacity-0"} ${dedicationStyles[dedication] ?? "bg-white/40"}`}
      />
    </div>
  );
}