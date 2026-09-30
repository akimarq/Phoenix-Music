'use client';
import Image from "next/image";
import { dedicationStyles } from "@/app/dedications";
import { albumTrackLogos } from "@/app/albums";

export const Track = ({
    slug,
    title,
    year,
    dedication,
    onToggle,
    isCompact,
}: {
    slug: string;
    title: string;
    year: string;
    dedication: string;
    onToggle: () => void;
    isCompact: boolean;
}) => {
    const logo = albumTrackLogos[slug];
    const logoSize = isCompact ? "sm:h-30 sm:w-30 h-20 w-20" : "sm:h-60 sm:w-60 h-20 w-20";

    return (
        <div>
            <button
                type="button"
                onClick={onToggle}
                className={`flex max-w-full flex-col items-center justify-start gap-5 rounded-lg border border-white/10 bg-black p-0 font-[inherit] text-white shadow-[0_3px_10px_rgb(0,0,0,0.5)] duration-200 ease-in-out hover:scale-105 hover:shadow-[0px_0px_30px_2px_rgba(255,_255,_255,_0.4)] cursor-pointer ${isCompact ? "h-55 w-40 sm:h-75 sm:w-55" : "h-55 w-40 sm:h-100 sm:w-75"}`}
                >
                {logo && (
                    <div className={`relative flex flex-col items-center justify-center mt-10 text-white transition-[width,height] duration-200 ease-in-out ${logoSize}`}>
                        {dedication === "" ? (
                            <Image src={`/${logo}`} alt="" fill className="object-contain" />
                        ) : (
                            <div
                                className={`${dedicationStyles[dedication] ?? "bg-white"} transition-[width,height] duration-200 ease-in-out ${logoSize}`}
                                style={{
                                    maskImage: `url(/${logo})`,
                                    WebkitMaskImage: `url(/${logo})`,
                                    maskSize: "contain",
                                    maskRepeat: "no-repeat",
                                    maskPosition: "center",
                                }}
                                title={dedication}
                            />
                        )}
                    </div>
                )}

                <div className={`flex flex-col items-center text-center text-white ${isCompact ? "text-md" : "sm:text-2xl text-md"}`}>
                    <p className="text-md sm:text-2xl font-normal text-center">{title}</p>
                    <p className="text-sm sm:text-lg text-center">{year}</p>
                </div>
            </button>
        </div>
    )
}