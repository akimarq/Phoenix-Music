import Image from "next/image";
import { Album } from "../../components/album";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <div className="flex flex-row items-center justify-center gap-15">
        <Album />
        <Album />
        <Album />
      </div>
    </div>
  );
}
