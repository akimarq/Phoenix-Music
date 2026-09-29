'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
export const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            if (Math.abs(y - lastY) < 8) return;
            setHidden(y > lastY && y > 64);
            lastY = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-20 transition-transform duration-300 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex items-center justify-center w-full h-16 bg-black text-white border-b border-white/30">
            <Link href="/" className="inline-block origin-center transition-transform duration-200 ease-out [transform:scale(1)_rotate(0.001deg)] hover:[transform:scale(1.2)_rotate(0.001deg)] ">
                <span className="inline-block text-3xl font-light [text-rendering:geometricPrecision] text-white bg-[linear-gradient(to_right,#B2C8FD,#FFC1B7,#B2C9F6,#B2C8FD)] bg-[length:200%_auto] bg-clip-text hover:text-transparent animate-gradient-scroll [animation-play-state:paused] hover:[animation-play-state:running] transition-[filter] duration-200 hover:[filter:drop-shadow(0_0_6px_rgb(178_200_253/0.65))_drop-shadow(0_0_10px_rgb(255_193_183/0.5))]">
                phoenix
                </span>
            </Link>
            </div>
        </nav>
    )
}