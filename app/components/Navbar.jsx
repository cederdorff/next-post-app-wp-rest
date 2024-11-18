"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-teal-700 text-white py-4 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post App</h1>
        <nav className="space-x-4">
          <Link
            href="/"
            className={`px-4 py-3 rounded hover:bg-teal-500 cursor-pointer transition-all ${
              pathname === "/" ? "bg-teal-500 " : "bg-teal-600"
            }`}>
            Home
          </Link>
          <Link
            href="/posts"
            className={`px-4 py-3 rounded hover:bg-teal-500 cursor-pointer transition-all ${
              pathname === "/posts" ? "bg-teal-500 " : "bg-teal-600"
            }`}>
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
