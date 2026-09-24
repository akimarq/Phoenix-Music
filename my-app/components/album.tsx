import Link from "next/link";

export const Album = () => {
    return (
        <nav>
            <div className="flex items-center justify-center w-40 h-40 bg-red-500 text-white">
                <Link href="/album">
                <p>album</p>
                </Link>
            </div>
        </nav>
    )
}

