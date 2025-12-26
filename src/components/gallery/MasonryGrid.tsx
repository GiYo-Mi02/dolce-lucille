'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CakeModal from './CakeModal'; 
import { Project } from '@/types'; // FIX: Import from shared types

interface MasonryGridProps {
  items: Project[];
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCake, setSelectedCake] = useState<Project | null>(null);

  return (
    <>
      {/* GRID LAYOUT FIXES:
        - columns-1 on mobile (stacked) -> columns-2 on tablet -> columns-3 on desktop
        - gap-4 on mobile (tight) -> gap-8 on desktop (spacious)
        - Removed 'space-y' to prevent misalignment
      */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8"
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
              className="break-inside-avoid mb-4 md:mb-8" // FIX: Margin bottom for spacing
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedCake(item)}
            >
              <div className={`
                group relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer
                transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/10
              `}>
                
                {/* Image Area */}
                <div className={`relative w-full ${item.aspect} bg-stone-100 overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Label */}
                <div className={`
                  absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 
                  bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-xl md:rounded-2xl
                  border border-white/40 shadow-lg
                  transform transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
                  ${hoveredId === item.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0 lg:translate-y-full'
                  }
                `}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <span className={`
                        inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1
                        ${item.color} text-espresso/80
                      `}>
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-espresso leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedCake && (
          <CakeModal 
            cake={selectedCake} 
            onClose={() => setSelectedCake(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}