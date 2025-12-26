'use client';

import { useState } from 'react';
import FilterPill from '@/components/gallery/FilterPill';
import MasonryGrid from '@/components/gallery/MasonryGrid'; // Removing { Project } from here
import { Project } from '@/types'; // FIX: Adding it here

// --- THE DATA ---
const CATEGORIES = ['All', 'Wedding', 'Birthday', 'Cupcakes', 'Seasonal'];

// ... imports remain the same

// --- EXPANDED DATA (40 Items) ---
const PORTFOLIO_ITEMS: Project[] = [
  // --- WEDDING (10 Items) ---
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
    title: "Rustic Naked Cake",
    category: "Wedding",
    date: "Summer 2024",
    description: "Exposed layers with fresh figs, honey drizzle, and thyme.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Ethereal White",
    category: "Wedding",
    date: "Winter 2023",
    description: "Pure white fondant with edible silver leaf and sugar pearls.",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "Boho Floral Stack",
    category: "Wedding",
    date: "Fall 2023",
    description: "Dried flowers and burnt orange frosting for a desert wedding.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop", // Reusing for demo
    color: "bg-rose-200",
    aspect: "aspect-[3/5]"
  },
  {
    id: 5,
    title: "Classic Elegance",
    category: "Wedding",
    date: "Spring 2024",
    description: "Three tiers of lemon chiffon with cascading sugar roses.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Modern Marble",
    category: "Wedding",
    date: "Summer 2024",
    description: "Grey and white marble fondant with gold geometric accents.",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-square"
  },
  {
    id: 7,
    title: "Golden Anniversary",
    category: "Wedding",
    date: "Winter 2023",
    description: "Rich chocolate mud cake covered in edible gold lustre.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-[3/4]"
  },
  {
    id: 8,
    title: "Garden Party",
    category: "Wedding",
    date: "Spring 2024",
    description: "Pressed edible violas on smooth buttercream.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop",
    color: "bg-pistachio-100",
    aspect: "aspect-[4/5]"
  },
  {
    id: 9,
    title: "Vintage Lace",
    category: "Wedding",
    date: "Summer 2023",
    description: "Intricate piped lace details over dusty pink fondant.",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-[3/4]"
  },
  {
    id: 10,
    title: "Minimalist Tier",
    category: "Wedding",
    date: "Fall 2023",
    description: "Sharp edges, smooth finish, single statement bloom.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[3/5]"
  },

  // --- BIRTHDAY (10 Items) ---
  {
    id: 11,
    title: "Pastel Dream Tower",
    category: "Birthday",
    date: "Winter 2023",
    description: "Confetti layers with watercolor finish and gold leaf accents.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lavender-100",
    aspect: "aspect-[3/5]"
  },
  {
    id: 12,
    title: "Midnight Chocolate",
    category: "Birthday",
    date: "Fall 2023",
    description: "Dark chocolate ganache with salted caramel drip.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[4/3]"
  },
  {
    id: 13,
    title: "Unicorn Fantasy",
    category: "Birthday",
    date: "Summer 2024",
    description: "Swirled pastel frosting with handmade sugar horn.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-square"
  },
  {
    id: 14,
    title: "Dino Dig",
    category: "Birthday",
    date: "Spring 2024",
    description: "Chocolate crumb 'dirt' with marzipan fossils.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-[4/5]"
  },
  {
    id: 15,
    title: "Pink Champagne",
    category: "Birthday",
    date: "Winter 2023",
    description: "Rosé infused sponge with strawberry buttercream.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-200",
    aspect: "aspect-[3/4]"
  },
  {
    id: 16,
    title: "Galaxy Glaze",
    category: "Birthday",
    date: "Fall 2023",
    description: "Mirror glaze finish mimicking the nebula.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lavender-100",
    aspect: "aspect-square"
  },
  {
    id: 17,
    title: "Citrus Smash",
    category: "Birthday",
    date: "Summer 2024",
    description: "First birthday smash cake with orange zest.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-square"
  },
  {
    id: 18,
    title: "Cookies & Cream",
    category: "Birthday",
    date: "Spring 2024",
    description: "Oreo crumble filling with vanilla bean frosting.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[3/4]"
  },
  {
    id: 19,
    title: "Mermaid Scales",
    category: "Birthday",
    date: "Summer 2023",
    description: "Ombre piping resembling underwater scales.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop",
    color: "bg-pistachio-100",
    aspect: "aspect-[3/5]"
  },
  {
    id: 20,
    title: "Retro Shag",
    category: "Birthday",
    date: "Winter 2023",
    description: "70s style piped fur texture in bright pastels.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-square"
  },

  // --- CUPCAKES (10 Items) ---
  {
    id: 21,
    title: "Forest Floor Cupcakes",
    category: "Cupcakes",
    date: "Autumn 2023",
    description: "Matcha frostings with chocolate soil and marzipan mushrooms.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop",
    color: "bg-pistachio-100",
    aspect: "aspect-[4/5]"
  },
  {
    id: 22,
    title: "Red Velvet Bites",
    category: "Cupcakes",
    date: "Winter 2023",
    description: "Classic red velvet with cream cheese swirl.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf80fd44?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-square"
  },
  {
    id: 23,
    title: "Lemon Meringue",
    category: "Cupcakes",
    date: "Summer 2024",
    description: "Lemon filled cupcakes topped with torched meringue.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-square"
  },
  {
    id: 24,
    title: "Double Choc",
    category: "Cupcakes",
    date: "Fall 2023",
    description: "Chocolate on chocolate with ganache filling.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-[3/4]"
  },
  {
    id: 25,
    title: "Vanilla Bean",
    category: "Cupcakes",
    date: "Spring 2024",
    description: "Simple, elegant vanilla with sprinkles.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf80fd44?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[4/5]"
  },
  {
    id: 26,
    title: "Salted Caramel",
    category: "Cupcakes",
    date: "Winter 2023",
    description: "Caramel core with sea salt topping.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-square"
  },
  {
    id: 27,
    title: "Berry Blast",
    category: "Cupcakes",
    date: "Summer 2024",
    description: "Mixed berry compote with purple buttercream.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-200",
    aspect: "aspect-[3/4]"
  },
  {
    id: 28,
    title: "Chai Spice",
    category: "Cupcakes",
    date: "Fall 2023",
    description: "Spiced cake with cinnamon buttercream.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf80fd44?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-square"
  },
  {
    id: 29,
    title: "Coconut Cloud",
    category: "Cupcakes",
    date: "Spring 2024",
    description: "Coconut shreds over whipped frosting.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[3/5]"
  },
  {
    id: 30,
    title: "Tiramisu Cups",
    category: "Cupcakes",
    date: "Winter 2023",
    description: "Coffee soaked sponge with mascarpone.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-square"
  },

  // --- SEASONAL (10 Items) ---
  {
    id: 31,
    title: "Lemon Zest Delight",
    category: "Seasonal",
    date: "Summer 2023",
    description: "Lemon curd filling with poppyseed layers and candied citrus.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-square"
  },
  {
    id: 32,
    title: "Pumpkin Spice",
    category: "Seasonal",
    date: "Autumn 2023",
    description: "Spiced pumpkin layers with maple frosting.",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-[3/4]"
  },
  {
    id: 33,
    title: "Peppermint Bark",
    category: "Seasonal",
    date: "Winter 2023",
    description: "Chocolate cake with crushed candy canes.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-[4/5]"
  },
  {
    id: 34,
    title: "Easter Egg",
    category: "Seasonal",
    date: "Spring 2024",
    description: "Speckled egg frosting with pastel layers.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    color: "bg-pistachio-100",
    aspect: "aspect-square"
  },
  {
    id: 35,
    title: "Summer Berry Tart",
    category: "Seasonal",
    date: "Summer 2024",
    description: "Fresh strawberry and blueberry tart.",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-200",
    aspect: "aspect-[3/4]"
  },
  {
    id: 36,
    title: "Harvest Apple",
    category: "Seasonal",
    date: "Autumn 2023",
    description: "Caramelized apple filling with cinnamon.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop",
    color: "bg-cream",
    aspect: "aspect-[3/5]"
  },
  {
    id: 37,
    title: "Gingerbread House",
    category: "Seasonal",
    date: "Winter 2023",
    description: "Structure cake resembling a winter cottage.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    color: "bg-espresso",
    aspect: "aspect-square"
  },
  {
    id: 38,
    title: "Valentine Heart",
    category: "Seasonal",
    date: "Winter 2024",
    description: "Heart shaped red velvet with ganache.",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-400",
    aspect: "aspect-square"
  },
  {
    id: 39,
    title: "Spring Bloom",
    category: "Seasonal",
    date: "Spring 2024",
    description: "Cherry blossom inspired design.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop",
    color: "bg-rose-100",
    aspect: "aspect-[3/4]"
  },
  {
    id: 40,
    title: "Tropical Heat",
    category: "Seasonal",
    date: "Summer 2023",
    description: "Passionfruit and mango mousse cake.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    color: "bg-lemon-100",
    aspect: "aspect-[4/5]"
  }
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

      {/* Grid Section */}
      {/* FIX: Changed px-6 to px-4 for mobile, preserved max-w-7xl */}
      <section className="px-4 md:px-6 pb-24 max-w-7xl mx-auto">
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