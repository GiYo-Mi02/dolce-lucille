'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define what a Project looks like
export interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  color: string; // Tailwind class like "bg-rose-100"
  aspect: string; // Tailwind class like "aspect-[3/4]"
}

interface MasonryGridProps {
  items: Project[];
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div 
      layout
      className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
    >
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            key={item.id}
            className="break-inside-avoid"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`
              group relative w-full rounded-[2rem] overflow-hidden cursor-zoom-in
              transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/10
            `}>
              
              {/* Image Area */}
              <div className={`relative w-full ${item.aspect} bg-stone-100 overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                
                {/* Subtle Overlay on hover for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* The Floating "Museum Label" */}
              <div className={`
                absolute bottom-4 left-4 right-4 
                bg-white/95 backdrop-blur-md p-5 rounded-2xl
                border border-white/40 shadow-lg
                transform transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
                ${hoveredId === item.id 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0 lg:translate-y-full'
                }
              `}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className={`
                      inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1
                      ${item.color} text-espresso/80
                    `}>
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-espresso">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-espresso/40 pt-1">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-espresso/70 font-sans line-clamp-2">
                  {item.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}