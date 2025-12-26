'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// A curated selection of your best shots for the homepage
const SHOWCASE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/5]" },
  { src: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=800&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/5]" },
  { src: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream lg:flex">
      
      {/* --- LEFT SIDE: Sticky Branding (45% Width) --- */}
      <div className="lg:w-[45%] lg:h-screen lg:fixed lg:top-0 lg:left-0 flex flex-col justify-center px-8 md:px-16 py-20 z-10 bg-cream">
        
        {/* Decorative Background Blob for Left Side */}
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-[0.3em] text-espresso/40 uppercase mb-6 block">
            Est. 2024
          </span>
          
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif text-espresso mb-8 leading-[0.9]">
            Dolcè <br/>
            <span className="italic text-rose-400">Lucille</span>.
          </h1>
          
          <p className="max-w-md text-lg text-espresso/70 mb-10 font-sans font-light leading-relaxed">
            Where artistry meets appetite. We sculpt memories in buttercream, crafting bespoke cakes for your most cherished moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-espresso text-cream rounded-full font-bold uppercase tracking-widest text-xs hover:bg-rose-400 hover:scale-105 transition-all shadow-xl shadow-rose-900/10"
            >
              View Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-espresso/10 text-espresso rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:border-white transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>

        {/* Footer info for Desktop */}
        <div className="hidden lg:block absolute bottom-12 text-[10px] text-espresso/30 uppercase tracking-widest">
          © {new Date().getFullYear()} by Lucille Gonzales
        </div>
      </div>

      {/* --- RIGHT SIDE: The Visuals (55% Width) --- */}
      {/* On mobile, this stacks below. On desktop, it sits to the right and scrolls. */}
      <div className="lg:w-[55%] lg:ml-[45%] bg-white/50 min-h-screen p-4 md:p-8">
        
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {SHOWCASE_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="break-inside-avoid"
            >
              <div className={`relative w-full ${img.aspect} rounded-2xl overflow-hidden group`}>
                <Image 
                  src={img.src} 
                  alt="Cake Preview" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only Footer */}
        <div className="lg:hidden text-center py-12 text-[10px] text-espresso/30 uppercase tracking-widest">
          © {new Date().getFullYear()} by Lucille Gonzales
        </div>

      </div>

    </main>
  );
}