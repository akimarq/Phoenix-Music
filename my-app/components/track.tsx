
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
            <div className="flex flex-row items-center justify-center h-90 w-200 bg-blue-500 text-white gap-5"> 
                <div className="flex flex-col items-center justify-center h-75 w-75 bg-red-500 text-white"><h1>Track</h1></div>
                <div className="flex flex-col justify-space-between h-75 w-115 text-white">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h1 className="text-xl">{year}</h1>
                    <p className="text-md">{description}</p>
                </div>
            </div>
        </div>
        
    )
}