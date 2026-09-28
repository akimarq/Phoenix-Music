import { dedicationStyles } from "@/app/dedications";

export const Track = ({
    group,
    title,
    year,
    description,
    dedication,
}: {
    group: string;
    title: string;
    year: string;
    description: string;
    dedication: string;
}) => {
    return (
        <div>
        <p className="text-5xl font-semibold mb-10">{group}</p>
        <div className="flex flex-col items-center justify-start h-100 w-75 bg-black rounded-lg text-white gap-5 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:shadow-[0px_0px_19px_6px_rgba(255,_255,_255,_0.09)]"> 
            
            
            {dedication !== "" && (
                <div className="flex flex-col items-center justify-center mt-10 h-60 w-60 text-white">
                    <div
                        className={`h-60 w-60 ${dedicationStyles[dedication] ?? "bg-white"}`}
                        style={{
                            maskImage: "url(/QuindiLogo.svg)",
                            WebkitMaskImage: "url(/QuindiLogo.svg)",
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
                <p className="text-2xl font-semibold text-center">{title}</p>
                <p className="text-l font-medium text-center">{year}</p>
                {/* <p className="text-md">{description}</p> */}
            </div>
        </div>
        </div>
        
    )
}