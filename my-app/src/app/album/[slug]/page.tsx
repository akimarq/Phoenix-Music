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

  const sections: { name: string; tracks: typeof album.tracks }[] = [];

  for (const track of album.tracks) {
    if (track.group !== "") {
      sections.push({ name: track.group, tracks: [track] });
    }else if (sections.length === 0) {
      sections.push({ name: "", tracks: [track] });
    }
     else {
      sections[sections.length - 1]?.tracks.push(track);
    }
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
                <p className="text-6xl font-semibold">{album.title}</p>
            </div>

            <div className="flex flex-coljustify-center h-[10%] w-175  text-white"> 
                <p className="text-3xl">{album.subtitle}</p>
            </div>

            <div className="flex flex-col justify-center h-[10%] w-175  text-white"> 
                <p className="text-2xl">{album.datePublished}</p>
            </div>

            <div className="flex flex-col justify-center h-[50%] w-175  text-white"> 
                <p className="text-2xl">{album.description}</p>
            </div>
          </div>
          
        </div>
        {/* Tracklist area */}  
        {sections.map((section) => (
        <div key={section.name}>
          {section.name !== "" && (
            <p className="text-5xl font-semibold mb-10">{section.name}</p>
          )}
          <div className="grid grid-cols-3 gap-10">
            {section.tracks.map((track) => (
              <Track
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
);
}