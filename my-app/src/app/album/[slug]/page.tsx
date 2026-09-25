import { Track } from "../../../../components/track";
import { albums } from "../../albums";

export default function album() {
    return (
      <div className="flex flex-col items-center justify-center h-auto gap-30">
        {/* Album info area */}
        <div className="flex flex-row items-center justify-center h-screen gap-10">
          {/* Album cover */}
          <div className="flex flex-col items-center justify-center h-100 w-100 bg-blue-500 text-white">
              {/* <img src="/images/album.jpg" alt="Album Cover" className="w-full h-full object-cover" /> */}
          </div>
          {/* Album Info */}
          <div className="flex flex-col h-100">
            <div className="flex flex-col justify-center h-15 w-175 bg-blue-500 text-white"> 
                <h1 className="text-5xl font-bold"></h1>
            </div>

            <div className="flex flex-coljustify-center h-10 w-175 bg-blue-500 text-white"> 
                <h1 className="text-xl">Optional Subtitle</h1>
            </div>

            <div className="flex flex-col justify-center h-10 w-175 bg-blue-500 text-white"> 
                <h1 className="text-2xl font-bold">Date Published</h1>
            </div>

            <div className="flex flex-col justify-center h-65 w-175 bg-blue-500 text-white"> 
                <h1 className="text-2xl font-bold">Album Description</h1>
            </div>
          </div>
          
        </div>
        {/* Tracklist area */}  
        <div className="flex flex-col items-center justify-start h-auto gap-10">
          {/* Tracklist Entry*/}
          <Track />
          <Track />
          <Track />
          <Track />
        </div>
      </div>
    );
  }