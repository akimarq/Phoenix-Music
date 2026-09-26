import Image from "next/image";
import { Album } from "../../components/album";
import { albums } from "./albums";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-20">
      <div className="flex flex-col items-center justify-center h-auto gap-20"></div>
      <h1 className="text-4xl mt-10">Welcome!</h1>
      <div className="flex flex-row items-center justify-center gap-15">
        {albums.map((album: AlbumData) => (
            <Album 
            slug={album.slug}
            cover={album.cover}
            key={album.slug}
            />
          ))}
        {/* <Album slug="master-collection" cover="quindi_master_collection_cover.png" />
        <Album slug="10th-anniversary" cover="10thAnn_logo.png" />
        <Album slug="all-there-ever-was" cover="AllThereEverWas.png" /> */}
      </div>
    </div>
  );
}
