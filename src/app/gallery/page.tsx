'use client';

import { useState } from 'react';
import FilterPill from '@/components/gallery/FilterPill';
import MasonryGrid, { Project } from '@/components/gallery/MasonryGrid';

// --- THE DATA ---
const CATEGORIES = ['All', 'Wedding', 'Birthday', 'Cupcakes', 'Seasonal'];

const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "The Venetian Tier",
    category: "Wedding",
    date: "Spring 2024",
    description: "Vanilla bean sponge with raspberry compote and Swiss meringue buttercream.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-[3/4]" 
  },
  {
    id: 2,
    title: "Lemon Zest Delight",
    category: "Seasonal",
    date: "Summer 2023",
    description: "Lemon curd filling with poppyseed layers and candied citrus.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-square" 
  },
  {
    id: 3,
    title: "Forest Floor Cupcakes",
    category: "Cupcakes",
    date: "Autumn 2023",
    description: "Matcha frostings with chocolate soil and marzipan mushrooms.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop",
    color: "bg-pistachio-100",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    title: "Pastel Dream Tower",
    category: "Birthday",
    date: "Winter 2023",
    description: "Confetti layers with watercolor finish and gold leaf accents.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lavender-100",
    aspect: "aspect-[3/5]" 
  },
  {
    id: 5,
    title: "Rustic Naked Cake",
    category: "Wedding",
    date: "Summer 2024",
    description: "Exposed layers with fresh figs, honey drizzle, and thyme.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-square"
  },
  {
    id: 6,
    title: "Midnight Chocolate",
    category: "Birthday",
    date: "Fall 2023",
    description: "Dark chocolate ganache with salted caramel drip.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[4/3]" 
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter Logic
  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-cream text-espresso selection:bg-rose-200">
      
      {/* Header */}
      <header className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-espresso/10 bg-white text-xs font-bold tracking-widest uppercase text-espresso/60">
          Curated Archive
        </span>
        <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-6">
          The Collection
        </h1>
        <p className="max-w-xl mx-auto text-lg text-espresso/70 leading-relaxed font-sans">
          A retrospective of our favorite flour-dusted memories.
        </p>
      </header>

      {/* Filter Bar */}
      <nav className="sticky top-4 z-40 mb-16 flex justify-center">
        <div className="bg-white/80 backdrop-blur-lg p-2 rounded-full shadow-xl shadow-rose-900/5 border border-white/50 inline-flex gap-1 overflow-x-auto max-w-[90vw] no-scrollbar">
          {CATEGORIES.map((cat) => (
            <FilterPill 
              key={cat} 
              label={cat} 
              isActive={activeFilter === cat} 
              onClick={() => setActiveFilter(cat)} 
            />
          ))}
        </div>
      </nav>

      {/* Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <MasonryGrid items={filteredItems} />

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="font-serif text-2xl">No cakes found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}