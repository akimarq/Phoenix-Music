import Link from "next/link";
import Image from "next/image";

export const Album = ({ slug, cover }: { slug: string, cover: string }) => {
    return (
            <div className="relative justify-center w-80 h-80 rounded-lg text-white">
                <Link href={`/album/${slug}`} className="block w-full h-full">
                    <Image 
                    src={`/${cover}`}
                    alt={slug}
                    fill
                    className="object-cover rounded-lg"
                    />
                </Link>
            </div>
    )
}

