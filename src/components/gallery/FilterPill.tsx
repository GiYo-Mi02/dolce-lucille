'use client';

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
        ${isActive 
          ? 'bg-espresso text-cream shadow-lg scale-105' 
          : 'bg-transparent text-espresso/60 hover:bg-rose-100/50 hover:text-espresso'
        }
      `}
    >
      {label}
    </button>
  );
}