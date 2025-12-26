'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types'; // We'll import the type to keep it safe

interface CakeModalProps {
  cake: Project;
  onClose: () => void;
}

export default function CakeModal({ cake, onClose }: CakeModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* 1. The Backdrop (Blur & Darken) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-espresso/60 backdrop-blur-sm cursor-pointer"
      />

      {/* 2. The Modal Card */}
      <motion.div 
        layoutId={`card-${cake.id}`} // Magic layout transition
        className="relative w-full max-w-4xl bg-cream rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-900/20 max-h-[90vh] flex flex-col md:flex-row"
      >
        
        {/* Close Button (Mobile/Desktop) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: The Image (Full Height) */}
        <div className={`relative w-full md:w-1/2 h-64 md:h-auto ${cake.color}`}>
          <Image 
            src={cake.image} 
            alt={cake.title} 
            fill 
            className="object-cover"
          />
        </div>

        {/* Right: The Info */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
          
          <div className="mb-6">
            <span className={`
              inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3
              ${cake.color} text-espresso/80
            `}>
              {cake.category}
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-espresso leading-none mb-2">
              {cake.title}
            </h2>
            <span className="font-mono text-sm text-espresso/40">Baked in {cake.date}</span>
          </div>

          <div className="space-y-6 text-espresso/70 font-sans leading-relaxed text-lg">
            <p>{cake.description}</p>
            
            {/* Fake "Ingredients" or "Notes" section for extra detail */}
            <div className="bg-white/50 p-6 rounded-2xl border border-espresso/5">
              <h3 className="font-serif text-xl text-espresso mb-3">Tasting Notes</h3>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Organic vanilla bean base</li>
                <li>Swiss meringue buttercream</li>
                <li>Hand-painted gold accents</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-espresso/10 flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest uppercase text-espresso/30">
              Project ID: #{cake.id}
            </span>
            <button className="px-6 py-3 bg-espresso text-cream rounded-full font-bold hover:bg-rose-400 transition-colors">
              Inquire About This Style
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}