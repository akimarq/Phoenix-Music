import Link from "next/link";
import Image from "next/image";

export const Album = ({ slug, cover }: { slug: string, cover: string }) => {
    return (
            <div className="relative justify-center w-80 h-80 rounded-lg text-white hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:shadow-[0px_0px_19px_6px_rgba(255,_255,_255,_0.05)]">
                <Link href={`/album/${slug}`} className="block w-full h-full">
                    <Image 
                    src={`/${cover}`}
                    alt={slug}
                    fill
                    sizes="320px"
                    className="object-cover rounded-lg"
                    />
                </Link>
            </div>
    )
}

