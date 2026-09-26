import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-center w-full h-16 bg-black text-white absolute sticky top-0 z-20">
                <Link href="/" className="text-2xl ">phoenix</Link>
            </div>
        </nav>
    )
}