import { dedicationStyles } from "@/app/dedications";
import {albums, albumTrackLogos} from "@/app/albums";

export const TrackMore = () => {

    return (
        <div>
            <div className="flex flex-col items-center justify-start h-200 w-150 bg-black rounded-lg text-white gap-5 sticky top-15 z-50 border border-white/10"> 
                
                <div className="flex flex-col items center justify-center-75 text-white">
                    <div className="flex flex-row items-center justify-center h-80 w-80 bg-red-500 rounded-lg mt-10">
                        <p></p>
                    </div>
                    <p className="text-4xl font-semibold">Title</p>
                    <p className="text-2xl font-medium">Year</p>
                    <p className="text-lg font-medium">Description</p>
                </div>
            </div>
            </div>
        
    )
}