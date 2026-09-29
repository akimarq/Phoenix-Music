'use client';

import Image from "next/image";
import { albums } from "../src/app/albums";
export function AlbumDesc({ album }: { album: typeof albums[0] }) {
    return(
        <div className="flex flex-row items-center justify-center h-screen">
            {/* Album cover */}
            <div className="relative flex flex-col items-center justify-center h-150 w-150  text-white border border-white/10 rounded-l-lg">
            <Image 
                src={`/${album.cover}`}
                alt={album.slug}
                fill
                className="object-cover rounded-lg"
            />
            </div>
            {/* Album Info */}
            <div className="flex flex-col h-150 w-175 bg-black rounded-r-lg p-5 gap-5 border border-white/10 overflow-y-auto overflow-x-hidden">
                <h1 className="text-2xl font-semibold">Introduction</h1>
                <p className="text-xl whitespace-pre-wrap">{album.description}</p>
            </div>
        
        
      </div>
    )
}