'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* --- Background Decor (Abstract Blobs) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-100 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-lemon-100 rounded-full blur-[80px] -z-10" 
      />

      {/* --- Main Content --- */}
      <div className="text-center z-10 px-6">
        
        {/* 1. Small 'Established' Tag */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] text-espresso/40 uppercase mb-6 block"
        >
          Est. 2024
        </motion.span>

        {/* 2. The Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-espresso mb-8 leading-[0.9]"
        >
          Dolcè <br className="md:hidden" />
          <span className="italic text-rose-400">Lucille</span>.
        </motion.h1>

        {/* 3. The Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md mx-auto text-lg md:text-xl text-espresso/70 mb-12 font-sans font-light leading-relaxed"
        >
          Sculpting memories in buttercream. <br/>
          An archive of our sweetest works.
        </motion.p>

        {/* 4. The 'Enter' Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-espresso text-cream rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-rose-900/10"
          >
            {/* Hover Effect Layer */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-rose-400 rounded-full group-hover:w-80 group-hover:h-80 opacity-20"></span>
            
            <span className="relative font-medium tracking-widest uppercase text-sm group-hover:text-rose-100 transition-colors">
              Enter Gallery
            </span>
          </Link>
        </motion.div>
      </div>

      {/* --- Footer --- */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 w-full text-center text-[10px] text-espresso/30 font-sans tracking-widest uppercase"
      >
        © {new Date().getFullYear()} The Dolcè Lucille Group
      </motion.footer>

    </main>
  );
}