import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { useCal } from '../context/CalContext';

export const MobileStickyBar: React.FC = () => {
  const { openCal } = useCal();

  return (
    <aside 
      aria-label="Quick contact bar" 
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-white/10 bg-[#060913]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden shadow-2xl shadow-black"
    >
      <a
        href="https://wa.me/923141030223?text=Hi%20Axorks%20team,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Axorks on WhatsApp"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500/10 active:bg-emerald-500/20 py-3 text-sm font-semibold text-emerald-400 border border-emerald-500/25 transition-all shadow-xs"
      >
        <MessageSquare className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={openCal}
        aria-label="Open discovery call booking calendar"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] active:brightness-95 py-3 text-sm font-bold text-[#1A1000] shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
      >
        <Calendar className="h-4 w-4 text-[#1A1000]" />
        <span>Book Call</span>
      </button>
    </aside>
  );
};
