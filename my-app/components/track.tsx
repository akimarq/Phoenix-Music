import { dedicationStyles } from "@/app/dedications";
import {albums, albumTrackLogos} from "@/app/albums";

export const Track = ({
    slug,
    group,
    title,
    year,
    description,
    dedication,
}: {
    slug: string;
    group: string;
    title: string;
    year: string;
    description: string;
    dedication: string;
}) => {
    return (
        <div>
        <p className="text-5xl font-semibold mb-10">{group}</p>
        <div className="flex flex-col items-center justify-start h-100 w-75 bg-black rounded-lg text-white gap-5 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:shadow-[0px_0px_19px_6px_rgba(255,_255,_255,_0.4)] border border-white/10"> 
            
            
            {dedication !== "" && (
                <div className="flex flex-col items-center justify-center mt-10 h-60 w-60 text-white">
                    <div
                        className={`h-60 w-60 ${dedicationStyles[dedication] ?? "bg-white"}`}
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

            
            
            {/*  */}
            <div className="flex flex-col items center justify-center-75 text-white">
                <p className="text-2xl font-normal text-center">{title}</p>
                <p className="text-lg text-center">{year}</p>
                {/* <p className="text-md">{description}</p> */}
            </div>
        </div>
        </div>
        
    )
}