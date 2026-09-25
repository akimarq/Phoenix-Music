import Link from "next/link";

export const Track = () => {
    return (
        <div className="flex flex-row items-center justify-center h-90 w-200 bg-blue-500 text-white gap-5"> 
            <div className="flex flex-col items-center justify-center h-75 w-75 bg-red-500 text-white"><h1>Track</h1></div>
            <div className="flex flex-col justify-space-between h-75 w-115 bg-green-500 text-white">
                <h1 className="text-4xl font-bold">Track Title</h1>
                <h1 className="text-2xl">Year Released</h1>
                <p className="text-1xl">Description</p>
            </div>
        </div>
    )
}