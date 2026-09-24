import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-center w-full h-16 bg-red-500 text-white">
                <Link href="/">phoenix</Link>
            </div>
        </nav>
    )
}