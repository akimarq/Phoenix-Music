import Image from "next/image";
import { Album } from "../../components/album";
import { albums } from "./albums";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-20">
      <div className="flex flex-col items-center justify-center h-auto gap-20"></div>
      <h1 className="text-4xl font-bold mt-10">Welcome!</h1>
      <div className="flex flex-row items-center justify-center gap-15">
        <Album slug="master-collection"/>
        <Album slug="10th-anniversary"/>
        <Album slug="all-there-ever-was" />
      </div>
    </div>
  );
}
