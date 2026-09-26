import { Track } from "../../../../components/track";
import { albums } from "../../albums";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function albumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) {
    notFound();
  }
  
    return (
      <div className="flex flex-col items-center justify-center h-auto gap-30">
        {/* Album info area */}
        <div className="flex flex-row items-center justify-center h-screen gap-10">
          {/* Album cover */}
          <div className="relative flex flex-col items-center justify-center h-100 w-100  text-white">
            <Image 
              src={`/${album.cover}`}
              alt={slug}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Album Info */}
          <div className="flex flex-col h-100 bg-black rounded-lg p-10">
            <div className="flex flex-col justify-center h-[30%] w-175  text-white"> 
                <h1 className="text-6xl">{album.title}</h1>
            </div>

            <div className="flex flex-coljustify-center h-[10%] w-175  text-white"> 
                <h1 className="text-3xl">{album.subtitle}</h1>
            </div>

            <div className="flex flex-col justify-center h-[10%] w-175  text-white"> 
                <h1 className="text-2xl">{album.datePublished}</h1>
            </div>

            <div className="flex flex-col justify-center h-[50%] w-175  text-white"> 
                <h1 className="text-2xl">{album.description}</h1>
            </div>
          </div>
          
        </div>
        {/* Tracklist area */}  
        <div className="flex flex-col items-center justify-start h-auto gap-10">
          {/* Tracklist Entry*/}
          {album.tracks.map((track) => (
            <Track 
            group={track.group}
            key={track.title}
            title={track.title}
            year={track.year}
            description={track.description}
            />
          ))}
        </div>
      </div>
    );
  }