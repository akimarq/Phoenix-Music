import { TrackData } from '../src/app/albums';

export const TrackMore = ({ track }: { track: TrackData }) => {
    const { title, year, description } = track;

    return (
        <div>
            <div className="flex flex-col items-center justify-start h-200 w-175 bg-black rounded-lg text-white gap-5 sticky top-20 z-50 border border-white/10 animate-panel-in"> 
                
                <div className="flex flex-col items-center justify-center text-center text-white gap-3 pl-4 pr-4">
                    <div className="flex flex-row items-start justify-space-between  w-full text-left gap-2">
                        <div className="h-70 w-70 bg-[#161616] rounded-lg mt-10"/>
                        <div className="flex flex-col items-start justify-center mt-10 w-75">
                            <p className="text-4xl font-light">{title}</p>
                            <p className="text-2xl font-light">{year}</p>
                        </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden h-110 w-full pl-2 pr-2">
                        <p className="text-md font-medium text-justify whitespace-pre-wrap">{description}</p>
                    </div>
                    
                </div>
            </div>
            </div>
        
    )
}