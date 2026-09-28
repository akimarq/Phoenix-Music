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
        <h1 className="text-5xl font-bold mb-10">{group}</h1>
        <div className="flex flex-col items-center justify-start h-100 w-75 bg-black rounded-lg text-white gap-5"> 
            
            
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
                <h1 className="text-2xl font-bold text-center">{title}</h1>
                <h1 className="text-l text-center">{year}</h1>
                {/* <p className="text-md">{description}</p> */}
            </div>
        </div>
        </div>
        
    )
}