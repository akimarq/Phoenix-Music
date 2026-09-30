import { albums } from "../../albums";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TrackList } from "../../../../components/tracklist";
import { AlbumDesc } from "../../../../components/albumdesc";

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
      <div className="flex h-auto w-full min-w-0 max-w-full flex-col items-center justify-center gap-30">
        {/* Album info area */}
        <AlbumDesc album={album} />

        <TrackList slug={album.slug} album={album} sections={sections} />

      </div>
);
}