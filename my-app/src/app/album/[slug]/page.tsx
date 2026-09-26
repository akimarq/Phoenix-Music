import { Track } from "../../../../components/track";
import { albums } from "../../albums";
import { notFound } from "next/navigation";

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
          <div className="flex flex-col items-center justify-center h-100 w-100 bg-blue-500 text-white">
              {/* <img src="/images/album.jpg" alt="Album Cover" className="w-full h-full object-cover" /> */}
          </div>
          {/* Album Info */}
          <div className="flex flex-col h-100">
            <div className="flex flex-col justify-center h-15 w-175 bg-blue-500 text-white"> 
                <h1 className="text-5xl font-bold">{album.title}</h1>
            </div>

            <div className="flex flex-coljustify-center h-10 w-175 bg-blue-500 text-white"> 
                <h1 className="text-xl">{album.subtitle}</h1>
            </div>

            <div className="flex flex-col justify-center h-10 w-175 bg-blue-500 text-white"> 
                <h1 className="text-2xl font-bold">{album.datePublished}</h1>
            </div>

            <div className="flex flex-col justify-center h-65 w-175 bg-blue-500 text-white"> 
                <h1 className="text-2xl font-bold">{album.description}</h1>
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