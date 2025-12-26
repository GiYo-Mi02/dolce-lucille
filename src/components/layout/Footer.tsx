'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Don't show Navbar on the Splash Screen (Home) if you want it clean
  if (isHome) return null;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-cream/80 backdrop-blur-md border-b border-espresso/5">
      {/* Logo */}
      <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-espresso hover:opacity-70 transition-opacity">
        Dolcè Lucille.
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 font-sans text-sm font-medium tracking-wide text-espresso/80">
        <Link href="/gallery" className="hover:text-rose-400 transition-colors">Gallery</Link>
        <Link href="/about" className="hover:text-rose-400 transition-colors">Our Story</Link>
        <Link href="/contact" className="hover:text-rose-400 transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button (Simple) */}
      <Link href="/contact" className="px-5 py-2 bg-espresso text-cream rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-400 transition-colors">
        Inquire
      </Link>
    </nav>
  );
}