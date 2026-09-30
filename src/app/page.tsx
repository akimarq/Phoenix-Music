import { Album } from "../../components/album";
import { albums } from "./albums";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-auto gap-20">
        <h1 className="text-4xl mt-30">Welcome!</h1>
        <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 sm:gap-15">
          {albums.map((album) => (
            <div key={album.slug} className="max-sm:last:col-span-2">
              <Album slug={album.slug} cover={album.cover} preview={album.preview} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
