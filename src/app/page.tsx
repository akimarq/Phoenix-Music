import { Album } from "../../components/album";
import { albums } from "./albums";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-auto gap-20">
        <h1 className="text-4xl mt-30">Welcome!</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-15">
          {albums.map((album) => (
              <Album 
              slug={album.slug}
              cover={album.cover}
              preview={album.preview}
              key={album.slug}
              />
            ))}
        </div>
      </div>
    </div>
    
  );
}
