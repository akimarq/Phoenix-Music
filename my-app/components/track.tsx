'use client';
import { dedicationStyles } from "@/app/dedications";
import {albums, albumTrackLogos} from "@/app/albums";

export const Track = ({
    slug,
    group,
    title,
    year,
    dedication,
    onToggle,
    isCompact,
}: {
    slug: string;
    group: string;
    title: string;
    year: string;
    dedication: string;
    onToggle: () => void;
    isCompact: boolean;
}) => {
    return (
        <div>
            <p className="text-5xl font-semibold mb-10">{group}</p>
            <button
                type="button"
                onClick={onToggle}
                className={`flex flex-col items-center justify-start bg-black rounded-lg text-white gap-5 hover:scale-105 duration-200 ease-in-out cursor-pointer hover:shadow-[0px_0px_30px_2px_rgba(255,_255,_255,_0.4)] border border-white/10 font-[inherit] p-0 ${isCompact ? "h-75 w-55" : "h-100 w-75"}`}
            >
                {dedication !== "" && (
                    <div className={`flex flex-col items-center justify-center mt-10 text-white transition-[width,height] duration-200 ease-in-out ${isCompact ? "h-30 w-30" : "h-60 w-60"}`}>
                    <div
                        className={`${dedicationStyles[dedication] ?? "bg-white"} transition-[width,height] duration-200 ease-in-out ${isCompact ? "h-30 w-30" : "h-60 w-60"}`}
                        style={{
                        maskImage: `url(/${albumTrackLogos[slug]})`,
                        WebkitMaskImage: `url(/${albumTrackLogos[slug]})`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        }}
                        title={dedication}
                    />
                    </div>
                )}

                <div className={`flex flex-col items-center text-center text-white ${isCompact ? "text-md" : "text-2xl"}`}>
                <p className="text-2xl font-normal text-center">{title}</p>
                <p className="text-lg text-center">{year}</p>
                </div>
            </button>
        </div>
    )
}