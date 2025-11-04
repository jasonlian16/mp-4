import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-blue-500 text-white shadow-md">
            <nav className="flex justify-center items-center gap-8 py-4 text-lg font-medium">
                <Link
                href="/"
                >
                Home
                </Link>
                <Link
                href="/image"
                >
                Images
                </Link>
            </nav>
        </header>
    )
}