
export const Track = ({
    group,
    title,
    year,
    description,
}: {
    group: string;
    title: string;
    year: string;
    description: string;
}) => {
    return (
        <div>
        <h1 className="text-5xl font-bold mb-10">{group}</h1>
        <div className="flex flex-col items-center justify-start h-100 w-75 bg-blue-500 text-white gap-5"> 
            <div className="flex flex-col items-center justify-center mt-10 h-60 w-60 bg-red-500 text-white"><h1>Track</h1></div>
            <div className="flex flex-col items center justify-center-75 text-white">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
                <h1 className="text-l text-center">{year}</h1>
                {/* <p className="text-md">{description}</p> */}
            </div>
        </div>
        </div>
        
    )
}