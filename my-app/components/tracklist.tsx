'use client';
import { useState } from 'react';
import { Track } from './track';
import { TrackMore } from './trackmore';
import { albums } from '../src/app/albums';

export function TrackList({
    slug,
    album,
    sections,

}: {
    slug: string;
    album: typeof albums[0];
    sections: { name: string; tracks: typeof album.tracks }[];
}) {
    const [selected, setSelected] = useState<typeof album.tracks[0] | null>(null);
    return (
        <div>
            {/* Tracklist area */}  
            <div className="flex flex-row gap-10">
            {/* track list */}
            <div className="flex flex-col items-center justify-center gap-10">
            {sections.map((section) => (
                <div key={section.name}>
                {section.name !== "" && (
                    <p className="text-5xl font-semibold mb-10">{section.name}</p>
                )}
                    <div className="grid grid-cols-3 gap-5 mb-10">
                        {section.tracks.map((track) => (
                        <Track
                            onToggle={() =>
                                setSelected((current) =>
                                current?.title === track.title ? null : track
                                )
                            }
                            slug={album.slug}
                            key={track.title}
                            group=""
                            title={track.title}
                            year={track.year}
                            description={track.description}
                            dedication={track.dedication}
                        />
                        ))}
                    </div>
                </div>
                ))}
            </div>
            {/* track more  info */}
            {selected ? <TrackMore track={selected} /> : null}
            </div>
        </div>
    );}

    
    
    
