'use client';

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { SoundCloudWidget } from "./soundcloud";

const START_MS = 160000;

export const Album = ({ slug, cover, preview }: { slug: string; cover: string; preview: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SoundCloudWidget | null>(null);

  const getWidget = () => {
    if (!widgetRef.current && iframeRef.current && window.SC) {
      widgetRef.current = window.SC.Widget(iframeRef.current);
    }
    return widgetRef.current;
  };

  return (
    <div
      className="relative w-80 h-80 rounded-lg text-white hover:scale-105 transition-all duration-150 cursor-pointer hover:shadow-[0px_0px_30px_2px_rgba(255,_255,_255,_0.4)] border border-white/10"
      onMouseEnter={() => {
        const widget = getWidget();
        widget?.play();
        widget?.seekTo(START_MS);
      }}
      onMouseLeave={() => {
        getWidget()?.pause();
      }}
    >
      <Script id="soundcloud-widget-api" src="https://w.soundcloud.com/player/api.js" />
      {preview && (
        <iframe
          ref={iframeRef}
          src={preview}
          allow="autoplay"
          title={`${slug} preview`}
          className="absolute h-0 w-0 opacity-0 pointer-events-none"
        />
      )}
      <Link href={`/album/${slug}`} className="block w-full h-full">
        <Image src={`/${cover}`} alt={slug} fill sizes="320px" className="object-cover rounded-lg" />
      </Link>
    </div>
  );
};