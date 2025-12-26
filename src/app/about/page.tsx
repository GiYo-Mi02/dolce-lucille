'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-espresso pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="text-rose-400 font-bold tracking-widest text-xs uppercase">The Atelier</span>
            <h1 className="text-5xl lg:text-6xl font-serif leading-none">
              Baking with <br/><span className="italic text-espresso/50">intention</span>.
            </h1>
            <p className="text-lg text-espresso/70 font-sans leading-relaxed">
              Dolcè Lucille began in a small kitchen with a single whisk and a family recipe for vanilla sponge. Today, we are a collective of artists who believe that cake is not just dessert—it is a centerpiece of celebration.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500"
          >
             {/* Placeholder for Team Photo */}
             <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-espresso/30">
               [Team Photo Placeholder]
             </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-rose-100/50">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🌸</div>
              <h3 className="font-bold mb-2">Seasonal First</h3>
              <p className="text-sm text-espresso/60">We only bake with fruits that are currently ripening on the vine.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-lemon-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🍋</div>
              <h3 className="font-bold mb-2">Zero Preservatives</h3>
              <p className="text-sm text-espresso/60">Real butter, fresh eggs, and organic flour. Nothing else.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-pistachio-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🍃</div>
              <h3 className="font-bold mb-2">Artistic Freedom</h3>
              <p className="text-sm text-espresso/60">Every cake is a unique sculpture, never an exact copy.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}