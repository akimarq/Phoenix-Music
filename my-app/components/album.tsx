import Link from "next/link";

export const Album = ({ slug }: { slug: string }) => {
    return (
            <div className="flex items-center justify-center w-60 h-60 bg-red-500 text-white">
                <Link href={`/album/${slug}`}>
                <p>album</p>
                </Link>
            </div>
    )
}

