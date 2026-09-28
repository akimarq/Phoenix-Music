import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-center w-full h-16 bg-black text-white position:fixed top-0 z-20 position:absolute">
                <Link href="/"className="text-2xl text-white bg-[linear-gradient(to_right,#B2C8FD,#FFC1B7,#B2C9F6,#B2C8FD)] bg-[length:200%_auto] bg-clip-text hover:text-transparent animate-gradient-scroll [animation-play-state:paused] hover:[animation-play-state:running] transition-all duration-50 hover:scale-105">
                    phoenix
                </Link>
            </div>
        </nav>
    )
}