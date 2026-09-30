'use client';

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { AlbumData } from "../src/app/albums";
import { isNavHidden, subscribeNav } from "./navstate";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DOCKED = { top: 40, left: 40, size: 150 };
const SCROLL_DISTANCE = 900;
const NAVBAR_HEIGHT = 64;
const NAV_GAP = NAVBAR_HEIGHT + 20 - DOCKED.top;

export function AlbumDesc({ album }: { album: AlbumData }) {
    const frameRef = useRef<HTMLDivElement>(null);
    const coverRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const frame = frameRef.current;
        const cover = coverRef.current;
        const desc = descRef.current;
        if (!frame || !cover || !desc) return;

        const start = () => {
            const rect = frame.getBoundingClientRect();
            return { top: rect.top + window.scrollY, left: rect.left, size: rect.width };
        };

        gsap.set(cover, { position: "fixed", zIndex: 40 });

        const timeline = gsap.timeline({
            scrollTrigger: {
                start: 0,
                end: SCROLL_DISTANCE,
                scrub: 0.5,
                invalidateOnRefresh: true,
            },
        });

        timeline.fromTo(
            cover,
            {
                top: () => start().top,
                left: () => start().left,
                width: () => start().size,
                height: () => start().size,
                borderRadius: "8px 0px 0px 8px",
            },
            {
                top: DOCKED.top,
                left: DOCKED.left,
                width: DOCKED.size,
                height: DOCKED.size,
                borderRadius: "8px 8px 8px 8px",
                ease: "none",
            },
            0
        );

        timeline.to(desc, { x: 40, autoAlpha: 0, ease: "none" }, 0);

        const offset = { value: isNavHidden() ? 0 : NAV_GAP };
        const apply = () => gsap.set(cover, { y: offset.value * timeline.progress() });

        timeline.eventCallback("onUpdate", apply);
        apply();

        return subscribeNav(() => {
            gsap.to(offset, {
                value: isNavHidden() ? 0 : NAV_GAP,
                duration: 0.3,
                ease: "power2.out",
                overwrite: true,
                onUpdate: apply,
            });
        });
    });

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center h:[90%] sm:h-screen mt-15">
            {/* Album cover */}
            <div ref={frameRef} className="flex sm:flex-row flex-col items-center justify-center relative h-60 w-60 sm:h-150 sm:w-150">
                <div ref={coverRef} className="absolute inset-0 overflow-hidden sm:rounded-l-lg sm:border border-white/10">
                    <Image src={`/${album.cover}`} alt={album.title} fill sizes="600px" priority className="object-cover" />
                </div>
            </div>

            {/* Album info */}
            <div
                ref={descRef}
                className="flex flex-col sm:h-150 sm:w-175 bg-black sm:rounded-r-lg p-5 sm:gap-5 sm:border border-white/10 overflow-y-auto overflow-x-hidden"
            >
                <h1 className="text-xl sm:text-2xl font-semibold">Introduction</h1>
                <p className="text-md sm:text-xl whitespace-pre-wrap">{album.description}</p>
            </div>
        </div>
    );
}